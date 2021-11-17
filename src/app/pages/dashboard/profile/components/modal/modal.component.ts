import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { idiomas, listarRedes } from 'src/app/core/models/filters.model';
import { redes } from 'src/app/core/models/profile.model';
import { FiltersService } from 'src/app/core/services/filters.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  itemsRedes: listarRedes[] = [];
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter<any>();

  idiomasArray: idiomas[] = [];

  idiomaForm: FormGroup;

  constructor(
    private filterService: FiltersService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
  ) {
    this.idiomaForm = this.formBuilder.group({
      idioma: ['']
    });
  }

  ngOnInit(): void {
    this.getIdiomas();
  }

  onSubmitIdioma(formValue): void {
    this.profileService.UpdateUserLanguage(formValue).subscribe(
      response => {
        if(response.data === null) {
          Swal.fire({
            icon: 'warning',
            title: `${response.message}`
          });
        } else if(response.data[0] === 'idioma') {
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

  }

  onClose(){
    this.displayChange.emit({bool: false, refresh: false});
  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }

  getIdiomas(): void{
    this.filterService.idiomas().subscribe(
      response =>{
        this.idiomasArray = response.data.rows;
      }, error =>{
        console.log(error)
      }
    );
  }

}
