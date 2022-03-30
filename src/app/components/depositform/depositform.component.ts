import { Component, OnInit } from '@angular/core';
import { AtmService } from 'src/app/atm.service';

@Component({
  selector: 'app-depositform',
  templateUrl: './depositform.component.html',
  styleUrls: ['./depositform.component.scss']
})
export class DepositformComponent implements OnInit {

  data = {
    accountNumber: "",
    amount: ""

  }


  constructor(private atm: AtmService) { }

  ngOnInit(): void {
  }



  doSubmitForm() {
    console.log("try to submit form");
    console.log("DATA ", this.data);

    this.atm.depositAmount(this.data).subscribe(
      response => {
        console.log(response);

      },
      error => {
        console.log(error);

      }
    )


  }
}
