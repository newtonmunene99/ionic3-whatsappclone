import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsPopoverComponent } from './contacts-popover.component';

describe('ContactsPopoverComponent', () => {
  let component: ContactsPopoverComponent;
  let fixture: ComponentFixture<ContactsPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
