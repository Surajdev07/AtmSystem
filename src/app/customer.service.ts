import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { CustomerComponent } from './components/customer/customer.component';
import { Customer } from './components/customer/customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseURL = "http://localhost:8082/customer";

  constructor(private httpClient: HttpClient) { }

createCustomer(customer : Customer): Observable<Object>{
  
  return this.httpClient.post(`${this.baseURL}/addCustomer`, customer);

 // let id=23;
 // let amount=1000;
 // this.httpClient.put(`${this.baseURL}/addCustomer/${id}?amount=`+amount, {});
 

}

}