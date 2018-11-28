import { LoggingService } from "src/app/shared/logging.service";
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingServe:LoggingService){};

    addAccount(name:string, status:string){
        this.accounts.push({name:name, status:status});//create new object and push it
        this.loggingServe.logStatusChange(status);
    }
    updateAccount(id:number, status:string){
        this.accounts[id].status = status;
        this.loggingServe.logStatusChange(status);
    }
}