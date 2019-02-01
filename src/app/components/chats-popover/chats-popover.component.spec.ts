import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsPopoverComponent } from './chats-popover.component';

describe('ChatsPopoverComponent', () => {
  let component: ChatsPopoverComponent;
  let fixture: ComponentFixture<ChatsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
