import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public routes = [
    {
      path: 'weather',
      viewValue: 'Weather',
    },
    {
      path: 'cards',
      viewValue: 'Cards',
    },
    {
      path: 'schedule',
      viewValue: 'Schedule',
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
