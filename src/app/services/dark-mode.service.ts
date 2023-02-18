import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { localStorageToken } from './localstorage.token';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private darkMode = false;
  private subject = new Subject<any>();
  constructor(@Inject(localStorageToken) private localStorage: Storage) {}

  toggleDarmMode(): void {
    this.darkMode = !this.darkMode;
    this.subject.next(this.darkMode);
    this.localStorage.setItem('darkMode', this.darkMode ? 'dark' : 'ligth');
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  onDarkMode(): Observable<any> {
    return this.subject.asObservable();
  }

  initDarkMode(): void {
    this.darkMode = false;
    if (
      this.localStorage.getItem('darkMode') &&
      this.localStorage.getItem('darkMode') === 'dark'
    ) {
      this.darkMode = true;
    }
    this.subject.next(this.darkMode);

    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setDarkMode(darkMode: boolean): void {
    this.darkMode = darkMode;
    this.subject.next(this.darkMode);
    this.localStorage.setItem('darkMode', this.darkMode ? 'dark' : 'ligth');
  }
}
