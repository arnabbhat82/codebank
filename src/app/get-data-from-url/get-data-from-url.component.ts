import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';
import { interval } from 'rxjs';
import { take, map } from 'rxjs/operators';


@Component({
  selector: 'app-get-data-from-url',
  templateUrl: './get-data-from-url.component.html',
  styleUrls: ['./get-data-from-url.component.scss']
})
export class GetDataFromUrlComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => (this.users = data));
  }
}
