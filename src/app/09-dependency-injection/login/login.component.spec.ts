import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from '../auth.service';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

class MockAuthService extends AuthService{
  public  isAthenticated() {
    return true;
  }
}
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedAuthService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, HttpClientModule],
      providers: [AuthService]
    })
    .compileComponents();
    TestBed.overrideComponent(
      LoginComponent,
      {set: {providers: [{provide: AuthService, useClass: MockAuthService}]}}
    );
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    testBedAuthService = TestBed.get(AuthService);
  }));

  it('should check the service', () => {
    expect(testBedAuthService instanceof AuthService).toBeTruthy();
  });
  it('should inject service using inject function and check its instance',
    inject([AuthService], (injectedService: AuthService) => {
        expect(injectedService).toBeTruthy();
      }));
  it('should test injected service injected using component overriding',  () => {
    const overRiddenService = fixture.debugElement.injector.get(AuthService);
    expect(overRiddenService instanceof MockAuthService).toBeTruthy();
  });
});
