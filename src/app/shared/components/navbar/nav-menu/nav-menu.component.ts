import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent implements OnInit {
  display: boolean = false; 
  
  constructor() { }

  ngOnInit() {
  }

}
