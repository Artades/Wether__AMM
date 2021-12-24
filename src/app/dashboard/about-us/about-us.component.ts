import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
 public person: any[] = [
   {
      name: 'Артемий Галай',
      imgLink: './assets/photo_2021-08-14_23-34-16.jpg',
      mediaLink: 'https://t.me/ive_got_a_migraine',
      imgMediaLink: './assets/telegram.png',
     position: 'Telegram'
   },
   {
     name: 'Малик Дуйсебаев',
     imgLink: './assets/photo_2020-11-04_21-23-50.jpg',
     mediaLink: 'https://t.me/malikduisebayev',
     imgMediaLink: './assets/telegram.png',
     position: 'Telegram'
   },
   {
     name: 'Меиржан Тлеубаев',
     imgLink: './assets/photo_2021-07-23_11-22-51.jpg',
     mediaLink: 'https://t.me/MeirzhanTleubaev',
     imgMediaLink: './assets/telegram.png',
     position: 'Telegram'
   }
 ]
  public arr: string[] = [
    "Новые спутниковые снимки каждые 2-4 дня",
    "Архив исторических спутниковых данных",
    "Индексы растительности NDVI / EVI и историческая диаграмма NDVI",
    "Текущие, прогнозные и исторические данные о погоде]"
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
