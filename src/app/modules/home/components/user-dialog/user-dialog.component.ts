import { UserService } from './../../../../core/http/user/user.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from 'src/app/core/models/User';

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
    { name: 'Hombre', value: 'h' },
    { name: 'Mujer', value: 'm' },
  ];
  chosenGender: string = this.genders[0].value;
  constructor(private userService: UserService) {}

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
