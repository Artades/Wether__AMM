import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherHttpService {
  constructor(private http:  HttpClient) { }

  public getData(city:any): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0dcafe22fe933fd290f3fa7837e18726`)
  }

}
