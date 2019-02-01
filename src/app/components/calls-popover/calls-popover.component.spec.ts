import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallsPopoverComponent } from './calls-popover.component';

describe('CallsPopoverComponent', () => {
  let component: CallsPopoverComponent;
  let fixture: ComponentFixture<CallsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
