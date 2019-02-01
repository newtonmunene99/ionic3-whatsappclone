import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideStatusFromPage } from './hide-status-from.page';

describe('HideStatusFromPage', () => {
  let component: HideStatusFromPage;
  let fixture: ComponentFixture<HideStatusFromPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideStatusFromPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideStatusFromPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
