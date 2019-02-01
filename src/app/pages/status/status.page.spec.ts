import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPage } from './status.page';

describe('StatusPage', () => {
  let component: StatusPage;
  let fixture: ComponentFixture<StatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
