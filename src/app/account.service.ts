import { MessageService } from './message.service';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Account } from './account';

const METHOD_GETACCOUNTS="GetAccounts";
const METHOD_GETACCOUNT="GetAccount";

@Injectable()
export class AccountService {

  private AccountUrl = 'http://localhost:3000/api/';  // URL to web api
  constructor(
      private http: HttpClient,
      private messageService: MessageService) {

   }
  
  getAccounts():Observable<Account[]>{
     //return ACCOUNTS;
     this.messageService.add('AccountService: fetched Account');
     return this.http.get<Account[]>(this.AccountUrl+METHOD_GETACCOUNTS)
  }

  getAccount(id: number): Observable<Account> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Account>(this.AccountUrl+METHOD_GETACCOUNT+'\\'+id);
  }
}
