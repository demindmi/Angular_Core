import { Injectable } from "@angular/core";
import { CounterService } from 'src/app/shared/CounterService.service';


@Injectable()
export class UserService {
    activeUsers = ['Max', 'Anna', 'Bob', 'Paul', 'Alex'];
    inactiveUsers = ['Chris', 'Manu', 'Lila', 'Dr.Brain'];

constructor(public counterService:CounterService){}

  onSetToInactive(id: number) {
    this.counterService.movedToInactive();
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.counterService.movedToActive();
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}