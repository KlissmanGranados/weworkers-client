import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProjectListService } from 'src/app/core/services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  listarProyectos: any;
  userRole: any;
  supscription: Subscription;
  supscriptionPagination: Subscription;

  constructor(
    private projectListService: ProjectListService,
    public paginationService: PaginationService,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.userRole = this.authService.getUserRole();

    this.supscription = this.projectListService.onSelectedProyectList().subscribe(
      (response: any) => {
        if(this.userRole.rolesid === 2) {
          if(response !== null) {
            this.listarProyectos = response.records;

          this.paginationService.change({
              page: response.metadata.page,
              totalPages: response.metadata.totalPages,
              perPage: response.metadata.perPage,
              totalCount: response.metadata.totalCount
            });
          } else {
            this.listarProyectos = [];
          }
        }
      }
    );

    this.supscriptionPagination = this.paginationService.onSelectedrefreshListado().subscribe(
      response => {
        if(response) {
          this.getListado(this.paginationService.page, this.paginationService.perPage);
        }
      }
    );
  }

  ngOnInit(): void {
    this.getListado(1, 10);
  }

  ngOnDestroy(): void {
    this.paginationService.resetValues();
    this.projectListService.resetValues();
    this.supscriptionPagination.unsubscribe();
    this.supscription.unsubscribe();
  }

  getListado(page: number, perPage: number){
    if(this.userRole.rolesid === 2) {
      let params = new HttpParams()
      .set('perPage', perPage.toString())
      .set('page', page.toString());

      this.projectListService.listarProyectos(params.toString()).subscribe(
        response =>{
          console.log('projects', response.data.records)
          if(response.data.records.length > 0) {
            this.projectListService.proyectList = response.data;
          } else {
            this.listarProyectos = [];
            // Mensaje de no posee propyectos o propuestas
          }
        }, error =>{
          console.log(error)
        }
      );
    } else if(this.userRole.rolesid === 1) {
      let userId = this.authService.profile()?.idusuario;
      this.profileService.profile(userId).subscribe(
        response => {
          console.log('response', response);
          if(response.data.perfil.proyectos.length > 0) {
            this.listarProyectos = response.data.perfil.proyectos;
          } else {
            this.listarProyectos = [];
            // Mensaje de no posee propyectos o propuestas
          }
        }, error => {
          console.log(error)
        }
      );
    }
  }

  onChangePagination(evt) {
    this.paginationService.change({
      page: evt.page+1,
      totalPages: this.paginationService.totalPages,
      perPage: evt.rows,
      totalCount: this.paginationService.totalCount
    });

    this.paginationService.refreshListado = true;
  }

}
