import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from '../Models/Book'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: String = 'https://keycode-book.herokuapp.com'

  constructor(
    private http: HttpClient
  ) { }

  createBook(fromData){
    return this.http.post<Book>(`${this.apiUrl}/book/create`, fromData)
  }
}
