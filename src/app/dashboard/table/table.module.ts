import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTable, MatTableModule} from "@angular/material/table";
import {RouterModule, Routes} from "@angular/router";
import {TableComponent} from "./table.component";

const route: Routes = [
  {
    path:'',
    component: TableComponent
  }
]

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(route)
  ]

})
export class TableModule { }
