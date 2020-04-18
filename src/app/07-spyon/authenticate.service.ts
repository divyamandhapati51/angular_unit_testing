import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }
  authenticate(){
    localStorage.setItem('user', 'divya');
  }
  checkAuthenticate(){
    return localStorage.getItem('user') === 'divya';
  }
}
