import { UserService } from './../../../../core/http/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = []

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users
      console.log(this.users);
      
    })
  }

}
