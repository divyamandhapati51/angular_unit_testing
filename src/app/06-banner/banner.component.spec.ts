import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('BannerComponent (with beforeEach)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  // const bannerElement: HTMLElement = fixture.nativeElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],

    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  // test fail with this msg --- expected '' to contain 'Test Tour of Heroes'.
  // it('should display original title', () => {
  //   expect(h1.textContent).toContain(component.title);
  // });

  // it('no title in the DOM after createComponent()', () => {
  //   expect(h1.textContent).toEqual('');
  // });

  // detectChanges()  --start
  it('should display original title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('Test Title');
  });
  //  end

  // For example, the component might render first
  // on the server as part of a strategy to make the application
  // launch faster on poorly connected devices.
  // The server-side renderer might not support the full HTML element API.
  // If it doesn't support querySelector, this test could fail.

  it('should find the <p> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('p');
    expect(p.textContent).toEqual('banner works!');
  });
  //using by.css
  it('should find the <p> with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('banner works!');
  });
});


