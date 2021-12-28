import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultiDropdown, moneda, tiposPago, modalidades, idiomas } from 'src/app/core/models/filters.model';
import { FiltersService } from 'src/app/core/services/filters.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpParams } from '@angular/common/http';
import { ProyectoBase } from 'src/app/core/models/proyect.model';
import { PaginationService } from 'src/app/core/services/pagination.service';
import Swal from 'sweetalert2';
import { CaptadosBase } from 'src/app/core/models/captados.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges, OnDestroy {
  formControlFilter: FormGroup;

  items: MultiDropdown[] = [];
  selectedCurrentMoneda: moneda[] = [];

  itemsTiposPago: MultiDropdown[] = [];
  selectedCurrentPago: tiposPago[] = [];

  itemsModalidades: modalidades[] = [];

  itemsIdiomas: MultiDropdown[] = [];
  selectedCurrentIdiomas: idiomas[] = [];

  // variables del sidebar
  display: boolean;

  // variables del dropdown
  showSearch = true;
  showError = false;
  showAll = true;
  showStatus = true;
  userRole: any;

  supscription: Subscription;
  supscriptionPagination: Subscription;

  constructor(
    private filtersServices: FiltersService,
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private paginationService: PaginationService
  ) {
    this.userRole = this.authService.getUserRole();
    if(this.userRole.rolesid === 1) {
      this.formControlFilter = this._formBuilder.group({
        moneda: [''],
        tipoPago: [''],
        etiqueta: [''],
        fechainicio: [''],
        fechafinal: [{value: '', disabled: true}],
        presupuesto: [''],
        presupuestoFinal: [{value: '', disabled: true}],
        modalidad: ['']
      });

    } else {
      this.formControlFilter = this._formBuilder.group({
        etiqueta: [''],
        idioma: ['']
      });
    }
    // console.log('userRole',this.userRole);

    this.supscriptionPagination = this.paginationService.onSelectedrefreshListado().subscribe(
      response => {
        if(response) {
    //       //descomentar no borrar posible solucion
          console.log('response',response);
          this.sendParams(this.paginationService.page, this.paginationService.perPage, this.formControlFilter.getRawValue());
        }
      }
    );


  }

  get checkeditemsMoneda(): MultiDropdown[] {
    return this.items.filter(i => i.checked);
  }

  ngOnInit(): void {
    this.getMoneda();
    this.gettiposPago();
    this.getidiomas();
    this.getModalidades();
  }

  ngOnChanges(): void {
    // if
  }


  sendParams(page: number, perPage:number, formValue?: any) {
    this.display = false;
    if(this.userRole.rolesid === 1) {
      // console.log('send params sidebar');
      let params = new HttpParams()
      .set('perPage', perPage.toString()) //esto es dinamico
      .set('page', page.toString()); //esto es dinamico
      // console.log('formValue',formValue);
      if(formValue) {
        if (formValue.modalidad) {
          formValue.modalidad = JSON.parse(formValue.modalidad);
          params = params.set('modalidad', formValue.modalidad.nombre);
        }

        if (formValue.fechainicio) { params = params.set('fecha', formValue.fechainicio); }
        if (formValue.fechafinal) { params = params.append('fecha', formValue.fechafinal); }

        // .set('usuario', formValue.usuario)

        if (formValue.presupuesto) { params = params.set('presupuesto', formValue.presupuesto); }

        if (formValue.presupuestoFinal) { params = params.append('presupuesto', formValue.presupuestoFinal); }

        if(this.selectedCurrentMoneda.length !== 0) {
          formValue.moneda.forEach((element, index) => {
            if(index === 0) {
              params = params.set('moneda',  element.nombreCorto);
            }else{
              params = params.append('moneda',  element.nombreCorto);
            }
          });
        }

        if(this.selectedCurrentPago.length !== 0) {
          formValue.tipoPago.forEach((element, index) => {
            if(index === 0) {
              params = params.set('tiposPago', element.nombre);
            } else {
              params = params.append('tiposPago', element.nombre);
            }
          });
        }

        if(formValue?.etiqueta.length !== 0) {
          formValue.etiqueta.forEach((element, index) => {
            if(index === 0) {
              params = params.set('etiqueta', element);
            } else {
              params = params.append('etiqueta', element);
            }
          });
        }
      }

      console.log('parametros del filtros', params.toString());

      this.filtersServices.getListadoProyectos(params.toString()).subscribe(
        (response: ProyectoBase) => {
          console.log(response);
          if (Object.keys(response.data.records).length === 0) {
            this.filtersServices.listadoProyecto = undefined;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `No existen propuestas con ese parametro de búsqueda`
            })
          } else {
            response.data.params = params.toString();
            this.filtersServices.listadoProyecto = response.data;
          }
        }, error => {
          console.log(error);
          // colocar el mensaje de error aqui
        }
      );

    }else if(this.userRole.rolesid === 2){
      let params = new HttpParams()
      .set('perPage', perPage.toString()) //esto es dinamico
      .set('page', page.toString()); //esto es dinamico
      if(formValue){
        if(formValue?.etiqueta.length !== 0) {
          formValue.etiqueta.forEach((element, index) => {
            if(index === 0) {
              params = params.set('etiqueta', element);
            } else {
              params = params.append('etiqueta', element);
            }
          });
        }
        if(this.selectedCurrentIdiomas.length !== 0) {
          formValue.idioma.forEach((element, index) => {
            if(index === 0) {
              // console.log(element.nombreLargo);
              params = params.set('idioma',  element.nombreCorto);
            }else{
              params = params.append('idioma',  element.nombreCorto);
            }
          });
        }

      }
      console.log('parametros del Captador', params.toString());

      this.filtersServices.getListadoFreelancer(params.toString()).subscribe(
        (response: CaptadosBase) => {
          if (Object.keys(response.data.records).length === 0) {
            this.filtersServices.listadoFreelancer = undefined;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `No existen propuestas con ese parametro de búsqueda`
            })
          } else {
            response.data.params = params.toString();
            this.filtersServices.listadoFreelancer = response.data;
          }
        }, error => {
          console.log(error);
        }
      );
    }
  }

  getMoneda(): void {
    this.filtersServices.moneda().subscribe(
    response =>{
      let itemTemp: MultiDropdown[] = [];
      for(let i of response.data.rows){
        let itemDropdown = {
          id: i.id,
          name: i.nombreLargo,
          extra: i.nombreCorto
        };
        itemTemp.push(itemDropdown);
      }
      this.items = itemTemp;
    }, error =>{
      console.error('error', error)
    });
  }

  gettiposPago(): void {
    this.filtersServices.tiposPago().subscribe(
      response =>{
        let itemTemp: MultiDropdown[] = [];
        for(let i of response.data.rows){
          let itemDropdown = {
            id: i.id,
            name: i.nombre
          };
          itemTemp.push(itemDropdown);}
      this.itemsTiposPago = itemTemp;
      }, error =>{
        console.log(error)
      });
  }

  getidiomas(){
    this.filtersServices.idiomas().subscribe(
      response =>{
        let itemTemp: MultiDropdown[] = [];
        for(let i of response.data.rows){
          let itemDropdown = {
            id: i.id,
            name: i.nombreLargo,
            extra: i.nombreCorto
          }
          itemTemp.push(itemDropdown);
        }
        this.itemsIdiomas = itemTemp;
      }, error =>{
        console.log(error)
      }
    )
  }

  getModalidades(): void {
    this.filtersServices.modalidades().subscribe(
      response =>{
        this.itemsModalidades = response.data.rows;
        // console.log('itemsModalidades', this.itemsModalidades);
      }, error =>{
        console.log(error)
      }
    )
  }

  //Metodo onchange
  onChangeMoneda(item: MultiDropdown): void {
    if(item.checked) {
      if(item.id !== null) {
        this.selectedCurrentMoneda.push({id: item.id, nombreLargo: item.name, nombreCorto: item.extra});
      } else {
        this.selectedCurrentMoneda = [];
        this.items.forEach(element => {
          this.selectedCurrentMoneda.push({id: element.id, nombreLargo: element.name, nombreCorto: element.extra})
        });
      }
    } else {
      if(item.id !== null) {
        this.selectedCurrentMoneda = this.selectedCurrentMoneda.filter(i => (i.id !== item.id));
      } else {
        this.selectedCurrentMoneda = [];
      }
    }
    // console.log('selectedCurrentMoneda',this.selectedCurrentMoneda);
    this.formControlFilter.get('moneda').setValue(this.selectedCurrentMoneda);
  }

  onChangeTipopago(item: MultiDropdown): void {
    if(item.checked) {
      if(item.id !== null) {
        this.selectedCurrentPago.push({id: item.id, nombre: item.name});
      } else {
      // console.log('itemsTiposPago',this.itemsTiposPago);
        this.selectedCurrentPago = [];
        this.itemsTiposPago.forEach(element => {
          this.selectedCurrentPago.push({id: element.id, nombre: element.name})
        });
      }
    } else {
      if(item.id !== null) {
        this.selectedCurrentPago = this.selectedCurrentPago.filter(i => (i.id !== item.id));
      } else {
        this.selectedCurrentPago = [];
      }
    }
    // console.log('selectedCurrentPago',this.selectedCurrentPago);
    this.formControlFilter.get('tipoPago').setValue(this.selectedCurrentPago);
  }

  onChangeModalidades(modalidad: any): void{
    // console.log('modalidad', modalidad);
  }

  onChangeIdiomas(item: MultiDropdown): void{
    if(item.checked){
      if(item.id !== null) {
        this.selectedCurrentIdiomas.push({id: item.id, nombreLargo: item.name, nombreCorto: item.extra});
      } else {
        this.selectedCurrentIdiomas = [];
        this.itemsIdiomas.forEach(element => {
          this.selectedCurrentIdiomas.push({id: element.id, nombreLargo: element.name, nombreCorto: element.extra});
        });
      }
    }else{
      if(item.id !== null){
        this.selectedCurrentIdiomas = this.selectedCurrentIdiomas.filter(i => (i.id  !== item.id));
      } else {
        this.selectedCurrentIdiomas = [];
      }
    }
    this.formControlFilter.get('idioma').setValue(this.selectedCurrentIdiomas);
  }

  // Revisar
  onChangeEtiquetas(tag): void {
    // console.log('etiquetas $event', tag);
    // console.log('etiquetas form', this.formControlFilter.get('etiqueta').value);
  }

  onChangeDate(date: string, type: string): void {
    // console.log(type, date);
    if(type === 'start') {
      this.formControlFilter.get('fechafinal').enable();
    }
  }

  onChangePresupuesto(presupuesto: string, type: string): void{
    if(type === 'presupuesto') {
      this.formControlFilter.get('presupuestoFinal').enable();
    }
  }

  ngOnDestroy() {
    this.supscriptionPagination.unsubscribe();
    this.formControlFilter.reset();
  }
}

// {
//   params:
//     params instanceof HttpParams ? params : this._toStringParams(params),
