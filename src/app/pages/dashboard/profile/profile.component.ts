import { Component, OnInit } from '@angular/core';
import { DataBaseCaptados, dataCaptados, dataCollector, ProfileBase } from 'src/app/core/models/profile.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userRole: any;
  collectorData: ProfileBase;
  freelancerData: DataBaseCaptados;
  editFormMode: boolean = false;
  editFormProfessional: boolean = false;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    //usar value
    this.userRole = this.authService.getUserRole().value;
  }

  ngOnInit(): void {
    console.log('id',this.authService.profile().idusuario);
    this.profileService.profile(this.authService.profile().idusuario).subscribe(
      response =>{
        console.log('response',response);
        if (!this.userRole) {
          let dataResponse: dataCollector = response;
          console.log('collector data',dataResponse.data);
          this.collectorData = dataResponse.data;
        } else{
          let data: dataCaptados = response;
          console.log('freelancer data', data.data);
          this.freelancerData = data.data;
        }
        console.log('perfil', response)
      }, error =>{
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`
        })
      }
    )

    // this.profileService.profileDetails().subscribe(

    // )

  }

  updateMode(evt): void {
    console.log(evt)
    this.editFormMode = evt;
  }

}
