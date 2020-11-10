import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/user.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup // Permite indicarle a Angular que en formualrio debe aplicar las validaciones que se crearaon
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.validator()
  }

  ngOnInit(): void {
  }

  validator() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['User', Validators.required],
      birthday: [''],
      age: ['']
    })
  }
  saveUser() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value)
     this.userService.createUser(this.signUpForm.value).subscribe(
        (userCreated) => {

          console.log(userCreated)
          alert('Usuario creado correctamente')

        }, (error) => {
          console.error('Tuvimos un errror ->', error)
        }
      ) 
    } else {
      alert('El formulario no es valido')
    }
  }
}
