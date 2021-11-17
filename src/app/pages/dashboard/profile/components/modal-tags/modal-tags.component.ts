import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/core/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'modal-tags',
  templateUrl: './modal-tags.component.html',
  styleUrls: ['./modal-tags.component.css']
})
export class ModalTagsComponent implements OnInit {
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter<any>();

  // @Input() TagsPreloaded: any;
  tagsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.tagsForm = this.formBuilder.group({
      tags: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmitTags(value): void {
    console.log('tags',value)
    this.profileService.postTags(value).subscribe(
      response => {
        console.log('response',response)
        if(response.data === null) {
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

}
