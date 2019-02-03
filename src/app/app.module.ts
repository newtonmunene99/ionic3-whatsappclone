import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChatsPopoverComponent } from "./components/chats-popover/chats-popover.component";
import { StatusPopoverComponent } from "./components/status-popover/status-popover.component";
import { CallsPopoverComponent } from "./components/calls-popover/calls-popover.component";
import { ProfileModalComponent } from "./components/profile-modal/profile-modal.component";
import { ContactsPopoverComponent } from "./components/contacts-popover/contacts-popover.component";

@NgModule({
  declarations: [
    AppComponent,
    ChatsPopoverComponent,
    StatusPopoverComponent,
    CallsPopoverComponent,
    ProfileModalComponent,
    ContactsPopoverComponent
  ],
  entryComponents: [
    ChatsPopoverComponent,
    StatusPopoverComponent,
    CallsPopoverComponent,
    ProfileModalComponent,
    ContactsPopoverComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
