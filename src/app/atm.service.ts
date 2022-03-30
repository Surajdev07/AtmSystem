import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  private baseUrl: string = "http://localhost:8082"

  constructor(private http: HttpClient) { }

  depositAmount(data: any) {
    return this.http.put(`${this.baseUrl}/deposit/{accountId}`, data)
  }

  customerDetail(data: any) {
    return this.http.post(`${this.baseUrl}/addCustomer`, data)
  }

}
