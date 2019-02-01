import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPrivacyPage } from './status-privacy.page';

describe('StatusPrivacyPage', () => {
  let component: StatusPrivacyPage;
  let fixture: ComponentFixture<StatusPrivacyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPrivacyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPrivacyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
