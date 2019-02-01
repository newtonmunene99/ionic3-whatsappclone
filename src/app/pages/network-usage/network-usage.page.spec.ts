import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkUsagePage } from './network-usage.page';

describe('NetworkUsagePage', () => {
  let component: NetworkUsagePage;
  let fixture: ComponentFixture<NetworkUsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworkUsagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
