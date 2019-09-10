import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ValuesServiceService {

  constructor(
    private http: HttpClient
  ) { }

  url = environment.url;

    getValues(){
      return this.http.get(`${this.url}/values`)
    }
}