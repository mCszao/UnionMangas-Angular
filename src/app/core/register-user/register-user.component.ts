import { RegisterService } from './../../shared/services/registerUser/register.service';
import { IUserInformation } from './../../shared/interface/IUserInformation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
})
export class RegisterUserComponent implements OnInit {
  registerUser: IUserInformation = {
    userName: "",
    password: ""
  }

  constructor(private service: RegisterService) { }

  ngOnInit() {
  }

  register() {
    this.service.registerUser(this.registerUser).subscribe(() => {
      console.log("Cadastrado com sucesso");
    }, (error) => {
      console.log(error);
    })
  }

}
