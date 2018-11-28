import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/UserService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
  users: string[];

  constructor(public userService:UserService){}

  ngOnInit(): void {
   this.users = this.userService.activeUsers;
  }

}
