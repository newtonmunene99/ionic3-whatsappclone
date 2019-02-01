import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStoragePage } from './data-storage.page';

describe('DataStoragePage', () => {
  let component: DataStoragePage;
  let fixture: ComponentFixture<DataStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStoragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
