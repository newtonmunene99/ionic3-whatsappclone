import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { CallsPopoverComponent } from "src/app/components/calls-popover/calls-popover.component";

@Component({
  selector: "app-calls",
  templateUrl: "./calls.page.html",
  styleUrls: ["./calls.page.scss"]
})
export class CallsPage implements OnInit {
  calls: Array<any> = Array(10);
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CallsPopoverComponent,
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
