import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormService } from 'src/app/core/services/form.service';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {
  proyecto: any;

  submitted: boolean = false;

  constructor(
    private router: Router,
    private formService: FormService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.proyecto = this.formService.getformInformation().proyecto;
    if(this.proyecto.nombre === '' && this.proyecto.descripcion === '') {
      this.router.navigate(['/dashboard/form/one']);
    }
  }

  navigateToNext(){
    if (this.proyecto.fechaCrea && this.proyecto.fechaTermina) {
      // this.proyecto.fechaCrea = this.datePipe.transform(this.proyecto.fechaCrea, 'MM-dd-yyyy');
      // this.proyecto.fechaTermina = this.datePipe.transform(this.proyecto.fechaTermina, 'MM-dd-yyyy');
      this.proyecto.fechaCrea = this.datePipe.transform(this.proyecto.fechaCrea, 'MM-dd-yyyy');
      this.proyecto.fechaTermina = this.datePipe.transform(this.proyecto.fechaTermina, 'MM-dd-yyyy');
      this.formService.formCollectorInformation.proyecto = this.proyecto;
      this.router.navigate(['/dashboard/form/three']);
      return;
    }

    this.submitted = true;
  }

  navigateToPrevItem(){
    this.router.navigate(['/dashboard/form/one']);
  }

}
