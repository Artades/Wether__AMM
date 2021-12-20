import { Component, OnInit } from '@angular/core';
import {WeatherHttpService} from "./weather-http.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public search:string = ''

  public dataWeather!:any[];
  public temp: number = 0;
  constructor(private service: WeatherHttpService) { }
  ngOnInit(): void {
    this.service.getData('Astana').subscribe( res =>{
     this.dataWeather = []
      this.dataWeather.push(res);
      this.temp = Math.round(res.main.temp - 273)
      console.log(this.dataWeather);
    })
  }
  public searchData(){
    this.service.getData(this.search).subscribe( res =>{
      this.dataWeather = []
      this.temp = 0
      this.dataWeather.push(res);
      this.temp = Math.round(res.main.temp - 273)
      console.log(this.dataWeather);
    })
  }

}
