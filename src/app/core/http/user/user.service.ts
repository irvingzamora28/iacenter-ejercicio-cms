import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://iacenter.victortalamantes.com/user'

  constructor(private http:HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}s`, httpOptions)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, httpOptions)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiUrl, user, httpOptions)
  }

}
