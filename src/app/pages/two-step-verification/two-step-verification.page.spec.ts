import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoStepVerificationPage } from './two-step-verification.page';

describe('TwoStepVerificationPage', () => {
  let component: TwoStepVerificationPage;
  let fixture: ComponentFixture<TwoStepVerificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoStepVerificationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoStepVerificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
