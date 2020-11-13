import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Genre} from '../Models/Genre'

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  apiUrl: String = 'https://keycode-book.herokuapp.com'

  constructor(
    private http: HttpClient
  ) { }

  createGenre(fromData){
    return this.http.post<Genre>(`${this.apiUrl}/genre/create`, fromData)
  }
  getAll(){
    return this.http.get<Genre>(`${this.apiUrl}/genre/getAll`)
  }
}
