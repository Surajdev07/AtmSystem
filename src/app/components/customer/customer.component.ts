import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';


import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customer : Customer = {};

  constructor(private customerservice : CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
   }
   saveCustomer(){
     this.customerservice.createCustomer(this.customer).subscribe(data => {
      console.log(data);
     },
     error => console.log(error)
     );
   }

  // saveCustomer(){
  //   this.customerService.createCustomer(this.customer).subscribe(data => {
  //     console.log(data);
  //   },
  //   error => console.log(error));
  // }

 
}