import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';
import { auth } from 'src/firebase/firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {
    this.authStatusListener();
  }

  currentUser: any = null;
  private authStatusSub = new BehaviorSubject(this.currentUser);
  currentAuthStatus = this.authStatusSub.asObservable();

  pending: boolean = true;
  private pendingSub = new BehaviorSubject(this.pending);
  pendingStatus = this.pendingSub.asObservable();

  authStatusListener() {
    onAuthStateChanged(auth, (credential) => {
      this.authStatusSub.next(credential);
      this.pendingSub.next(false);
    });
  }

  login(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('token', 'true');
        this.router.navigateByUrl('/');
      })
      .catch((error) => alert(error.message));
  }

  register(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name,
        })
          .then(() => {
            console.log('profileUpdated');
          })
          .catch((error) => alert(error.message));

        localStorage.setItem('token', 'true');
        this.router.navigateByUrl('/');
      })
      .catch((error) => alert(error.message));
  }

  logout() {
    signOut(auth)
      .then((userCredential) => {
        localStorage.removeItem('token');
      })
      .catch((error) => alert(error.message));
  }
}
