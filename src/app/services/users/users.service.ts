import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  greet(name) {
    return 'Hello ' + name;
  }
  constructor() { }
}
