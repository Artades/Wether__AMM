import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public imageLogo: string = 'https://upload.wikimedia.org/wikipedia/commons/f/f6/OpenWeather-Logo.jpg'
  public routes = [
    {
      path: 'home',
      viewValue: 'Главная',
    },
    {
      path: 'weather',
      viewValue: 'Погода',
    },
    {
      path: 'cards',
      viewValue: 'Подробнее',
    },
    {
      path: 'schedule',
      viewValue: 'Интересные факты',
    },
    {
      path: 'table',
      viewValue: 'Table',
    },

  ]
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public navigateTo(path: string): void {
    this.router.navigate(['dashboard', path]);
  }
}
