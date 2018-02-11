import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Account } from '../Account';
import { AccountService } from './../account.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  @Input() account:Account;
  
  constructor(
    private route: ActivatedRoute,
    private accountservice: AccountService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getAccount();
  }
  getAccount(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountservice.getAccount(id)
      .subscribe(account => this.account=account);
  }
  goBack(): void {
    this.location.back();
  }
  Save(): void {
    this.accountservice.putAccount(account)
      .subscribe(account => this.account=account);
  }
}

// import { Component, OnInit,Input } from '@angular/core';
// import { Account } from '../Account';

// @Component({
//   selector: 'app-account-detail',
//   templateUrl: './account-detail.component.html',
//   styleUrls: ['./account-detail.component.css']
// })
// export class AccountDetailComponent implements OnInit {

//   @Input() account:Account;
  
//   constructor() { }

//   ngOnInit() {
//   }

// }
