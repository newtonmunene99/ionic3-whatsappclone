import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInfoPage } from './app-info.page';

describe('AppInfoPage', () => {
  let component: AppInfoPage;
  let fixture: ComponentFixture<AppInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
