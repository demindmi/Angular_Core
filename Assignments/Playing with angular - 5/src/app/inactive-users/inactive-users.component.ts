import { Component,OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/UserService.service';
import { CounterService } from 'src/app/shared/CounterService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  moves:number=0;

  users: string[];

  constructor(public userService:UserService, public counterService:CounterService){}

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
   }

   onSetActive(id:number){
     this.userService.onSetToActive(id);
     this.moves = this.counterService.fromActive;
   }
}
