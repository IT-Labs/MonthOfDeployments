import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class BackendApiService {

  constructor(private http: Http) { }

  getApiValues(urlInput, urlSuffix) {
    return this.http.get(urlInput + urlSuffix);
  }
}
