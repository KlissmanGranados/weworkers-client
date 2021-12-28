import { HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CaptadosBase, DataBaseCaptados, Records } from 'src/app/core/models/captados.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { FiltersService } from 'src/app/core/services/filters.service';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-dashboard-collector',
  templateUrl: './dashboard-collector.component.html',
  styleUrls: ['./dashboard-collector.component.css']
})
export class DashboardCollectorComponent implements OnInit, OnDestroy {
  listadoCaptados: Records[];
  userRole: any;
  welcome = true;
  supscription: Subscription;
  params: any = null;
  message: string = '';
  loading: boolean = false;

  constructor(
    private authService: AuthService,
    private Filterservice: FiltersService,
    public paginationService: PaginationService,
    private profileService: ProfileService
  ) {
    this.userRole = this.authService.getUserRole();
  }

  ngOnInit(): void {
    this.loading = true;
    this.getListado(1, 10);

    this.supscription = this.Filterservice.onSelectedlistadoFreelancer().subscribe(
      (response: DataBaseCaptados) => {
        if(response !== undefined && response !== null) {
          this.message = '';
          for(let i of response.records) {
            this.getdetailCaptado(i.id, i);
          }
          this.listadoCaptados = response.records;
          this.loading = false;
          console.log('ngOnInit response.metadata',response);

          this.params = response?.params || null;

          if(this.params !== null) {
            this.params = this.params.split('&');
            this.params = this.params.map((item, index, arr) => {
              let i = item.split('=');
              return { key: i[0], value: i[1] };
            });
            console.log('params', this.params);
          }

          this.paginationService.change({
            page: response.metadata.page,
            totalPages: response.metadata.totalPages,
            perPage: response.metadata.perPage,
            totalCount: response.metadata.totalCount
          });
        } else if(response === undefined) {
          this.listadoCaptados = [];
          this.params = null;
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
    if(this.userRole.rolesid === 2) {
      let params = new HttpParams()
      .set('perPage', perPage.toString())
      .set('page', page.toString());

      this.Filterservice.getListadoFreelancer(params.toString()).subscribe(
        (response: CaptadosBase) => {
          console.log('listadoCaptados',this.listadoCaptados);
          this.Filterservice.listadoFreelancer = response.data;
        }, error => {
          console.log(error);
          // colocar el mensaje de error aqui
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
    this.loading = true;
    this.paginationService.refreshListado = true;
  }

  getdetailCaptado(id, obj) {
    // let res;
    this.profileService.profile(id).subscribe(
      response =>{
        obj.perfilProfesional = response.data.perfil;
        // res = response;
        // return res;
      }, error =>{
        console.log(error)
        // res = null;
      }
    );
    // console.log('res',res)
  }

  ngOnDestroy() {
    this.Filterservice.resetValues();
    this.supscription.unsubscribe();
  }

}
