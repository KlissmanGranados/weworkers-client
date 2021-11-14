import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { FormCollectorRoutingModule } from './form-collector-routing.module';
import { FormCollectorComponent } from './form-collector.component';
import { CardModule } from 'primeng/card';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/core/services/form.service';
import { StepOneComponent } from './step-one/step-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepTwoComponent } from './step-two/step-two.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepFourComponent } from './step-four/step-four.component';
import { StepFiveComponent } from './step-five/step-five.component';
import { RouterModule } from '@angular/router';
import {ChipsModule} from 'primeng/chips';


@NgModule({
  declarations: [
    FormCollectorComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent
  ],
  imports: [
    CommonModule,
    FormCollectorRoutingModule,
    StepsModule,
    ToastModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    ChipsModule
  ],
  providers: [
    MessageService,
    FormService,
    DatePipe
  ]
})
export class FormCollectorModule { }
