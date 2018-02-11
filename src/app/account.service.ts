import { Account } from './Account';
import { MessageService } from './message.service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const METHOD_GETACCOUNTS="GetAccounts";
const METHOD_GETACCOUNT="GetAccount";
const METHOD_PUTACCOUNT="PutAccount";

@Injectable()
export class AccountService {

  private AccountUrl = 'http://localhost:3000/api/';  // URL to web api
  constructor(
      private http: HttpClient,
      private messageService: MessageService) {

   }
  
  getAccounts():Observable<Account[]>{
     //return ACCOUNTS;
     this.messageService.add('AccountService: fetched Accounts');
     return this.http.get<Account[]>(this.AccountUrl+METHOD_GETACCOUNTS)
  }

  getAccount(id: number): Observable<Account> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`AccountService: fetched Account id=${id}`);
    return this.http.get<Account>(this.AccountUrl+METHOD_GETACCOUNT+'\\'+id);
  }
  putAccount(account: Account): Observable<Account> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero`);
    this.http.post(this.AccountUrl+METHOD_PUTACCOUNT,Account);
    return ;
  }
}
