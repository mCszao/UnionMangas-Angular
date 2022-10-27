import { RegisterService } from './../../../shared/services/registerUser/register.service';
import { IRegisterUser } from './../../../shared/interface/IRegisterUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerUser: IRegisterUser = {
    email: "",
    fullName: "",
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
