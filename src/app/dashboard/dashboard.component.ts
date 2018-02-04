import { AccountService } from './../account.service';
import { Account } from './../Account';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accounts: Account[]=[];

  constructor(private accountservice: AccountService) {
    this.getAccounts();
   }
  
  ngOnInit() {
  }
  getAccounts(): void {
    this.accountservice.getAccounts()
    .subscribe(accounts => this.accounts = accounts);
  }
}
/*

  selectedAccount: Account;
  accounts;
  constructor(private AccountService: AccountService) {
   
   }

  ngOnInit() {
    this.getAccounts();
  }
  onSelect(account: Account): void {
    this.selectedAccount = account;
   }
   getAccounts(): void {
    this.AccountService.getAccounts().subscribe(accounts => this.accounts = accounts);
  }
*/