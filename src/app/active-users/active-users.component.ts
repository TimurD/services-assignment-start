import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[] = [];

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
  }

  constructor(private userService: UserService) {
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
