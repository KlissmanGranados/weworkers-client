import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
export class DashboardCollectorComponent implements OnInit {
  listadoCaptados: Records[];
  userRole: any;
  welcome = true;

  constructor(
    private authService: AuthService,
    private Filterservice: FiltersService,
    public paginationService: PaginationService,
    // private profileService: ProfileService
  ) {
    this.userRole = this.authService.getUserRole();
  }

  ngOnInit(): void {
    this.getListado(1, 10);

    this.Filterservice.onSelectedlistadoFreelancer().subscribe(
      (response: DataBaseCaptados) => {
        if(response !== null) {
          this.listadoCaptados = response.records;
          console.log('ngOnInit response.metadata',response);

          this.paginationService.change({
            page: response.metadata.page,
            totalPages: response.metadata.totalPages,
            perPage: response.metadata.perPage,
            totalCount: response.metadata.totalCount
          });
        } else {
          this.listadoCaptados = [];
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
          this.Filterservice.listadoFreelancer = response.data;
          // this.getdetailCaptado(response.data.id);
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

    this.paginationService.refreshListado = true;
  }

  // getdetailCaptado(id){
  //   this.profileService.profile(id).subscribe(
  //     response =>{
  //       console.log(response)
  //       console.log(id)
  //       return true;
  //     }, error =>{
  //       console.log(error)
  //       return false
  //     }
  //   );
  // }

}
