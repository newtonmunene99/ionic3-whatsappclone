import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-chat-popover",
  templateUrl: "./chat-popover.component.html",
  styleUrls: ["./chat-popover.component.scss"]
})
export class ChatPopoverComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  click(page: string) {
    this.popoverController.dismiss(page);
  }
}
