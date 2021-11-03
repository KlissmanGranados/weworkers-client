import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DataBase, ProyectoBase, Records } from 'src/app/core/models/proyect.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { FiltersService } from 'src/app/core/services/filters.service';
import { PaginationService } from 'src/app/core/services/pagination.service';

@Component({
  selector: 'app-dashboard-freelancer',
  templateUrl: './dashboard-freelancer.component.html',
  styleUrls: ['./dashboard-freelancer.component.css']
})
export class DashboardFreelancerComponent implements OnInit {
  listadoProyecto: Records[];
  userRole: any;
  welcome = true;
  message: string = '';

  constructor(
    private primengConfig: PrimeNGConfig,
    private Filterservice: FiltersService,
    public paginationService: PaginationService,
    private authService: AuthService
  ) {
    this.userRole = this.authService.getUserRole();
  }

  ngOnInit(): void {
    this.getListado(1, 10);
    this.primengConfig.ripple = true;

    this.Filterservice.onSelectedlistadoProyecto().subscribe(
      (response: DataBase) => {
        if(response !== null) {
          this.message = '';
          this.listadoProyecto = response.records;
          console.log('ngOnInit response.metadata',response.metadata);

          this.paginationService.change({
            page: response.metadata.page,
            totalPages: response.metadata.totalPages,
            perPage: response.metadata.perPage,
            totalCount: response.metadata.totalCount
          });
        } else {
          this.listadoProyecto = [];
          this.message = 'No se encontraron resultados para tu busqueda';
        }
      }
    );

  }

  getListado(page: number, perPage: number){
    if(this.userRole.rolesid === 1) {
      let params = new HttpParams()
      .set('perPage', perPage.toString())
      .set('page', page.toString());

      this.Filterservice.getListadoProyectos(params.toString()).subscribe(
        (response: ProyectoBase) => {
          this.Filterservice.listadoProyecto = response.data;
        }, error => {
          console.log(error);
          // colocar el mensaje de error aqui
        }
      );
    }
  }

  onChangePagination(evt) {
    // console.log('currentPaginationPage = current: ' + evt.page + ' rows: ' + evt.rows);
    this.paginationService.change({
      page: evt.page+1,
      totalPages: this.paginationService.totalPages,
      perPage: evt.rows,
      totalCount: this.paginationService.totalCount
    });
    console.log('****cambio de pagina****');
    console.log('data',this.paginationService.paginationInfo);

    // this.getListado(this.paginationService.page, this.paginationService.perPage);
    this.paginationService.refreshListado = true;
  }


}

/***data: {metadata: {…}, records: Array(10)}
    message: string
     */

    // nivel de data
    /**
     *metadata:
        links:
          first: "http://weworkers-server.herokuapp.com/api/v1/comun/listar-proyectos/?perPage=10&page=1"
          last: "http://weworkers-server.herokuapp.com/api/v1/comun/listar-proyectos/?perPage=10&page=8"
          next: "http://weworkers-server.herokuapp.com/api/v1/comun/listar-proyectos/?perPage=10&page=2"
          previous: null
          self: "http://weworkers-server.herokuapp.com/api/v1/comun/listar-proyectos/?perPage=10&page=1"
          [[Prototype]]: Object
        page: 1
        pageCount: 10
        perPage: 10
        totalCount: 78
        [[Prototype]]: Object
      records: Array(10)
        0:
        descripcion: "perico"
        estado: true
        fechaCrea:
          etiqueta: "30/9/2021"
          etiquetaSemantica: "jueves, 30 de septiembre de 2021"
          valor: "2021-09-30T00:00:00.000Z"
          [[Prototype]]: Object
        fechaTermina:
          etiqueta: "7/10/2021"
          etiquetaSemantica: "jueves, 7 de octubre de 2021"
          valor: "2021-10-07T00:00:00.000Z"
          [[Prototype]]: Object
        id: 2
        modalidadNombre: "remoto"
        monedaId: 1
        monedaNombreCorto: "usd"
        monedaNombreLargo: "dólares"
        nombre: "pan dulce de otro :c 7w7"
        presupuesto: "200.00"
        reclutadoresId: 16
        tags: Array(3)
          0: {id: 68, nombre: 'cocina'}
          1: {id: 2, nombre: 'javascript'}
          2: {id: 69, nombre: 'chocolate'}
          length: 3
          [[Prototype]]: Array(0)
        tiposPagoId: 1
        tiposPagoNombre: "paypal"
        uri: string
        length: number
          */

