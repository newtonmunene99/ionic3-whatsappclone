import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedContactsPage } from './blocked-contacts.page';

describe('BlockedContactsPage', () => {
  let component: BlockedContactsPage;
  let fixture: ComponentFixture<BlockedContactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedContactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedContactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
