import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { ProjectListService } from 'src/app/core/services/project-list.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  listarProyectos: any;
  userRole: any;

  constructor(
    private projectListService: ProjectListService,
    public paginationService: PaginationService,
    private authService: AuthService,
  ) {
    this.userRole = this.authService.getUserRole();

    this.projectListService.onSelectedProyectList().subscribe(
      (response: any) => {
        if(response !== null) {
          this.listarProyectos = response.records;
          // console.log('ngOnInit response.metadata',response);

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
    );

    this.paginationService.onSelectedrefreshListado().subscribe(
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
