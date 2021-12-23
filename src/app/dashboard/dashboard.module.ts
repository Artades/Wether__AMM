import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path:'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
      },
      {
        path: 'schedule',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
      },
      {
        path:'weather',
        loadChildren: () => import('./weather/weather.module').then(m => m.WeatherModule)
      },
      {
        path:'about_us',
        loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
      }

    ]
  }
]

@NgModule({
  declarations: [DashboardComponent, AboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {

}

