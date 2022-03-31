import { Component, OnInit } from '@angular/core';
import { Deposit } from './deposit';
import { DepositService } from 'src/app/deposit.service';

@Component({
  selector: 'app-depositform',
  templateUrl: './depositform.component.html',
  styleUrls: ['./depositform.component.scss']
})
export class DepositformComponent implements OnInit {

  deposit : Deposit = {};

  constructor(private depositservice : DepositService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.deposit);
    this.updateDeposit();
   }
   updateDeposit(){
     this.depositservice.depositAmount(this.deposit).subscribe(data => {
      console.log(data);
     },
     error => console.log(error)
     );
   }
}
