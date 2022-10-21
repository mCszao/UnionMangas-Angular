import { Router } from '@angular/router';
import { AuthenticationService } from './../../shared/services/login/authentication.service';
import { ILogin } from '../../shared/interface/ILogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginUser: ILogin = {
    userName: "",
    password: ""
  }

  constructor(private service: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.service.authenticate(this.loginUser).subscribe(() => {
      this.router.navigate(["mangas"])
    }, (error) => {
      alert("Usuário ou senha inválido")
      console.log(error);
    })
  }

}
