import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FiltersService } from 'src/app/core/services/filters.service';
import { moneda, tiposPago, modalidades, tipodeDesarrollador } from 'src/app/core/models/filters.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.css']
})
export class ProfessionalFormComponent implements OnInit {
  @Input() data: any = null;
  @Output() saveChanges: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  ProfessionalForm: FormGroup;
  itemsModalidades: modalidades[] = [];

  itemsTiposPago: tiposPago[] = [];

  items: moneda[] = [];

  tipoDesarrollador: tipodeDesarrollador[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private filtersServices: FiltersService,
    private profileService: ProfileService
  ) {
    this.ProfessionalForm = this.formBuilder.group({
      tipoDesarrolladorId: ['', Validators.required],
      modalidadId: ['', Validators.required],
      tipoPagoId: ['', Validators.required],
      monedaId: ['', Validators.required],
      sueldo: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getModalidades();
    this.gettiposPago();
    this.getMoneda();
    this.getTipoDesarrollador();
  }

  ngOnChanges(): void {
    console.log('ngOnChanges',this.data)
    if(this.data !== null) {
      console.log('data',this.data);
      if(this.data.type === 'freelancer') {
        this.setterValuesinForm(this.data.perfil);
      }
    }
  }

  public setterValuesinForm(data): void {
    if(data.sueldo !== null) {
      this.ProfessionalForm.get('sueldo').setValue(data.sueldo);
    }
    if(data.descripcion !== null) {
      this.ProfessionalForm.get('descripcion').setValue(data.descripcion);
    }
  }

  sendDetailProfile(formValue): void {
    console.log('formValue',formValue);
    this.profileService.profileDetails(formValue).subscribe(
      response => {
        console.log(response);
        this.saveChanges.emit(false);
        Swal.fire({
          icon: 'success',
          title: `${response.message}`
        })
      }, error => {
        console.log(error);
        // Colocal notificacion de error
      }
    );
  }

  getModalidades(): void {
    this.filtersServices.modalidades().subscribe(
      response =>{
        this.itemsModalidades = response.data.rows;
        if(this.data.perfil.modalidad !== null) {
          let modalidad = this.itemsModalidades.filter(item => item.nombre === this.data.perfil.modalidad)[0];
          this.ProfessionalForm.get('modalidadId').setValue(modalidad?.id);
        }
      }, error =>{
        console.log(error)
      }
    )
  }

  getMoneda(): void {
    this.filtersServices.moneda().subscribe(
    response => {
      this.items = response.data.rows;
      if(this.data.perfil.monedaNombreCorto !== null){
        let monedaId = this.items.filter(items => items.nombreCorto === this.data.perfil.monedaNombreCorto)[0];
        this.ProfessionalForm.get('monedaId').setValue(monedaId?.id);
      }
      // console.log('items',this.items);
    }, error =>{
      console.error('error', error)
    });
  }

  gettiposPago(): void {
    this.filtersServices.tiposPago().subscribe(
      response => {
        this.itemsTiposPago = response.data.rows;
        if(this.data.perfil.tipoPago !== null) {
          let tipoPago = this.itemsTiposPago.filter(item => item.nombre === this.data.perfil.tipoPago)[0];
          this.ProfessionalForm.get('tipoPagoId').setValue(tipoPago?.id);
        }
      }, error =>{
        console.log(error)
    });
  }

  getTipoDesarrollador(): void {
    this.filtersServices.tipodeDesarrollador().subscribe(
      response =>{
        this.tipoDesarrollador = response.data;
        if(this.data.perfil.tipoDesarrollador !== null) {
          let tipoDesarrollo = this.tipoDesarrollador.filter(item => item.nombre === this.data.perfil.tipoDesarrollador)[0];
          this.ProfessionalForm.get('tipoDesarrolladorId').setValue(tipoDesarrollo?.id);
        }
      }, error =>{
        console.log(error)
      }
    )
  }

}
