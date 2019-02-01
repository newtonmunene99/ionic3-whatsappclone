import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPage } from './media.page';

describe('MediaPage', () => {
  let component: MediaPage;
  let fixture: ComponentFixture<MediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
