import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundCComponent } from './page-not-found-c.component';

describe('PageNotFoundCComponent', () => {
  let component: PageNotFoundCComponent;
  let fixture: ComponentFixture<PageNotFoundCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundCComponent]
    });
    fixture = TestBed.createComponent(PageNotFoundCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
