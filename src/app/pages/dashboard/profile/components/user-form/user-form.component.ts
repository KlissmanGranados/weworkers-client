import { Component, Input, OnChanges, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { idTipoIdentificacion } from 'src/app/core/models/auth.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { CompareValidator } from 'src/app/core/directives/compare-validator.directive';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges  {
  usuarioForm: FormGroup;
  personaForm: FormGroup;
  tipodeidentificacion: idTipoIdentificacion[];
  eye_claveVieja: Boolean = false;
  eye_claveNueva: Boolean = false;
  eye_confirmarClave: Boolean = false;

  @Input() data: any = null;
  @Output() saveChanges: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
    private authService: AuthService
  ) {
    this.usuarioForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      claveVieja: ['', Validators.required],
      claveNueva: ['', Validators.required],
      confirmarClave: ['', Validators.required, CompareValidator('claveNueva')],
    });

    this.personaForm = this.formBuilder.group({
      idTipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.typesOfIdentification().subscribe(
      response =>{
        this.tipodeidentificacion = response.data.rows;
      }, error =>{
        console.log('error', error)
      }
    );
  }

  ngOnChanges(): void {
    if(this.data !== null) {
      console.log('data',this.data);
      if(this.data.type === 'freelancer') {
        this.setterValuesinForm(this.data.perfil);
      } else if (this.data.type === 'collector') {
        this.setterValuesinForm(this.data.perfil);
        console.log('type', this.data.type);
      }
    }
  }

  public setterValuesinForm(data): void {
    const valuePersonaForm = {
      idTipoIdentificacion: data.idTipoIdentificacion,
      identificacion: data.identificacion,
      primerNombre: data.primerNombre,
      segundoNombre: data.segundoNombre,
      primerApellido: data.primerApellido,
      segundoApellido: data.segundoApellido,
    };
    this.personaForm.patchValue(valuePersonaForm);


    const valueUsuarioForm = {
      usuario: data.usuario,
      claveVieja: '',
      claveNueva: '',
      confirmarClave: '',
    };
    this.usuarioForm.patchValue(valueUsuarioForm);
  }

  public saveUsuario(value): void {
    let valueTemp = {
      usuario: value.usuario,
      claveVieja: value.claveVieja,
      claveNueva: value.claveNueva
    };
    console.log('saveusuario');
    this.profileService.updateUser(valueTemp).subscribe(
      response =>{
        if(response) {}
        this.saveChanges.emit(false);
        Swal.fire({
          icon: 'success',
          title: `${response.message}`
        })
        console.log(response)
      }, error =>{
        console.log(error)
      }
    )
  }

  public savePersona(value): void {
    console.log('saveusuario');
    this.profileService.updatePersona(value).subscribe(
      response =>{
        console.log(response)
        if(response) {
          this.saveChanges.emit(false);
          Swal.fire({
            icon: 'success',
            title: `${response.message}`
          })
        }
      }, error =>{
        console.log(error)
      }
    )
  }



  // showPassword(){
  //   this.show_button = !this.show_button;
  //   this.show_eye = !this.show_eye;
  // }

}

// descripcion: null
// direccion: "adriana.arguello2906@gmail.com"
// estado: true
// id: 35
// idTipoIdentificacion: 2
// identificacion: "29509496"
// idiomas: {}
// modalidad: null
// monedaNombreCorto: null
// monedaNombreLargo: null
// personaId: 44
// primerApellido: "arguello"
// primerNombre: "adriana"
// proyectos: {}
// redes: {}
// rolesId: 1
// segundoApellido: "galvez"
// segundoNombre: "carolina"
// sueldo: null
// tags: {}
// tipoDesarrollador: null
// tipoPago: null
// usuario: "adriarg
