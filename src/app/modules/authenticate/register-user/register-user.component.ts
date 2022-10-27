import { RegisterService } from './../../../shared/services/registerUser/register.service';
import { IRegisterUser } from './../../../shared/interface/IRegisterUser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userSave: IRegisterUser = {} as IRegisterUser

  form!: FormGroup;

  constructor(
    private service: RegisterService,
    private formBuilder: FormBuilder
    ) {
      this.form = this.formBuilder.group(
        {
          email:[''],
          fullName:[''],
          password:[''],
          scan:['']
        }
      )
     }

  ngOnInit() {
  }

  register() {
    this.userSave.email = this.form.value.email;
    this.userSave.fullName = this.form.value.fullName;
    this.userSave.password = this.form.value.password;
    this.service.save(this.userSave, this.form.value.scan);
  }
}
