import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardsHttpService {

  public KEY: string = '0dcafe22fe933fd290f3fa7837e18726'
  constructor(private http: HttpClient) { }

  public getData(city:any): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.KEY}`)
  }

}
