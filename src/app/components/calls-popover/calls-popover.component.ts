import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-calls-popover",
  templateUrl: "./calls-popover.component.html",
  styleUrls: ["./calls-popover.component.scss"]
})
export class CallsPopoverComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}
  click(page: String) {
    this.popoverController.dismiss(page);
  }
}
