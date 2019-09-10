import { Component } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test docker app';
  urlInput = "";
  urlSuffix = "/api/values";
  response = "";

  constructor(private backendApiService: BackendApiService ){}

  onClickMe() {
    this.backendApiService.getApiValues(this.urlInput, this.urlSuffix).
      subscribe(rr => this.response = rr.text());
  }
}
