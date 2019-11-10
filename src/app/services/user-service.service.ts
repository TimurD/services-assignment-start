import {EventEmitter, Injectable} from '@angular/core';
import {CounterService} from './counter-service.service';

@Injectable()
export class UserService {

  constructor(private counterService: CounterService) {
  }

  users: string[];
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  userSetToInactive = new EventEmitter<number>();
  userSetToActive = new EventEmitter<number>();

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.onActiveToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.onInactiveToActive();
  }

}
