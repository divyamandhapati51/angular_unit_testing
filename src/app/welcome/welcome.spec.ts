// import {ComponentFixture, TestBed} from '@angular/core/testing';
// import {WelcomeComponent} from './welcome';
//
//
// describe('WelcomeComponent (with beforeEach)', () => {
//   let comp: WelcomeComponent;
//   let fixture: ComponentFixture<WelcomeComponent>;
//   let el: HTMLElement;
//   let userServiceStub: Partial<UserService>;
//
//   beforeEach(() => {
//   // stub UserService for test purposes
//   userServiceStub = {
//     isLoggedIn: true,
//     user: { name: 'Test User' },
//   };
//
//   TestBed.configureTestingModule({
//     declarations: [ WelcomeComponent ],
//     providers: [ { provide: UserService, useValue: userServiceStub } ],
//   });
//
//   fixture = TestBed.createComponent(WelcomeComponent);
//   comp    = fixture.componentInstance;
//   });
//   // UserService from the root injector
//   userService = TestBed.inject(UserService);
//
//   //  get the "welcome" element by CSS selector (e.g., by class name)
//   el = fixture.nativeElement.querySelector('.welcome');
//
//   it('should welcome the user', () => {
//   fixture.detectChanges();
//   const content = el.textContent;
//   expect(content).toContain('Welcome', '"Welcome ..."');
//   expect(content).toContain('Test User', 'expected name');
// });
//
//   it('should welcome "divya"', () => {
//   userService.user.name = 'divya'; // welcome message hasn't been shown yet
//   fixture.detectChanges();
//   expect(el.textContent).toContain('divya');
// });
//
//   it('should request login if not logged in', () => {
//   userService.isLoggedIn = false; // welcome message hasn't been shown yet
//   fixture.detectChanges();
//   const content = el.textContent;
//   expect(content).not.toContain('Welcome', 'not welcomed');
//   expect(content).toMatch(/log in/i, '"log in"');
//   });
//   });
