import { Component, OnInit } from '@angular/core';
import { AuthService} from  '../authenticate.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 salSlip : string;
  constructor( private authService: AuthService) {
    this.authService.authenticate();
  }

  ngOnInit() {
  }
getSalarySlip() {
    if (this.authService.checkAuthenticate()){
      return 'salary slip';
    }
    return 'not authenticte';
}
  getSlip() {
    if (this.authService.checkAuthenticate()){
     this.salSlip = 'salary slip';
    }
  }
}
