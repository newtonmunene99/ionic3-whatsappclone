import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { PrivacyPage } from "./privacy.page";

const routes: Routes = [
  {
    path: "",
    component: PrivacyPage
  },
  {
    path: "status-privacy",
    loadChildren:
      "../status-privacy/status-privacy.module#StatusPrivacyPageModule"
  },
  {
    path: "live-location",
    loadChildren: "../live-location/live-location.module#LiveLocationPageModule"
  },
  {
    path: "blocked-contacts",
    loadChildren:
      "../blocked-contacts/blocked-contacts.module#BlockedContactsPageModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivacyPage]
})
export class PrivacyPageModule {}
