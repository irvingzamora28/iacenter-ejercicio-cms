import { UserService } from './../../../../core/http/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[] = []
  pageSlice: User[] = []
  constructor(private userService: UserService) { }
  
  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users
      this.pageSlice = this.users.slice(0,16)
      console.log(this.users);
      
    })
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize
    let endIndex = startIndex + event.pageSize
    if (endIndex > this.users.length) {
      endIndex = this.users.length
    }
    this.pageSlice = this.users.slice(startIndex, endIndex)
  }

}
