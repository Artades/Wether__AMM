import { Injectable } from '@angular/core';
import {Observable, Observer} from "rxjs";
import{HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TableHttpService {

  constructor(private http:  HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  }

}
