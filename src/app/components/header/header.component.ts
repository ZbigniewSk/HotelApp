import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { localStorageToken } from 'src/app/services/localstorage.token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  hotelName: string = 'Gulugulu Hotel';

  darkMode = false;
  user: any = '';
  pending: boolean = true;
  subscription: Subscription;

  constructor(
    private darkModeService: DarkModeService,
    // private firebaseService: FirebaseService,
    private authService: AuthService,
    private router: Router,
    @Inject(localStorageToken) private localStorage: Storage
  ) {
    // this.subscription = this.firebaseService
    //   .onAuth()
    //   .subscribe((v) => (this.user = v));
    this.subscription = this.darkModeService
      .onDarkMode()
      .subscribe((v) => (this.darkMode = v));
  }

  ngOnInit(): void {
    this.darkModeService.initDarkMode();

    this.authService.currentAuthStatus.subscribe(
      (authStatus) => (this.user = authStatus)
    );

    this.authService.pendingStatus.subscribe(
      (pending) => (this.pending = pending)
    );
  }

  toggleDarkMode() {
    this.darkModeService.toggleDarmMode();
    console.log(this.darkMode);
  }

  loginLogoutHandler() {
    if (this.user) {
      this.authService.logout();
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
