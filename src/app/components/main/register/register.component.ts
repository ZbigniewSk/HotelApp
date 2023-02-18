import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  name: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  register() {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!this.email.match(mailFormat)) {
      alert('Please enter email');
      return;
    }

    if (this.password.length < 6) {
      alert('Password to short - at least 6 characters');
      return;
    }

    this.authService.register(this.email, this.password, this.name);

    this.email = '';
    this.password = '';
    this.name = '';
  }
}
