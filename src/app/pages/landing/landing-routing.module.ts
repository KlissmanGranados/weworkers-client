import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelancersComponent } from './Components/freelancers/freelancers.component';
import { FuncionesComponent } from './Components/funciones/funciones.component';
import { TrabajaNosotrosComponent } from './Components/trabaja-nosotros/trabaja-nosotros.component';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'freelancers', component:FreelancersComponent},
  {path:'trabaja-con-nosotros', component:TrabajaNosotrosComponent},
  {path:'funciones', component:FuncionesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
