import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupCComponent } from './signup-c.component';

describe('SignupCComponent', () => {
  let component: SignupCComponent;
  let fixture: ComponentFixture<SignupCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupCComponent]
    });
    fixture = TestBed.createComponent(SignupCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
