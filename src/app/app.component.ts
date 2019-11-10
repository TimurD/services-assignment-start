import {Component} from '@angular/core';
import {UserService} from './services/user-service.service';
import {CounterService} from './services/counter-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, CounterService]
})
export class AppComponent {
}
