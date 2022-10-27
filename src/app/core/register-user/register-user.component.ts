import { IRegisterUser } from './../../shared/interface/IRegisterUser';
import { RegisterService } from './../../shared/services/registerUser/register.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerUser: IRegisterUser = {
    userName: "",
    password: "",
    readerDto: {
      email: "",
      birthdate: new Date(),
      quantityRead: 0,
    },
    scan: false
  }

  constructor(
    private service: RegisterService) { }

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
