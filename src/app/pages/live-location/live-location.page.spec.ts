import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveLocationPage } from './live-location.page';

describe('LiveLocationPage', () => {
  let component: LiveLocationPage;
  let fixture: ComponentFixture<LiveLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
