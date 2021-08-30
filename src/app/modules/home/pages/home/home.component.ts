import { UserService } from './../../../../core/http/user/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { PageEvent } from '@angular/material/paginator';
import { USERS } from 'src/app/core/mocks/mock-users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  allusers: User[] = this.users;
  pageSlice: User[] = [];
  pageSize: number = 16
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      this.allusers = this.users;
      this.pageSlice = this.users.slice(0, 16);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.users.length) {
      endIndex = this.users.length;
    }
    this.pageSlice = this.users.slice(startIndex, endIndex);
  }

  exampleFunctionHome(user: User) {
    console.log('Updated user');
  }

  onSearchChange(searchValue: any): void {
    if (searchValue) {
      let value = searchValue.target.value.toLowerCase();
      this.users = this.allusers.filter(function (user) {
        return user.lastName.toLowerCase().includes(value) || user.firstName.toLowerCase().includes(value)
        || user.location?.toLowerCase().includes(value) || user.phone.toLowerCase().includes(value);
      });
      this.pageSlice = this.users.slice(0, this.pageSize);
    }
  }
}
