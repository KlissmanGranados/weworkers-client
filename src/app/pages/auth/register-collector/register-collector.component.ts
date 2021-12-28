import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CompareValidator } from 'src/app/core/directives/compare-validator.directive';
import { idTipoIdentificacion } from 'src/app/core/models/auth.model';
import Swal from 'sweetalert2';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register-collector',
  templateUrl: './register-collector.component.html',
  styleUrls: ['./register-collector.component.css']
})
export class RegisterCollectorComponent implements OnInit {
  registerCollectorForm: FormGroup;
  signin: boolean;
  show_button: Boolean = false;
  show_eye: Boolean = false;
  show_button_confirm: Boolean = false;
  show_eye_confirm: Boolean = false;
  tipodeidentificacion: idTipoIdentificacion[];

  constructor(private service: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.registerCollectorForm = this.formBuilder.group({
      idTipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      direccion: ['', Validators.required],
      usuario: ['', Validators.required],
      clave: ['', Validators.required],
      confirmarClave: ['',  [Validators.required, CompareValidator('clave')]],
      razonSocial: ['', Validators.required],
      rif: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.signin = false;

    this.service.typesOfIdentification().subscribe(
      response =>{
        this.tipodeidentificacion = response.data.rows;
      }, error =>{
        console.log('error', error)
      }
    )
  }

  showPassword(){
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

  showConfirmPassword(){
    this.show_button_confirm = !this.show_button_confirm;
    this.show_eye_confirm = !this.show_eye_confirm;
  }

  postData(form){
    let data={
        'persona': {
          'idTipoIdentificacion': form.idTipoIdentificacion,
          'identificacion': form.identificacion,
          'primerNombre': form.primerNombre,
          'segundoNombre': form.segundoNombre,
          'primerApellido': form.primerApellido,
          'segundoApellido': form.segundoApellido
        },
        'usuario': {
          'usuario': form.usuario,
          'clave': form.clave,
          'rolesId': "2"
        },
        "correo": {
          'direccion': form.direccion
        },
          'empresa': {
          'rif': form.rif,
          'razonSocial': form.razonSocial
        }
    };
    this.service.register(data).subscribe(
      response =>{
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Tu registro ha sido guardado',
          text: `${response.message}`
        })
        if(response){
          this.router.navigate(['/auth/login']);
        }
      },error =>{
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`
        })
      }
    );
  }

  onlyLetters(e) {
    const tecla = ( document.all ) ? e.keyCode : e.which; // 2
    if ( tecla === 8 ) { return true; }
    const patron = /[A-ZÑa-zñ\s]/;
    const te = String.fromCharCode(tecla);
    return patron.test(te);
  }

}
