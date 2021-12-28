import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { ProjectListService } from 'src/app/core/services/project-list.service';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';
import { ChatManagerService } from 'src/app/core/services/chat-manager.service';
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
  loading: boolean = false;

  constructor(
    private _questionnaireService: QuestionnaireService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private projectListService: ProjectListService,
    public paginationService: PaginationService,
    private chatManagerService: ChatManagerService
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
      // this._questionnaireService.idProyectoToQuiz = id;
      this.idProyecto = id;
      this.getDetalleProyecto(id);
      this.getListado(1, 10, id);
    });

    this.chatManagerService.connect(this.authService.gettoken());
  }

  getDetalleProyecto(idProyecto){
    this.loading = true;
    this.projectListService.detallesProyecto(idProyecto).subscribe(
      response => {
        console.log('response',response.data)
        this.loading = false;
        this.detalleProyecto = response.data;
        this._questionnaireService.idProyectoToQuiz = {id: idProyecto, data: response.data };
      }, error =>{
        this.loading = false;
        console.log(error)
      }
    );
  }

  getListado(page: number, perPage: number, idProyecto: number) {
    if(this.userRole.rolesid === 2) {
      let params = new HttpParams()
      .set('perPage', perPage.toString())
      .set('page', page.toString());
      this.loading = true;
      this.projectListService.listadoPropuestas(idProyecto, params.toString()).subscribe(
        response =>{
          console.log('freelancer data', response)
          this.loading = false;
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
            this.loading = false;
            Swal.fire({
              icon: 'warning',
              title: `No hay propuestas de desarrolladores`
            });
          } else {
            this.projectListService.freelanceList = null;
            this.loading = false;
            Swal.fire({
              icon: 'warning',
              title: `No hay propuestas de desarrolladores`
            });
          }
        }, error =>{
          this.loading = false;
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

  contratar(freelance: any) {
    this.projectListService.agregarTrabajador({
      idProyecto: this.idProyecto,
      idUsuario: freelance.usuarioId
    }).subscribe(
      response => {
        freelance.usuarioParticipando = true;
        Swal.fire({
          icon: 'success',
          title: `${response.message}`
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`
        });
      }
    );
    // freelance.usuarioId
    //this.idProyecto

  }

  Borrarcontratar(freelance: any) {
    this.projectListService.eliminarTrabajador({
      idProyecto: this.idProyecto,
      idUsuario: freelance.usuarioId
    }).subscribe(
      response => {
        freelance.usuarioParticipando = false;
        Swal.fire({
          icon: 'success',
          title: `${response.message}`
        });
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`
        });
      }
    );
    // freelance.usuarioId
    //this.idProyecto

  }

  contactar(receivedId:number):void {
    const token = this.authService.profile();
    this.chatManagerService.createChat(this.detalleProyecto.id ,token.idusuario, receivedId);
  }
}
