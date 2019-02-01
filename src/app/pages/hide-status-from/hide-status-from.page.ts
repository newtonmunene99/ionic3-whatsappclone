import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hide-status-from",
  templateUrl: "./hide-status-from.page.html",
  styleUrls: ["./hide-status-from.page.scss"]
})
export class HideStatusFromPage implements OnInit {
  contacts = Array(30).fill({
    name: "Finn",
    profilePicture: "../../../assets/images/one.png",
    excluded: false
  });
  allSelected = false;
  constructor() {}

  ngOnInit() {}

  selectAll() {
    if (!this.allSelected) {
      this.contacts.forEach(contact => (contact.excluded = true));
      this.allSelected = true;
    } else {
      this.contacts.forEach(contact => (contact.excluded = false));
      this.allSelected = false;
    }
  }
}
