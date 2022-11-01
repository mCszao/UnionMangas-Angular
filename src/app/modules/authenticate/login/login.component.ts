import { ILogin } from './../../../shared/interface/ILogin';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../shared/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group(
      {
        userName: [""],
        password: [""]
      }
    )
  }

  showError() {
    this.messageService.add({ severity: "error", summary: "Erro", detail: "Login ou senha inválidos!" });
  }

  login() {
    this.loginService.login(this.formLogin.getRawValue() as ILogin).subscribe(() => {
      this.router.navigate(["mangas"])
    }, (error) => {
      this.showError()
      console.log(error);
    })
  }
}
