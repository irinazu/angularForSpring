import { HttpClient} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Attribute } from '../attribute';
import { ObjectType } from '../object-type';
import { Observable } from 'rxjs';

interface EMPLOYEE {
  id:number;
  name: string;
  children?:EMPLOYEE[];
}

@Injectable({
  providedIn: 'root'
})
export class ObjectTypeServiceService{
  //private baseURL:string='http://localhost:8080/api/types';
  private baseURL:string='https://base-microservice.herokuapp.com/api/types';

  attributes:Attribute[]=[];

  constructor(private httpClient:HttpClient) {}

  getObjectType(){
    return this.httpClient.get<EMPLOYEE[]>(this.baseURL);
  }
  getObjectTypeAttributes(id:number):Observable<Attribute[]>{
    return this.httpClient.get<Attribute[]>(`${this.baseURL}/attributes/${id}`);
  }
  getCreateOT(ot:ObjectType):Observable<Object>{
    if(ot.parent_id==null) ot.parent_id=0;
    return this.httpClient.post(`${this.baseURL}/${ot.parent_id}`,ot);
  }
  deleteOT(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getObjectTypeById(id:number):Observable<ObjectType>{
    return this.httpClient.get<ObjectType>(`${this.baseURL}/${id}`);
  }
  ubdateObjectType(ot:ObjectType):Observable<Object>{
    if(ot.parent_id==null) ot.parent_id=0;
    return this.httpClient.put(`${this.baseURL}/${ot.id}/${ot.parent_id}`,ot);
  }
}
