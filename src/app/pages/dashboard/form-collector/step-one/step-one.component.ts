import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {
  proyecto: any;

  submitted: boolean = false;

  constructor(
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.proyecto = this.formService.getformInformation().proyecto;
  }

  navigateToNext(): void {
    if (this.proyecto.nombre && this.proyecto.descripcion) {
      console.log(this.proyecto);
      this.formService.formCollectorInformation.proyecto = this.proyecto;
      this.router.navigate(['/dashboard/form/two']);
      return;
    }

    this.submitted = true;
  }

}
