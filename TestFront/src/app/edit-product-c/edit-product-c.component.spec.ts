import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCComponent } from './edit-product-c.component';

describe('EditProductCComponent', () => {
  let component: EditProductCComponent;
  let fixture: ComponentFixture<EditProductCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProductCComponent]
    });
    fixture = TestBed.createComponent(EditProductCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
