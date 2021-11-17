import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoliticasComponent } from './politicas/politicas.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from 'src/app/core/services/profile.service';
import { ProjectDataComponent } from './project-data/project-data.component';
import { UserFormComponent } from './profile/components/user-form/user-form.component';
import { ProfessionalFormComponent } from './profile/components/professional-form/professional-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { AuthService } from 'src/app/core/services/auth.service';
import { ModalComponent } from './profile/components/modal/modal.component';
import {DialogModule} from 'primeng/dialog';
import { AnswerQuestionnaireComponent } from './answer-questionnaire/answer-questionnaire.component';
import {CheckboxModule} from 'primeng/checkbox';
import { ChipsModule } from 'primeng/chips';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { ModalRedesComponent } from './profile/components/modal-redes/modal-redes.component';
import { ModalTagsComponent } from './profile/components/modal-tags/modal-tags.component';
import { QuizPresentationComponent } from './quiz-presentation/quiz-presentation.component';
import { ProjectListService } from 'src/app/core/services/project-list.service';
import { QuestionnaireService } from 'src/app/core/services/questionnaire.service';
import { PreviewProfileComponent } from './preview-profile/preview-profile.component';

@NgModule({
  declarations: [
    DashboardCollectorComponent,
    DashboardFreelancerComponent,
    DashboardComponent,
    PoliticasComponent,
    ChatComponent,
    ProfileComponent,
    ProjectDataComponent,
    UserFormComponent,
    ProfessionalFormComponent,
    ProjectsComponent,
    ModalComponent,
    AnswerQuestionnaireComponent,
    CreateQuestionnaireComponent,
    ModalRedesComponent,
    ModalTagsComponent,
    QuizPresentationComponent,
    PreviewProfileComponent
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
    ReactiveFormsModule,
    DialogModule,
    CheckboxModule,
    ChipsModule,
  ],
  exports: [
    DashboardCollectorComponent
  ],
  providers:[
    ProfileService,
    AuthService,
    ProjectListService,
    QuestionnaireService,
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
