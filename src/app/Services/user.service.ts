import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: String = 'https://keycode-book.herokuapp.com'
  constructor(
    private http: HttpClient
  ) { }

  createUser(formData){
    return this.http.post<User>(`${this.apiUrl}/user/create`, formData)
  }
  login(formData){
    return this.http.post<User>(`${this.apiUrl}/login`, formData)
  }
}
