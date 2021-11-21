import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-profile',
  templateUrl: './preview-profile.component.html',
  styleUrls: ['./preview-profile.component.css']
})
export class PreviewProfileComponent implements OnInit {
  userData: any;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let userId = params['id'];
      this.profile(userId);
    });
  }

  profile(userId){
    this.profileService.profile(userId).subscribe(
      response => {
        if(response.data === null) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `No hay data`
          })
        } else {
          console.log('response',response);
          if(Object.keys(response.data.perfil.tags).length === 0 && response.data.perfil.tags.constructor === Object) {
            response.data.perfil.tags = [];
          }
          if(Object.keys(response.data.perfil.redes).length === 0 && response.data.perfil.redes.constructor === Object) {
            response.data.perfil.redes = [];
          }
          if(Object.keys(response.data.perfil.idiomas).length === 0 && response.data.perfil.idiomas.constructor === Object) {
            response.data.perfil.idiomas = [];
          }
          this.userData = response.data.perfil;
        }
      }, error =>{
        console.log(error)
      }
    );
  }

}
