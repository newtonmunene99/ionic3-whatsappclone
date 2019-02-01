import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { StatusPopoverComponent } from "src/app/components/status-popover/status-popover.component";

@Component({
  selector: "app-status",
  templateUrl: "./status.page.html",
  styleUrls: ["./status.page.scss"]
})
export class StatusPage implements OnInit {
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: StatusPopoverComponent,
      event: ev,
      translucent: false
    });
    popover.onDidDismiss().then(page => {
      if (page.data) {
        console.log(page);
      }
    });
    return await popover.present();
  }
}
