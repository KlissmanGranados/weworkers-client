import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RecordTypeComponent } from './record-type/record-type.component';
import { RegisterCollectorComponent } from './register-collector/register-collector.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { RouterModule } from '@angular/router';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecordTypeComponent,
    RegisterCollectorComponent,
    RegisterFreelancerComponent,
    ValidateRegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    RecordTypeComponent,
    LoginComponent,
    RegisterCollectorComponent,
    RegisterFreelancerComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
