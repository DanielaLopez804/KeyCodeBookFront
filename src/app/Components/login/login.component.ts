import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'; //Validar los formularios
import { UserService } from '../../Services/user.service';
import { StorageService } from '../../Services/storage.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private storageService: StorageService,
    private router : Router,

  ) { this.validator() }

  ngOnInit(): void {
  }

  validator(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }
  login(){
    if(this.loginForm.valid){
      this.userService.login(this.loginForm.value).subscribe(
        (dataUser) =>{
          this.storageService.saveToken(dataUser['token'])
          const infoUser = this.storageService.dataUser()
          if (infoUser.role== 'admin'){
            this.router.navigate(['/create-book'])
          }else {
            this.router.navigate(['/list-book'])
          }

          
          //console.log(dataUser['token'])
        },
        (error) =>{
          console.log('Error --->', error)
        }
      )
    }else{
      alert('Debes llenar todos los campos');
    }
  }
}
