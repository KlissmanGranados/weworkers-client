import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FreelancersComponent } from './Components/freelancers/freelancers.component';
import { TrabajaNosotrosComponent } from './Components/trabaja-nosotros/trabaja-nosotros.component';
import { FuncionesComponent } from './Components/funciones/funciones.component';




@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    FreelancersComponent,
    TrabajaNosotrosComponent,
    FuncionesComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule
  ]
})
export class LandingModule { }
