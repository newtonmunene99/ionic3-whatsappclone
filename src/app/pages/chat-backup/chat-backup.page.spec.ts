import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBackupPage } from './chat-backup.page';

describe('ChatBackupPage', () => {
  let component: ChatBackupPage;
  let fixture: ComponentFixture<ChatBackupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBackupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBackupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
