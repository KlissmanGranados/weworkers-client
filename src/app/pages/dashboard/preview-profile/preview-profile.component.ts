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
          this.userData = response.data.perfil;
        }
      }, error =>{
        console.log(error)
      }
    );
  }

}
