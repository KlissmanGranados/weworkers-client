import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { redes } from 'src/app/core/models/profile.model';
import { FiltersService } from 'src/app/core/services/filters.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'modal-redes',
  templateUrl: './modal-redes.component.html',
  styleUrls: ['./modal-redes.component.css']
})
export class ModalRedesComponent implements OnInit, OnChanges {
  @Input() display: boolean;
  @Input() type: string;
  @Input() redPreloaded: any = null;
  @Output() displayChange = new EventEmitter<any>();

  redesArray: redes[] = [];

  redesForm: FormGroup;

//   '{
//     "redId":"{{redId}}",
//     "direccion":"{{direccion}}"
// }'

  constructor(
    private filterService: FiltersService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
  ) {
    this.redesForm = this.formBuilder.group({
      redId: [''],
      direccion: ['']
    });
  }

  ngOnInit(): void {
    this.getitemsRedes();
  }

  ngOnChanges(): void {
    if(this.type === 'post') {
      this.redPreloaded  = null;
      this.redesForm.get('direccion').setValue('');
        this.redesForm.get('redId').setValue(0);

    } else if(this.type === 'put') {
      if(this.redPreloaded !== null || this.redPreloaded !== undefined) {
        this.redesForm.get('direccion').setValue(this.redPreloaded.direccion);
        this.redesForm.get('redId').setValue(this.redPreloaded.id);
      }

    }

  }

  onSubmitRed(formValue): void {
    console.log(formValue)
    if(this.type === 'post') {
      this.profileService.postRedes(formValue).subscribe(
        response => {
          console.log('response',response)

          if(response.data === null) {
            Swal.fire({
              icon: 'warning',
              title: `${response.message}`
            });
          } else if(response.data.redId === '') {
            Swal.fire({
              icon: 'warning',
              title: `${response.message}`
            });
          } else {
            this.displayChange.emit({bool: false, refresh: true});
            Swal.fire({
              icon: 'success',
              title: `${response.message}`
            });
          }
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error.message}`
          });
        }
      );
    } else if(this.type === 'put') {
      if(formValue.redId !== '') {
        formValue.redId = formValue.redId.toString();
        console.log(this.redPreloaded)
        console.log(typeof formValue.redId)
        this.profileService.UpdateRedes(this.redPreloaded.redUsuario, formValue).subscribe(
          response => {
            console.log('response',response)
            if(response.data === null) {
              Swal.fire({
                icon: 'warning',
                title: `${response.message}`
              });
            } else if(response.data.redId === '') {
              Swal.fire({
                icon: 'warning',
                title: `${response.message}`
              });
            } else {
              this.displayChange.emit({bool: false, refresh: true});
              Swal.fire({
                icon: 'success',
                title: `${response.message}`
              });
            }
          }, error => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.error.message}`
            });
          }
        );
      } else {
        Swal.fire({
          icon: 'warning',
          title: `Seleccione una red social`
        });
      }
    }
  }


  onClose(){
    this.displayChange.emit({bool: false, refresh: false});
  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

  getitemsRedes(): void{
    this.filterService.listarRedes().subscribe(
      response =>{
        this.redesArray = response.data.rows;
        // if(this.redPreloaded !== null) {
        //   this.redesForm.get('redId').setValue(this.redPreloaded.id);
        // }
      }, error =>{
        console.log(error)
      }
    );
  }

}
