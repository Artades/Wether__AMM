import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CardsComponent} from "./cards.component";

const route: Routes = [
  {
    path:'',
    component: CardsComponent
  }
]

@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    RouterModule.forChild(route),

  ]
})
export class CardsModule { }
