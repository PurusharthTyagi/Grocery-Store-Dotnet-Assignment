import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersCComponent } from './my-orders-c.component';

describe('MyOrdersCComponent', () => {
  let component: MyOrdersCComponent;
  let fixture: ComponentFixture<MyOrdersCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOrdersCComponent]
    });
    fixture = TestBed.createComponent(MyOrdersCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
