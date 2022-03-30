import { Component, OnInit } from '@angular/core';
import { AtmService } from 'src/app/atm.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  data = {
    firstName: "",
    lastName: "",
    mobileNumber: ""

  }


  constructor(private atm: AtmService) { }

  ngOnInit(): void {
  }

  doSubmitForm() {
    console.log("try to submit form");
    console.log("DATA ", this.data);

    this.atm.customerDetail(this.data).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);

      }
    )

  }
}
