import { UserService } from './../../../../core/http/user/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
})
export class UserDialogComponent implements OnInit {
  action: string = 'create';
  action_title: string = "Agregar"
  action_button_text: string = "Agregar"
  id: number = 1;
  firstName: string = '';
  lastName: string = '';
  location: string = '';
  phone: string = '';
  genders = [
    { name: 'Hombre', value: 'm' },
    { name: 'Mujer', value: 'f' },
  ];
  fnUpdateUser: any
  chosenGender: string = this.genders[0].value;
  constructor(private userService: UserService) {
    
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
      this.fnUpdateUser(newUser)
    }

    this.firstName = '';
    this.lastName = '';
    this.location = '';
    this.phone = '';
    this.chosenGender = this.genders[0].value;
  }
}
