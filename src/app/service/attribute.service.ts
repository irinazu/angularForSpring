import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attribute,TypeOfAttribute } from '../attribute';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  //private baseURL:string='http://localhost:8080/api/attributes';
  //private typeURL:string='http://localhost:8080/api/typeOfAttribute';

  private baseURL:string='https://base-microservice.herokuapp.com/api/attributes';
  private typeURL:string='https://base-microservice.herokuapp.com/api/typeOfAttribute';

  attributes:Attribute[]=[];

  constructor(private httpClient:HttpClient) {}

  createAttribute(atr:Attribute):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,atr);
  }
  getTypesAttribute():Observable<TypeOfAttribute[]>{
    return this.httpClient.get<TypeOfAttribute[]>(this.typeURL);
  }
  deleteAttribute(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getAllAttributes():Observable<Attribute[]>{
    return this.httpClient.get<Attribute[]>(`${this.baseURL}`);
  }
  getAttributeById(id:number):Observable<Attribute>{
    return this.httpClient.get<Attribute>(`${this.baseURL}/${id}`);
  }
  updateAttribute(id:number,attribute:Attribute):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,attribute);

  }
}
