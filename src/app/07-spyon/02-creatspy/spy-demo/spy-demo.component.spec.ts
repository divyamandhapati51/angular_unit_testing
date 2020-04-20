import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyDemoComponent } from './spy-demo.component';
import { MockSpyService } from '../mock-spy.service';

describe('SpyDemoComponent', () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  let demofetchData: any;
  let demoList: any;
  let mockService: MockSpyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpyDemoComponent ],
      providers: [MockSpyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService = TestBed.get(MockSpyService);

   // jasmine createspy
    demofetchData = jasmine.createSpy('fetchData');
    demofetchData('Dummy data fetched');

  //  jasmin creatspyob
    demoList = jasmine.createSpyObj('demoList', ['add', 'remove', 'refresh']);
    demoList.add();
    demoList.remove(1);
    demoList.refresh();

  });
  // it('[spyon] should check mock spy method is called',  () => {
  //   const mockspy = spyOn(mockService, 'getValue');
  //   component.ngOnInit();
  //   expect(mockspy).toHaveBeenCalled();
  // });

  it('[jasmin.createspy]-should check demofetchData is defined', () => {
    expect(demofetchData).toBeDefined();
  });

  it('[jasmin.createspy]-should check demofetchData is called', () => {
    expect(demofetchData).toHaveBeenCalled();
  });

  it('[jasmin.createspy]- should check demofetchData is called once', () => {
    expect(demofetchData.calls.count()).toBe(1);
  });

  it('[jasmin.createspyobj]- should check demolist methods are defined', () => {
    expect(demoList.add).toBeDefined();
    expect(demoList.remove).toBeDefined();
    expect(demoList.refresh).toBeDefined();
  });

  it('[jasmin.createspyobj]- should check demolist methods are called ', () => {
    expect(demoList.add).toHaveBeenCalled();
    expect(demoList.remove).toHaveBeenCalled();
    expect(demoList.refresh).toHaveBeenCalled();
  });
  it('[jasmin.createspyobj]- should check demolist methods are called once ', () => {
    expect(demoList.add.calls.count()).toBe(1);
    expect(demoList.remove.calls.count()).toBe(1);
    expect(demoList.refresh.calls.count()).toBe(1);
  });
  it('[jasmin.createspyobj]- track all the arguments of its calls', () => {
    expect(demoList.remove).toHaveBeenCalledWith(1);
     });

});
