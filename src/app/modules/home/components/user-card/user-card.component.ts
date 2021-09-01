import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    location: '',
    phone: '',
    gender: '',
    createdAt: '',
    updatedAt: '',
  };

  constructor() {}


  editUserDialog(user: User) {
    
  }

  ngOnInit(): void {
  }

}
