import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfilePhotoPage } from './my-profile-photo.page';

describe('MyProfilePhotoPage', () => {
  let component: MyProfilePhotoPage;
  let fixture: ComponentFixture<MyProfilePhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfilePhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
