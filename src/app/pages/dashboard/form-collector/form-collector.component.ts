import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { FormService } from 'src/app/core/services/form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-collector',
  templateUrl: './form-collector.component.html',
  styleUrls: ['./form-collector.component.css']
})
export class FormCollectorComponent implements OnInit {
  items: MenuItem[];
  formCollector: FormGroup;
  activeIndex: number =1;

  subscription: Subscription;

  constructor(
    private formService: FormService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Paso 1',
        routerLink:'one',
        command:(event: any)=>{
          this.activeIndex =0;
        }
      },
      {
        label: 'Paso 2',
        routerLink:'two',
        command:(event: any)=>{
          this.activeIndex =1;
        }
      },
      {
        label: 'Paso 3',
        routerLink:'three',
        command:(event: any)=>{
          this.activeIndex =2;
        }
      },
      {
        label: 'paso 4',
        routerLink:'four',
        command:(event: any)=>{
          this.activeIndex =3;
        }
      },
      {
        label: 'paso 5',
        routerLink:'five',
        command:(event: any)=>{
          this.activeIndex =4;
        }
      }
    ];

    this.subscription = this.formService.formComplete$.subscribe((information) => {
      console.log('aqui se envia al back', information);
      this.formService.proyecto(information).subscribe(
        response =>{
          console.log('response', response);
          
          if (Number(response.data) !== NaN){
            Swal.fire({
              icon: 'success',
              title: `${response.message}`
            });
            this.router.navigate(['/dashboard/projects']);
          } else {
            Swal.fire({
              icon: 'warning',
              title: `${response.message}`,
              text: `${response.data.stringify()}`
            });
          }
        }, error =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error.message}`
          })
        }
      );
    });

  }

}
