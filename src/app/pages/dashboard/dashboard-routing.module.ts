import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColleptorGuard } from 'src/app/core/guards/colleptor.guard';
import { FreelancerGuard } from 'src/app/core/guards/freelancer.guard';
import { AnswerQuestionnaireComponent } from './answer-questionnaire/answer-questionnaire.component';
import { ChatComponent } from './chat/chat.component';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { DashboardCollectorComponent } from './dashboard-collector/dashboard-collector.component';
import { DashboardFreelancerComponent } from './dashboard-freelancer/dashboard-freelancer.component';
import { DashboardComponent } from './dashboard.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { PreviewProfileComponent } from './preview-profile/preview-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectDataComponent } from './project-data/project-data.component';
import { ProjectsComponent } from './projects/projects.component';
import { QuizPresentationComponent } from './quiz-presentation/quiz-presentation.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path:'dashboard-collector', component: DashboardCollectorComponent, canActivate:[ColleptorGuard]},
    {path:'dashboard-freelancer', component: DashboardFreelancerComponent, canActivate:[FreelancerGuard]},
    {path:'politicas', component: PoliticasComponent},
    {path:'chat', component: ChatComponent},
    {path:'profile', component: ProfileComponent},
    {path:'project-data/:id', component: ProjectDataComponent},
    {path:'projects', component:ProjectsComponent},
    {path:'answer', component:AnswerQuestionnaireComponent, canActivate:[FreelancerGuard]},
    {path:'create-questionnaire/:id/:type', component:CreateQuestionnaireComponent, canActivate:[ColleptorGuard]},
    {path:'quiz-presentation', component: QuizPresentationComponent, canActivate:[FreelancerGuard]},
    {path:'preview-profile/:id', component: PreviewProfileComponent, canActivate:[ColleptorGuard]},
    {path:'form', loadChildren: () => import('./form-collector/form-collector.module').then(m => m.FormCollectorModule), canActivate:[ColleptorGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
