import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCComponent } from './product-details-c.component';

describe('ProductDetailsCComponent', () => {
  let component: ProductDetailsCComponent;
  let fixture: ComponentFixture<ProductDetailsCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsCComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
