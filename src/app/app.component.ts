import { LoginService } from './shared/services/login/login.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isLoggedIn$: Observable<boolean>;
  title = 'unionmanga';

  constructor(private loginService: LoginService) {
    this.isLoggedIn$ = this.loginService.isLoggedIn$;
  }
}
