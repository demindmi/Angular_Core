import { Component, Input } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountServices:AccountsService) {}

  onSetTo(status: string) {
    this.accountServices.updateAccount(this.id, status);
    this.accountServices.statusUpdated.emit(status)
  }
}
