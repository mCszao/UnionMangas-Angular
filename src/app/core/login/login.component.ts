import { AuthenticationService } from './../../shared/services/login/authentication.service';
import { IUserInformation } from './../../shared/interface/IUserInformation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginUser: IUserInformation = {
    userName: "",
    password: ""
  }

  constructor(private service: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.service.authenticate(this.loginUser).subscribe(() => {
      console.log("Autenticado com sucesso!");
    }, (error) => {
      alert("Usuário ou senha inválido")
      console.log(error);
    })
  }

}
