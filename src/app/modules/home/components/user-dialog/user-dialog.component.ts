import { UserService } from './../../../../core/http/user/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
  action: string = 'create';
  id: number = 1;
  firstName: string = '';
  lastName: string = '';
  location: string = '';
  phone: string = '';
  genders = [
    { name: 'Hombre', value: 'm' },
    { name: 'Mujer', value: 'f' },
  ];
  chosenGender: string = this.genders[0].value;
  constructor(@Inject(MAT_DIALOG_DATA) public user: User, private userService: UserService) {
    if (user) {
      this.id = user.id ? user.id : 1
      this.firstName = user.firstName ? user.firstName : ''
      this.lastName = user.lastName ? user.lastName : ''
      this.location = user.location ? user.location : ''
      this.phone = user.phone ? user.phone : ''
      this.chosenGender = user.gender ? user.gender : 'm'
      this.action = 'update'
    } else {
      this.action = 'create'
    }
    
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstName || !this.lastName || !this.location || !this.phone) {
      alert('Por favor llena los campos obligatorios');
      return;
    }

    const newUser = {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      location: this.location,
      phone: this.phone,
      gender: this.chosenGender,
      createdAt: null,
      updatedAt: null,
    };

    if (this.action === 'create') {
      this.userService.addUser(newUser).subscribe((user) => {});
    } else {
      this.userService.updateUser(newUser).subscribe((user) => { });
    }

    this.firstName = '';
    this.lastName = '';
    this.location = '';
    this.phone = '';
    this.chosenGender = this.genders[0].value;
  }
}
