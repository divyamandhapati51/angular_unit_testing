import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {DebugElement} from '@angular/core';
import {ProductService} from '../product.service';
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  // let debugElement: DebugElement;
  let productService: ProductService;
  // let originalTimeout;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    productService = TestBed.get(ProductService);
    fixture.detectChanges();
  });

  it('should test filter product list (done)', (done) => {
    component.searchText = 'fresh';
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();
    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('should test filter product list (async)', async(() => {
    component.searchText = 'fresh';
    spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList({});
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = fixture.debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    });
  }));

  it('should test filter product list (fakeasync)', fakeAsync(() => {
    component.searchText = 'fresh';
    spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList({});
    tick();
    fixture.detectChanges();
    const bannerDe: DebugElement = fixture.debugElement;
    const value = bannerDe.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchText);
  }));

  it('Example -fakeAsync and tick -test the asynchronous code in synchrnous way',
    fakeAsync( () => {
     let isLoggedin = false;
     setTimeout(() => {isLoggedin = true; }, 100);
     expect(isLoggedin).toBe(false);
     tick(50);
     expect(isLoggedin).toBe(false);
     tick(50);
     expect(isLoggedin).toBe(true);
  }));

});
