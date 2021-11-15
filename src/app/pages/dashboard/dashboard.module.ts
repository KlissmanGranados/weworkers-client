import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardCollectorComponent } from './dashboard-collector/dashboard-collector.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardFreelancerComponent } from './dashboard-freelancer/dashboard-freelancer.component';

import {TableModule} from 'primeng/table';
import { BadgeModule } from "primeng/badge";
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';


import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import { PoliticasComponent } from './politicas/politicas.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProjectDataComponent } from './project-data/project-data.component';
import { UserFormComponent } from './profile/components/user-form/user-form.component';
import { ProfessionalFormComponent } from './profile/components/professional-form/professional-form.component';
import { ChatManagerService } from 'src/app/core/services/chat-manager.service';
import { AuthService } from 'src/app/core/services/auth.service';

@NgModule({
  declarations: [
    DashboardCollectorComponent,
    DashboardFreelancerComponent,
    DashboardComponent,
    PoliticasComponent,
    ChatComponent,
    ProfileComponent,
    ProyectsComponent,
    ProjectDataComponent,
    UserFormComponent,
    ProfessionalFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CardModule,
    DividerModule,
    ButtonModule,
    TableModule,
    TagModule,
    BadgeModule,
    PaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardCollectorComponent
  ],
  providers:[
    ProfileService,
    ChatManagerService,
    AuthService
  ]
})
export class DashboardModule { }
