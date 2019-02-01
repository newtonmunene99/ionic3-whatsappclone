import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePhotoPage } from './user-profile-photo.page';

describe('UserProfilePhotoPage', () => {
  let component: UserProfilePhotoPage;
  let fixture: ComponentFixture<UserProfilePhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilePhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
