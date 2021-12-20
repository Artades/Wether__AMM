import { Component, OnInit } from '@angular/core';
import {CardsHttpService} from "./cards-http.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public dataArrWeather: any[] = []
  public dataCity: string = ''
  public search: string = ''

  constructor(private service: CardsHttpService) { }

  ngOnInit(): void {
    this.service.getData('Astana').subscribe( res =>{
      this.dataArrWeather.push(...res.list);
      this.dataCity = res.city.name
      // this.dataTemp = Math.round(res.list.main.temp - 273)
      console.log(this.dataCity);
      console.log(this.dataArrWeather);
      // console.log(this.dataTemp);

    })
  }

  public searchData(){
    this.service.getData(this.search).subscribe( res =>{
      this.dataArrWeather = []
      this.dataCity = ''
      this.dataCity = res.city.name
      this.dataArrWeather.push(...res.list);
      console.log(this.dataArrWeather);
    })
  }
}
