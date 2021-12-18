import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import { WeatherComponent } from './weather/weather.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
      },
      {
        path: 'table',
        loadChildren: () => import('./table/table.module').then(m => m.TableModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
      },
      {
        path:'weather',
        loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
      }
    ]
  }
]

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {

}

