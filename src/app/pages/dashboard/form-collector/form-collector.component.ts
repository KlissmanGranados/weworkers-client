import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-form-collector',
  templateUrl: './form-collector.component.html',
  styleUrls: ['./form-collector.component.css']
})
export class FormCollectorComponent implements OnInit {
  items: MenuItem[];
  formCollector: FormGroup;

  constructor(private service: FormService, private formBuilder: FormBuilder){
    // this.formCollector = new FormGroup({
    //   OneDetails: new FormGroup({
    //     nombre: new FormControl('', Validators.required),
    //     descripcion: new FormControl('', Validators.required),
    //   }),
    //   TwoDetails: new FormGroup({
    //     fechaCrea: new FormControl('', Validators.required),
    //     fechaTermina: new FormControl('', Validators.required),
    //   }),
    //   ThreeDetails: new FormGroup({
    //     estado: new FormControl('', Validators.required),
    //     tags: new FormControl('', Validators.required),
    //   }),
    //   FourDetails: new FormGroup({
    //     monedasId: new FormControl('', Validators.required),
    //     tiposPagoId: new FormControl('', Validators.required)
    //   }),
    //   FiveDetails: new FormGroup({
    //     modalidadesId: new FormControl('', Validators.required)
    //   }),
    // })
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Paso 1',
        routerLink:'one'
      },
      {
        label: 'Paso 2',
        routerLink:'two'
      },
      {
        label: 'Paso 3',
        routerLink:'three'
      },
      {
        label: 'paso 4',
        routerLink:'four'
      },
      {
        label: 'paso 5',
        routerLink:'five'
      }
    ];
  }

}
