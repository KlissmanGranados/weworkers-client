import { Component, OnInit } from '@angular/core';
import { listarRedes, idiomas, tipodeDesarrollador, MultiDropdown } from 'src/app/core/models/filters.model';
import { DataBaseCaptados, dataCaptados, dataCollector, ProfileBase } from 'src/app/core/models/profile.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { FiltersService } from 'src/app/core/services/filters.service';
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
  display: boolean = false;
  displayModalRedes: boolean = false;
  displayModalTags: boolean = false;
  typeModalRedes: string = '';
  profileProfessional: any;
  preloadRed: any;
  editTags: boolean = false;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService)
    {
    this.userRole = this.authService.getUserRole().value;
    }

  ngOnInit(): void {
    // console.log('id',this.authService.profile().idusuario);
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.profile(this.authService.profile().idusuario).subscribe(
      response =>{
        // console.log('response',response);
        if (!this.userRole) {
          let dataResponse: dataCollector = response;
          // console.log('collector data',dataResponse.data);
          this.collectorData = dataResponse.data;
        } else{
          let data: dataCaptados = response;
          console.log('freelancer data', data.data);
          this.freelancerData = data.data;
          if(this.freelancerData.perfil.tipoDesarrollador === null) {
            this.editFormProfessional = true;
          }
        }
        // console.log('perfil', response)
      }, error =>{
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.error.message}`
        });
      }
    );
  }

  updateMode(evt): void {
    // console.log(evt)
    this.editFormMode = evt;
    // console.log(evt)
    if(!evt) {
      this.getProfile();
    }
  }

  /* inicio Modal idiomas */
  showDialog() {
    console.log('display',this.display);
    this.display = true;
  }

  onDialogClose(event): void {
    console.log('event',event);
    this.display = event.bool;
    console.log('display',this.display);
    if(event.refresh) {
      this.getProfile();
    }
  }
  /* fin Modal idiomas */

  /* inicio Modal redes */
  showDialogRedes(){
    console.log('displayModalRedes',this.displayModalRedes);
    this.displayModalRedes = true;
  }

  onDialogCloseModalRedes(event): void {
    console.log('event',event);
    this.displayModalRedes = event.bool;
    console.log('displayModalRedes',this.displayModalRedes);
    if(event.refresh) {
      this.getProfile();
    }
  }

  /* fin Modal redes */

  /* inicio Modal tags */
  showDialogTags(): void {
    console.log('displayModalTags',this.displayModalTags);
    this.displayModalTags = true;
  }

  onDialogCloseModalTags(event): void {
    console.log('event',event);
    this.displayModalTags = event.bool;
    console.log('displayModalTags',this.displayModalTags);
    if(event.refresh) {
      this.getProfile();
    }
  }
  /* fin Modal tags */

  updateProfesionMode(evt): void {
    this.editFormProfessional = evt;
    // console.log(evt)
    if(!evt) {
      this.getProfile();
    }
  }

  deleteLanguage(idiomaNombreCorto: string): void {
    console.log(idiomaNombreCorto);
    
    Swal.fire({
      title: 'Quiere guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.profileService.deleteUserLanguage({idioma: idiomaNombreCorto}).subscribe(
          response =>{
            console.log('delete', response)
            Swal.fire({
              icon: 'success',
              title: `${response.message}`
            })
            this.freelancerData.perfil.idiomas = this.freelancerData.perfil.idiomas.filter(items => items.nombreCorto !== idiomaNombreCorto);
            console.log(this.freelancerData.perfil.idiomas);
    
          }, error =>{
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.message}`
            });
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron', '', 'info');
        this.arrayTagsSelected = [];
      }
    });
  }

  deleteRedes(red): void {
    Swal.fire({
      title: 'Quiere guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.profileService.deleteRedes(red.redUsuario).subscribe(
          response =>{
            console.log('delete', response)
            Swal.fire({
              icon: 'success',
              title: `${response.message}`
            })
            this.freelancerData.perfil.redes = this.freelancerData.perfil.redes.filter(items => items.redUsuario !== red.redUsuario);
            console.log(this.freelancerData.perfil.redes);
    
          }, error =>{
            console.log(error)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.message}`
            });
          }
        );
      } else if (result.isDenied) {
        Swal.fire('Los cambios no se guardaron', '', 'info');
        this.arrayTagsSelected = [];
      }
    });
    
  }

  deleteTags(): void {
    if(this.arrayTagsSelected.length !== 0) {
      Swal.fire({
        title: 'Quiere guardar los cambios?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        denyButtonText: `No guardar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          // Swal.fire('Saved!', '', 'success').
          this.profileService.deleteTags({tags: this.arrayTagsSelected}).subscribe(
            response =>{
              Swal.fire({
                icon: 'success',
                title: `${response.message}`
              });
              for(let i of this.arrayTagsSelected) {
                this.freelancerData.perfil.tags = this.freelancerData.perfil.tags.filter(item => item.nombre !== i)
              }
              this.arrayTagsSelected = [];
            }, error =>{
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.error.message}`
              });
            }
          );
        } else if (result.isDenied) {
          Swal.fire('Los cambios no se guardaron', '', 'info');
          this.arrayTagsSelected = [];
        }
      });
    }
  }

  editionTags() {
    this.editTags = !this.editTags;

  }

  arrayTagsSelected: Array<string> = [];
  onCheckboxChange(evt, tag){
    if (evt.target.checked) {
      this.arrayTagsSelected.push(evt.target.value);
    } else {
      this.arrayTagsSelected = this.arrayTagsSelected.filter(item => item !== evt.target.value);
    }
  }

}
