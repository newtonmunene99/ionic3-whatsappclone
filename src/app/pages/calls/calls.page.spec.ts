import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsPage } from './calls.page';

describe('CallsPage', () => {
  let component: CallsPage;
  let fixture: ComponentFixture<CallsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
