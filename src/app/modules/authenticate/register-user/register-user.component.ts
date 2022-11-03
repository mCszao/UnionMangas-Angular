import { IRegisterUser } from './../../../shared/interface/IRegisterUser';
import { Router } from '@angular/router';
import { RegisterService } from './../../../shared/services/registerUser/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  providers: [MessageService]
})
export class RegisterUserComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', Validators.required],
        password: ['', Validators.required],
        scan: [false]
      }
    )
  }

  showError() {
    this.messageService.add({ severity: "error", summary: "Erro", detail: "Preencha todos os campos!" });
  }

  register() {
    this.registerService.registerUser(this.formRegister.value, this.formRegister.value.scan).subscribe(() => [
      this.router.navigate(["login"])
    ], (error) => {
      this.showError()
      console.log(error);
    })
  }
}
