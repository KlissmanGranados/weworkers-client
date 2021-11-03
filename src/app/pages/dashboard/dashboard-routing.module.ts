import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DashboardCollectorComponent } from './dashboard-collector/dashboard-collector.component';
import { DashboardFreelancerComponent } from './dashboard-freelancer/dashboard-freelancer.component';
import { DashboardComponent } from './dashboard.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/proyects.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'dashboard-collector', component: DashboardCollectorComponent},
    {path:'dashboard-freelancer', component: DashboardFreelancerComponent},
    {path:'politicas', component: PoliticasComponent},
    {path:'chat', component: ChatComponent},
    {path:'profile', component: ProfileComponent},
    {path:'proyects', component: ProyectsComponent},
    {path:'form', loadChildren: () => import('./form-collector/form-collector.module').then(m => m.FormCollectorModule)}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
