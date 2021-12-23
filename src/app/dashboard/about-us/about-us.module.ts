import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us.component";

const route: Routes = [
  {
    path:'',
    component: AboutUsComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class AboutUsModule { }
