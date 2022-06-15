import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectC } from '../object-c';

@Injectable({
  providedIn: 'root'
})
export class ObjectCService {
  //private baseURL:string='http://localhost:8080/api/objects';
  baseURLcustomer:string="http://localhost:8081/customers";

  private baseURL:string='https://base-microservice.herokuapp.com/api/objects';

  constructor(private http:HttpClient) { }

  getAllObjects():Observable<ObjectC[]>{
    return this.http.get<ObjectC[]>(this.baseURL);
  }
  createObjectCutomer(customer:ObjectC):Observable<Object>{
     return this.http.post(`${this.baseURLcustomer}/${customer.idOfType}/${customer.parent_id}`,customer);
  }
  getObject(id:number):Observable<ObjectC>{
    return this.http.get<ObjectC>(`${this.baseURLcustomer}/${id}`);
  }
  updateObjectCutomer(customer:ObjectC):Observable<Object>{
    return this.http.put(this.baseURLcustomer,customer);
 }
  deleteObjectById(id:number):Observable<Object>{
    return this.http.delete(`${this.baseURLcustomer}/${id}`);
  }
  searchCustomer(list:string[]):Observable<ObjectC>{
    return this.http.post<ObjectC>(`${this.baseURLcustomer}/search`,list);
  }
  getChildrenBillingAccount(id:number):Observable<ObjectC[]>{
    return this.http.get<ObjectC[]>(`${this.baseURLcustomer}/children/${id}/19`);
  }
}
