import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ScheduleComponent} from "./schedule.component";
import {NgxChartsModule} from "@swimlane/ngx-charts";




const route: Routes = [
  {
    path:'',
    component: ScheduleComponent
  }
]

@NgModule({
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    NgxChartsModule,
  ]
})
export class ScheduleModule { }
