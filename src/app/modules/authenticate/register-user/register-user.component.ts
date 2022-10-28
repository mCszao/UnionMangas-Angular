import { RegisterService } from './../../../shared/services/registerUser/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formUser: FormGroup;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder
  ) {
    this.formUser = this.formBuilder.group(
      {
        email: [''],
        fullName: [''],
        password: [''],
        scan: [false]
      }
    )
  }

  ngOnInit() {
  }

  register() {
    this.registerService.registerUser(this.formUser.value, this.formUser.value.scan);
  }
}
