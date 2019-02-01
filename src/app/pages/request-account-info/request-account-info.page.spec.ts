import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAccountInfoPage } from './request-account-info.page';

describe('RequestAccountInfoPage', () => {
  let component: RequestAccountInfoPage;
  let fixture: ComponentFixture<RequestAccountInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAccountInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAccountInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
