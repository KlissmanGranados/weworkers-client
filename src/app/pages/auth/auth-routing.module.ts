import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RecordTypeComponent } from './record-type/record-type.component';
import { RegisterCollectorComponent } from './register-collector/register-collector.component';
import { RegisterFreelancerComponent } from './register-freelancer/register-freelancer.component';
import { ValidateRegistrationComponent } from './validate-registration/validate-registration.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path: 'record-type', component:RecordTypeComponent},
  {path: 'register-collector', component:RegisterCollectorComponent},
  {path: 'register-freelancer', component:RegisterFreelancerComponent},
  {path: 'validate-registration', component:ValidateRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
