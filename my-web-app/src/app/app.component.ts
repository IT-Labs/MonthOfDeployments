import { Component, OnInit } from '@angular/core';
import { ValuesServiceService } from './values/values-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-web-app';
  content = 'test test test';



  constructor(
    private valuesService: ValuesServiceService
  ) {

  }

  values: any;

  ngOnInit() {
    this.getAllValues()
  }

  getAllValues() {
    this.valuesService.getValues().subscribe(res => {
      this.values = res;
    })
  }

}