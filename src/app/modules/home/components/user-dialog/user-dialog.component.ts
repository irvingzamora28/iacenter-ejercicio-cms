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
      this.firstName = user.firstName ? user.firstName : ''
      this.lastName = user.lastName ? user.lastName : ''
      this.location = user.location ? user.location : ''
      this.phone = user.phone ? user.phone : ''
      this.chosenGender = user.gender ? user.gender : 'm'
    }
    
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.firstName || !this.lastName || !this.location || !this.phone) {
      alert('Por favor llena los campos obligatorios');
      return;
    }

    const newUser = {
      firstName: this.firstName,
      lastName: this.lastName,
      location: this.location,
      phone: this.phone,
      gender: this.chosenGender,
      createdAt: null,
      updatedAt: null,
    };
    console.log(newUser);

    this.userService.addUser(newUser).subscribe((task) => {});

    this.firstName = '';
    this.lastName = '';
    this.location = '';
    this.phone = '';
    this.chosenGender = this.genders[0].value;
  }
}
