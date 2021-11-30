import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';
import { ColleptorGuard } from './core/guards/colleptor.guard';
import { FreelancerGuard } from './core/guards/freelancer.guard';

const routes: Routes = [
  {path:"", redirectTo:'landing', pathMatch:'full'},
  {path:"landing", loadChildren: () => import("./pages/landing/landing.module").then(m => m.LandingModule), canActivate: [AuthenticationGuard]},
  {path:"auth", loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule), canActivate: [AuthenticationGuard]},
  {path:"dashboard", loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
