import { Router } from '@angular/router';
import { LoginService } from './../../services/login/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  @Input() isLoggedIn: boolean | null = null;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit() {

  }

  logout(): void {
    this.loginService.logout()
  }

  login(): void {
    this.router.navigate(["login"])
  }
}
