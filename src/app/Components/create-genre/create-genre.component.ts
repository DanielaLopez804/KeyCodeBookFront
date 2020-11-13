import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {GenreService} from '../../Services/genre.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  genreForm: FormGroup

  constructor(
    private fromBuilder: FormBuilder,
    private genreService: GenreService
  ) { 
    this.validator()
  }

  ngOnInit(): void {
  }

  validator(){
    this.genreForm= this.fromBuilder.group({
    name: ['', Validators.required],
    status: [true]
    })
  }

  saveGenre(){
    if(this.genreForm.valid){
      this.genreService.createGenre(this.genreForm.value).subscribe(
        (genreCreated) =>{
          alert('Genero creado correctamente')
        },
        (error)=>{
          console.error('Error ->', error)
        }
      )

    }else{
      alert('Todos los campos debes estar llenos')
    }

  }

}
