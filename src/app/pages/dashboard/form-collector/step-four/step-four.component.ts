import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { moneda, tiposPago } from 'src/app/core/models/filters.model';
import { FiltersService } from 'src/app/core/services/filters.service';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.component.html',
  styleUrls: ['./step-four.component.css']
})
export class StepFourComponent implements OnInit {
  listaMoneda: moneda[];
  tiposPago: tiposPago[];

  proyecto: any;

  submitted: boolean = false;

  constructor(
    private router: Router,
    private filterService: FiltersService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.proyecto = this.formService.getformInformation().proyecto;

    if(this.proyecto.presupuesto === '') {
      this.router.navigate(['/dashboard/form/one']);
    }

    this.getMoneda();
    this.getTiposPago();
  }

  navigateToNext(){
    if (this.proyecto.monedasId && this.proyecto.tiposPagoId) {
      this.formService.formCollectorInformation.proyecto = this.proyecto;
      this.router.navigate(['/dashboard/form/five']);
      return;
    }

    this.submitted = true;
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/three']);
  }

  getMoneda(): void {
    this.filterService.moneda().subscribe(
      response =>{
        this.listaMoneda = response.data.rows;
      },error =>{
        console.log(error);
      }
    );
  }

  getTiposPago(): void {
    this.filterService.tiposPago().subscribe(
      response =>{
        this.tiposPago = response.data.rows;
      }, error =>{
        console.log(error)
      }
    );
  }

}
