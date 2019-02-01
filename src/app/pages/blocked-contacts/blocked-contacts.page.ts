import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked-contacts',
  templateUrl: './blocked-contacts.page.html',
  styleUrls: ['./blocked-contacts.page.scss'],
})
export class BlockedContactsPage implements OnInit {
 contacts: Array<any> = Array(10).fill({
    name: "Uncle Ben",
    number:
      "+254 720 123456",
    profilePicture: "../../../assets/images/one.png"
   
  });
  constructor() { }

  ngOnInit() {
  }

}
