import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Withdraw } from './components/withdrawform/withdraw';


@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

private baseURL = "http://localhost:8082/withdraw";

  constructor(private httpClient: HttpClient) { }

withdrawAmount(withdraw : Withdraw): Observable<Object>{
  
return this.httpClient.put(`${this.baseURL}/withdraw/${withdraw.accountId}?amount=`+withdraw.amount, {});


  
 
 

}

}