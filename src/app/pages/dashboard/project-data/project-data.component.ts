import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { ProjectListService } from 'src/app/core/services/project-list.service';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent implements OnInit, OnDestroy {
  userRole: any;
  detalleProyecto: any;
  listaFreelancer: any;
  supscription: Subscription;
  supscriptionPagination: Subscription;
  idProyecto: number;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private projectListService: ProjectListService,
    public paginationService: PaginationService,
  ) {
    this.userRole = this.authService.getUserRole();
    this.supscription = this.projectListService.onSelectedfreelanceList().subscribe(
      (response: any) => {
        if(response !== null) {
          this.listaFreelancer = response.records;
          console.log('response',response);

          this.paginationService.change({
            page: response.metadata.page,
            totalPages: response.metadata.totalPages,
            perPage: response.metadata.perPage,
            totalCount: response.metadata.totalCount
          });
        } else {
          this.listaFreelancer = [];
        }
      }
    );

    this.supscriptionPagination = this.paginationService.onSelectedrefreshListado().subscribe(
      response => {
        if(response) {
            this.getListado(this.paginationService.page, this.paginationService.perPage, this.idProyecto);
        }
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this._questionnaireService.idProyectoToQuiz = id;
      this.idProyecto = id;
      this.getDetalleProyecto(id);
      this.getListado(1, 10, id);
    });
  }

  getDetalleProyecto(idProyecto){
    this.projectListService.detallesProyecto(idProyecto).subscribe(
      response => {
        console.log('response',response.data)
        this.detalleProyecto = response.data;
      }, error =>{
        console.log(error)
      }
    );
  }

  getListado(page: number, perPage: number, idProyecto: number) {
    if(this.userRole.rolesid === 2) {
      let params = new HttpParams()
      .set('perPage', perPage.toString())
      .set('page', page.toString());

      this.projectListService.listadoPropuestas(idProyecto, params.toString()).subscribe(
        response =>{
          console.log('freelancer data', response)
          if(response.data.records instanceof Array) {
            if(response.data.records.length > 0) {
              this.projectListService.freelanceList = response.data;
            } else {
              this.projectListService.freelanceList = null;
              Swal.fire({
                icon: 'warning',
                title: `No hay propuestas de desarrolladores`
              });
            }
          } else if(response.data.records instanceof Object) {
            this.projectListService.freelanceList = null;
            Swal.fire({
              icon: 'warning',
              title: `No hay propuestas de desarrolladores`
            });
          } else {
            this.projectListService.freelanceList = null;

            Swal.fire({
              icon: 'warning',
              title: `No hay propuestas de desarrolladores`
            });
          }
        }, error =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error.message}`
          });
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.paginationService.resetValues();
    this.projectListService.resetValues();
    this.supscriptionPagination.unsubscribe();
    this.supscription.unsubscribe();
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

  contratar(freelanceId: number) {

  }
}
