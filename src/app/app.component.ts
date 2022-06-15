import { Component, OnInit } from '@angular/core';
import { ObjectTypeServiceService } from './service/object-type-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'microservice_frontend';
  constructor() {}

  ngOnInit(): void {}
}
