import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-contacts-popover",
  templateUrl: "./contacts-popover.component.html",
  styleUrls: ["./contacts-popover.component.scss"]
})
export class ContactsPopoverComponent implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  click(page: string) {
    this.popoverController.dismiss(page);
  }
}
