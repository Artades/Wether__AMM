import { Injectable } from '@angular/core';
import {Observable, Observer} from "rxjs";
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {

  constructor(private http:  HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Almaty&appid=0dcafe22fe933fd290f3fa7837e18726')
  }

}
