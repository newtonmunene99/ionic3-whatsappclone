import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPopoverComponent } from './chat-popover.component';

describe('ChatPopoverComponent', () => {
  let component: ChatPopoverComponent;
  let fixture: ComponentFixture<ChatPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
