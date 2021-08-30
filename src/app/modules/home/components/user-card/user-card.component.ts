import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog) {}


  editUserDialog(user: User) {
    
    const dialogRef = this.dialog.open(UserDialogComponent, {
      data: {user,
        updateUser: (user: User) => { this.user = user }
      },
   });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

}
