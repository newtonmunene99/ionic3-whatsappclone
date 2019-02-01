import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageUsagePage } from './storage-usage.page';

describe('StorageUsagePage', () => {
  let component: StorageUsagePage;
  let fixture: ComponentFixture<StorageUsagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageUsagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageUsagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
