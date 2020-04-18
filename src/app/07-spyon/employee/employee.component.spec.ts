import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import {AuthService} from '../authenticate.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let authService: AuthService;
  let fixture: ComponentFixture<EmployeeComponent>;
  let h1 : HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [AuthService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it( 'should return value sal slip', () => {
    spyOn(authService, 'checkAuthenticate').and.returnValue(true);
    let salSlip = component.getSalarySlip();
    expect(salSlip).toEqual('salary slip');

    //following has been called or not
    expect(authService.checkAuthenticate).toHaveBeenCalled();
  });
  it('should return assert value for h1 element to be value of component.salslip',  () => {
    component.getSlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salSlip);
  });
});
