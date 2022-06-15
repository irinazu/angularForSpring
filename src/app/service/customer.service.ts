import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';
import { ObjectC } from '../object-c';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  baseURL:string="http://localhost:8081/customers";

  createCustomer(customer:Customer):Observable<Object>{
    return this.http.post(this.baseURL,customer);
  }

  getCustomer(id:number):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseURL}/${id}`)
  }

}
