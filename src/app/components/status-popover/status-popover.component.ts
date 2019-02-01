import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-status-popover",
  templateUrl: "./status-popover.component.html",
  styleUrls: ["./status-popover.component.scss"]
})
export class StatusPopoverComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}
  click(page: String) {
    this.popoverController.dismiss(page);
  }
}
