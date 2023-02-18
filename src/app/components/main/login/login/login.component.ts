import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.email.match(mailFormat)) {
      alert('Please enter email');
      return;
    }

    if (this.password.length < 6) {
      alert('Password to short - at least 6 characters');
      return;
    }

    this.authService.login(this.email, this.password);

    this.email = '';
    this.password = '';
  }
}
