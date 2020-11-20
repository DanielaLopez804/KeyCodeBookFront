import { Component, OnInit } from '@angular/core';
import { BookService  } from '../../Services/book.service';
import { Router } from '@angular/router';
import { StorageService } from '../../Services/storage.service';
const swal = require('sweetalert')

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  allBooks: any;ç
  roleUser: Boolean = false
  constructor(
    private bookService: BookService,
    private storageService: StorageService,
    private route: Router
  ) {
    let dataUser = this.storageService.dataUser()
    if (dataUser.role == 'Admin'){
      this.roleUser = true
    }
   }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.bookService.getAll().subscribe(
      (books) => {
         this.allBooks = books
      },
      (error) => {
        console.error('Error -> ', error)
      }
    )
  }

  updateBook(book){
    localStorage.setItem(`book-${book._id}`, JSON.stringify(book) )
    this.route.navigate([`/update-book/${book._id}`])
  }

  removeBook(idBook){
    this.bookService.deleteBook(idBook).subscribe(
      (bookDeleted) => {
        swal({
          title: "Hecho!",
          text: "El libro se elimino correctamente!",
          icon: "success",
        });
        this.route.navigateByUrl('/', { skipLocationChange: true } ).then(
          () => {
            this.route.navigate(['/list-book'])
          }
        )


      },(error) =>{
        console.error('Error Al eliminar libro',error)

      }
    )
    
  }

}
