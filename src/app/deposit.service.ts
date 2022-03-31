import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Deposit } from './components/depositform/deposit';


@Injectable({
  providedIn: 'root'
})
export class DepositService {

private baseURL = "http://localhost:8082/deposit";

  constructor(private httpClient: HttpClient) { }

depositAmount(deposit : Deposit): Observable<Object>{
  
return this.httpClient.put(`${this.baseURL}/deposit/${deposit.accountId}?amount=`+deposit.amount, {});


  
 
 

}

}