import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansComponent } from './plans.component';
import { PlansRoutingModule } from './plans-routing.module';
import { PlanCardComponent } from './plan-card/plan-card.component';



@NgModule({
  declarations: [
    PlansComponent,
    PlanCardComponent,
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
  ]
})
export class PlansModule { }
