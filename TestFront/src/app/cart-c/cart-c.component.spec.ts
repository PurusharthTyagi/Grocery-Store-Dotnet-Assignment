import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCComponent } from './cart-c.component';

describe('CartCComponent', () => {
  let component: CartCComponent;
  let fixture: ComponentFixture<CartCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartCComponent]
    });
    fixture = TestBed.createComponent(CartCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
