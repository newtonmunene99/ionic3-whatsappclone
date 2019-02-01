import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeNumberPage } from './change-number.page';

describe('ChangeNumberPage', () => {
  let component: ChangeNumberPage;
  let fixture: ComponentFixture<ChangeNumberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeNumberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
