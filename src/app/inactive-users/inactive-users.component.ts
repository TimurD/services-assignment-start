import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: string[] = [];

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
  }

  constructor(private userService: UserService) {
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
