import { Router } from '@angular/router';
import { RegisterService } from './../../../shared/services/registerUser/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  formRegister: FormGroup;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formRegister = this.formBuilder.group(
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
    this.registerService.registerUser(this.formRegister.value, this.formRegister.value.scan).subscribe(() => [
      this.router.navigate(["mangas"])
    ])
    this.formRegister.reset()
  }
}
