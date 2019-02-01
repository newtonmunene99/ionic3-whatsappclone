import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-share-status-with",
  templateUrl: "./share-status-with.page.html",
  styleUrls: ["./share-status-with.page.scss"]
})
export class ShareStatusWithPage implements OnInit {
  contacts = Array(30).fill({
    name: "Finn",
    profilePicture: "../../../assets/images/one.png",
    included: false
  });
  allSelected = false;
  constructor() {}

  ngOnInit() {}

  selectAll() {
    if (!this.allSelected) {
      this.contacts.forEach(contact => (contact.included = true));
      this.allSelected = true;
    } else {
      this.contacts.forEach(contact => (contact.included = false));
      this.allSelected = false;
    }
  }
}
