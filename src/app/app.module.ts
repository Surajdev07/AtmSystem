import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DepositformComponent } from './components/depositform/depositform.component';
import { WithdrawformComponent } from './components/withdrawform/withdrawform.component';
import { TransferformComponent } from './components/transferform/transferform.component';
import { BalanceformComponent } from './components/balanceform/balanceform.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AtmService } from './atm.service';
import { CustomerComponent } from './components/customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DepositformComponent,
    WithdrawformComponent,
    TransferformComponent,
    BalanceformComponent,
    CustomerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AtmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
