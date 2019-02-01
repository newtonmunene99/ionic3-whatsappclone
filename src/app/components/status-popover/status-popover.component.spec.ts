import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPopoverComponent } from './status-popover.component';

describe('StatusPopoverComponent', () => {
  let component: StatusPopoverComponent;
  let fixture: ComponentFixture<StatusPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
