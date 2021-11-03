import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hide = true;
  show_button: Boolean = false;
  show_eye: Boolean = false;

  constructor(private service: AuthService, private formbuilder: FormBuilder, private router : Router) {
    this.loginForm = this.formbuilder.group({
      usuario: ['', Validators.required],
      clave: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    const role = this.service.profile();
    if(role !== undefined){
      switch (this.service.getUserRole().rolesid) {
        case 1:
          this.router.navigate(['/dashboard/dashboard-freelancer']);
          break;
        case 2:
          this.router.navigate(['/dashboard/dashboard-collector']);
          break;
      }
    }
  }

  onSubmit(form) {
    // console.log(form)
    this.service.login(form).subscribe(
    response => {
      this.service.saveToken(response.data);
      // console.log(this.service.getUserRole())
      switch (this.service.getUserRole().rolesid) {
        case 1:
          this.router.navigate(['/dashboard/dashboard-freelancer']);
          break;
        case 2:
          this.router.navigate(['/dashboard/dashboard-collector']);
          break;
      }
      // console.log('response', response)
      Swal.fire({
        icon: 'success',
        title: `${response.message}`
      })
    }, error =>{
      // console.log('error', error)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.error.message}`
      })
    });
  }

  showPassword(){
    this.show_button = !this.show_button;
    this.show_eye = !this.show_eye;
  }

}
