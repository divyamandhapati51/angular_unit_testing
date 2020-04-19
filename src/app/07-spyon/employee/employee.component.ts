import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from  '../authenticate.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 salSlip : string;
  constructor( private authenticateService: AuthenticateService) {
    this.authenticateService.authenticate();
  }

  ngOnInit() {
  }
getSalarySlip() {
    if (this.authenticateService.checkAuthenticate()) {
      return 'salary slip';
    }
    return 'not authenticte';
}
  getSlip() {
    if (this.authenticateService.checkAuthenticate()){
     this.salSlip = 'salary slip';
    }
  }
}
