import { Component, OnInit } from '@angular/core';
import { Account } from '../Account';
import { debug } from 'util';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Account[];

  constructor(private AccountService: AccountService) {
   }
  ngOnInit() {
    this.getAccounts();
  }
   getAccounts(): void {
     console.log('get accounts called');
    this.AccountService.getAccounts().subscribe(accounts => this.accounts = accounts);
  }
}
