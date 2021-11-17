import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class DashboardFreelancerComponent implements OnInit, OnDestroy {
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
        if(response !== undefined && response !== null) {
          this.message = '';
          this.listadoProyecto = response.records;
          console.log('ngOnInit response.metadata',response.metadata);

          this.paginationService.change({
            page: response.metadata.page,
            totalPages: response.metadata.totalPages,
            perPage: response.metadata.perPage,
            totalCount: response.metadata.totalCount
          });
        } else if(response === undefined) {
          this.listadoProyecto = [];
          this.message = 'No se encontraron resultados para tu busqueda';
          this.paginationService.change({
            page: 0,
            totalPages: 0,
            perPage: 0,
            totalCount: 0
          });
          console.log(response);
          console.log(this.message)
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
          this.message = '';
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

  ngOnDestroy() {
    this.Filterservice.resetValues();
  }
}

