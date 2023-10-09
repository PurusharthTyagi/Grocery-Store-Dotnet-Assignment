import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductCComponent } from './add-product-c.component';

describe('AddProductCComponent', () => {
  let component: AddProductCComponent;
  let fixture: ComponentFixture<AddProductCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductCComponent]
    });
    fixture = TestBed.createComponent(AddProductCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
