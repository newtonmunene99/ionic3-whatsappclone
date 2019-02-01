import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareStatusWithPage } from './share-status-with.page';

describe('ShareStatusWithPage', () => {
  let component: ShareStatusWithPage;
  let fixture: ComponentFixture<ShareStatusWithPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareStatusWithPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareStatusWithPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
