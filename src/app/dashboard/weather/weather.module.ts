import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {RouterModule, Routes} from "@angular/router";
import {WeatherComponent} from "./weather.component";

const route: Routes = [
  {
    path:'',
    component: WeatherComponent
  }
]

@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(route)
  ]

})
export class WeatherModule { }
