import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { modalidades } from 'src/app/core/models/filters.model';
import { FiltersService } from 'src/app/core/services/filters.service';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.component.html',
  styleUrls: ['./step-five.component.css']
})
export class StepFiveComponent implements OnInit {
  modalidades: modalidades[];

  proyecto: any;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private filterService: FiltersService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.proyecto = this.formService.getformInformation().proyecto;

    if(this.proyecto.monedasId === '') {
      this.router.navigate(['/dashboard/form/one']);
    }

    this.getModalidades();
  }

  complete(): void {
    if (this.proyecto.modalidadesId) {
      console.log(this.proyecto);
      this.formService.formCollectorInformation.proyecto = this.proyecto;
      this.formService.complete();

      return;
    }

    this.submitted = true;
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/four']);
  }

  getModalidades(): void {
    this.filterService.modalidades().subscribe(
      response =>{
        this.modalidades = response.data.rows;
      }, error =>{
        console.log(error)
      }
    )
  }

}
