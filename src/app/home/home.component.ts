import { Component, OnInit } from '@angular/core';
// import { UsersService } from '../services/users/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  greet(name) {
    return 'Hello ' + name;
  }
  constructor() { }

  ngOnInit() {
  }
  //  greet(name: never) {
  //   return 'Hello' + name;
  // }
}
