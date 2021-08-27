import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'
import { HeaderComponent } from './../../core/components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatInputModule} from '@angular/material/input';
import { UserCardComponent } from './components/user-card/user-card.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    UserCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HomeModule { }
