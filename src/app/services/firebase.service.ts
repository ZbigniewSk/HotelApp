import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  // private user: any = null;
  // private subject = new Subject<any>();
  // constructor(private router: Router) {}
  // login(email: string, password: string) {
  //   // console.log('login email: ', email, 'password: ', password);
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       localStorage.setItem('token', 'true');
  //       this.router.navigateByUrl('/');
  //     })
  //     .catch((error) => alert(error.message));
  // }
  // register(email: string, password: string) {
  //   // console.log('register email: ', email, 'password: ', password);
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       localStorage.setItem('token', 'true');
  //       this.router.navigateByUrl('/');
  //     })
  //     .catch((error) => alert(error.message));
  // }
  // logout() {
  //   signOut(auth)
  //     .then((userCredential) => {
  //       this.user = null;
  //       localStorage.removeItem('token');
  //       this.subject.next(this.user);
  //       console.log('user signout');
  //     })
  //     .catch((error) => alert(error.message));
  // }
  // initAuthState() {
  //   console.log('init');
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       this.user = user;
  //       this.subject.next(this.user);
  //       console.log('yes: ', user);
  //     } else {
  //       this.user = null;
  //       this.subject.next(this.user);
  //       localStorage.removeItem('token');
  //     }
  //   });
  //   console.log('after init');
  // }
  // onAuth(): Observable<any> {
  //   return this.subject.asObservable();
  // }
}
