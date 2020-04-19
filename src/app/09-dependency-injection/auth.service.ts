import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8080/';
  basic: '';

  constructor(private httpService: HttpClient) {
  }

  public authenticateUser(username: string, password: string) {
    const headers = new HttpHeaders({
      'content-Type': 'applicaton/json',
      Authorization: this.basic
    });
    const options = {headers: headers};
    const data = {
      username,
      password
    };
    return this.httpService.put(this.BASE_URL + 'authenticate', data, options)
  }
}
