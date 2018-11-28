import { Component,OnInit} from '@angular/core';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accounts: {name:string, status:string} [] = [];//we define blank array of 'accounts'

  ngOnInit(){  
    this.accounts = this.accountsService.accounts;  //here since accounts in accountservice
    //is of type array, we are actually referencing that array, not duplicating it.
  }

  constructor(private accountsService:AccountsService){}

}
