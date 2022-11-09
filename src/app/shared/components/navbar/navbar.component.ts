import { LoginService } from './../../services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  logout() {
    this.loginService.logout()
  }
}
