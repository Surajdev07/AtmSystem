import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { DepositformComponent } from './components/depositform/depositform.component';
import { HomeComponent } from './components/home/home.component';
import { TransferformComponent } from './components/transferform/transferform.component';
import { WithdrawformComponent } from './components/withdrawform/withdrawform.component';

const routes: Routes = [
  {
    path: "depositamount",
    component: DepositformComponent,
    pathMatch: "full"
  }
  ,
  {
    path: "transfer",
    component: TransferformComponent,
    pathMatch: "full"
  }
  ,
  {
    path: "withdraw",
    component: WithdrawformComponent,
    pathMatch: "full"
  }
  ,
  {
    path: "customer",
    component: CustomerComponent,
    pathMatch: "full"
  }
  ,
  {
    path: '',
    component: HomeComponent,
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
