import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { ObjectTypeServiceService } from '../service/object-type-service.service';

@Component({
  selector: 'app-attribute',
  templateUrl: './attributeO.component.html',
  styleUrls: ['./attributeO.component.css']
})
export class AttributeComponent implements OnInit {
  //private baseURL:string='http://localhost:8080/api/types';
  private baseURL:string='https://base-microservice.herokuapp.com/api/types'
  attributes:Attribute[]=[];

  constructor(private otss:ObjectTypeServiceService,private httpClient:HttpClient) {}

  ngOnInit(): void {
  }
  getObjectTypeAttributes(id:number){
    this.httpClient.get<Attribute[]>(`${this.baseURL}/attributes/${id}`).subscribe(res=>this.attributes=res);
  }

}
