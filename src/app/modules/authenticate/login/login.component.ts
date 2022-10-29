import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../shared/services/login/login.service';
import { ILogin } from './../../../shared/interface/ILogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.formLogin = this.formBuilder.group(
      {
        userName: [""],
        password: [""]
      }
    )
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.formLogin.value).subscribe(() => {
      this.router.navigate(["mangas"])
    }, (error) => {
      alert("Usuário ou senha inválido")
      console.log(error);
    })
  }
}
