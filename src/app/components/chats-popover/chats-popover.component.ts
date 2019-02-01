import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-chats-popover",
  templateUrl: "./chats-popover.component.html",
  styleUrls: ["./chats-popover.component.scss"]
})
export class ChatsPopoverComponent implements OnInit {
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  click(page: string) {
    this.popoverController.dismiss(page);
  }
}
