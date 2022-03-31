import { Component, OnInit } from '@angular/core';
import { WithdrawService } from 'src/app/withdraw.service';
import { Withdraw } from './withdraw';

@Component({
  selector: 'app-withdrawform',
  templateUrl: './withdrawform.component.html',
  styleUrls: ['./withdrawform.component.scss']
})
export class WithdrawformComponent implements OnInit {

  withdraw : Withdraw = {};

  constructor(private withdrawservice : WithdrawService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.withdraw);
    this.updateWithdraw();
   }
   updateWithdraw(){
     this.withdrawservice.withdrawAmount(this.withdraw).subscribe(data => {
      console.log(data);
     },
     error => console.log(error)
     );
   }

}
