import { Component, OnInit, Input } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-profile-modal",
  templateUrl: "./profile-modal.component.html",
  styleUrls: ["./profile-modal.component.scss"]
})
export class ProfileModalComponent implements OnInit {
  @Input() user: any;

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {
    console.log("This profile belongs to " + this.user);
  }

  click(page: string) {
    this.popoverController.dismiss(page);
  }
}
