import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { DebugElement } from '@angular/core';


describe('BannerComponent (with beforeEach)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  // const bannerElement: HTMLElement = fixture.nativeElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
  
  // it('should contain "banner works!"', () => {
  //   const bannerElement: HTMLElement = fixture.nativeElement;
  //   expect(bannerElement.textContent).toContain('banner works!');
  // });

  it('should find the <p> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('p');
    expect(p.textContent).toEqual('banner works!');
  });
});
