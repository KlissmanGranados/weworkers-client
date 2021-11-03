import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCollectorComponent } from './form-collector.component';
import { StepFiveComponent } from './step-five/step-five.component';
import { StepFourComponent } from './step-four/step-four.component';
import { StepOneComponent } from './step-one/step-one.component';
import { StepThreeComponent } from './step-three/step-three.component';
import { StepTwoComponent } from './step-two/step-two.component';

const routes: Routes = [
  {path:'', component: FormCollectorComponent, children:[
    {
      path: '',
      redirectTo: 'one',
      pathMatch: 'full',
    },
    {path:'one', component:StepOneComponent},
    {path:'two', component:StepTwoComponent},
    {path:'three', component:StepThreeComponent},
    {path:'four', component:StepFourComponent},
    {path:'five', component:StepFiveComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCollectorRoutingModule { }
