import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {
  proyecto: any;
  tags: string[];

  submitted: boolean = false;

  constructor(
    private router: Router,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.proyecto = this.formService.getformInformation().proyecto;
    this.tags = this.formService.getformInformation().tags;

    if(this.proyecto.fechaCrea === '' && this.proyecto.fechaTermina === '') {
      this.router.navigate(['/dashboard/form/one']);
    }
  }

  navigateToNext(){
    if(this.proyecto.presupuesto && this.tags.length > 0) {
      this.formService.formCollectorInformation.proyecto = this.proyecto;
      this.formService.formCollectorInformation.tags = this.tags;
      this.router.navigate(['/dashboard/form/four']);

      return;
    }

    this.submitted = true;
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/two']);
  }

}
