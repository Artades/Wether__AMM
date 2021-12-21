import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  single: any[] =[
    {
      "name": "Индия",
      "value": 11871
    },
    {
      "name": "Колумбия",
      "value": 11770
    },
    {
      "name": "Новая Зеландия",
      "value": 11516
    },
    {
      "name": "Экв.Гвинея",
      "value": 10299
    },
    {
      "name": "Камерун",
      "value": 10272
    },
    {
      "name": "Гавайи",
      "value": 9763
    },
    {
      "name": "Китай",
      "value": 8169
    },

  ];
//___________________________________
  // options

  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  single2:any[] =[
    {
      "name": "Антарктида",
      "value": -89.2
    },
    {
      "name": "Россия",
      "value":   -77.8
    },
    {
      "name": "Гренландия",
      "value": -66.1
    },
    {
      "name": "Канада",
      "value": -63
    },
    {
      "name": "Казахстан",
      "value": -52
    },
  ]
  single3: any[] = [
    {
      "name": "Ливия",
      "value": 58.2
    },
    {
      "name": "США",
      "value": 56.7
    },
    {
      "name": "Тунис",
      "value":  55
    },

    {
      "name": "Израиль",
      "value": 53.8
    },
    {
      "name": "Судан",
      "value": 52.8
    },
  ]
  //////////////
  single4: any[] = [
    {
      "name": "Арктический",
      "value": 10
    },
    {
      "name": "Умеренный",
      "value": 35
    },
    {
      "name": "Тропический",
      "value":  40
    },

    {
      "name": "Экваториальный",
      "value": 15
    },

  ]


  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'right';
  constructor() { }

  ngOnInit(): void {
  }

}
