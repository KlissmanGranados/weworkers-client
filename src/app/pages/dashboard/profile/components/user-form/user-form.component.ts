import { Component, Input, OnChanges, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit, OnChanges  {
  usuarioForm: FormGroup;
  personaForm: FormGroup;

  @Input() data: any = null;
  @Output() saveChanges: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.usuarioForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      claveVieja: ['', Validators.required],
      claveNueva: ['', Validators.required],
      confirmarClave: ['', Validators.required],
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

  ngOnInit(): void {}

  ngOnChanges(): void {
    if(this.data !== null) {
      console.log('data',this.data);
      if(this.data.type === 'freelancer') {
        this.setterValuesinForm(this.data.perfil);
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
    console.log('saveusuario');
    this.saveChanges.emit(false);
  }

  public savePersona(value): void {
    console.log('saveusuario');
    this.saveChanges.emit(false);
  }



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
