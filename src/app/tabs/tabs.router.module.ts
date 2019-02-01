import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "camera",
        children: [
          {
            path: "",
            loadChildren: "../pages/camera/camera.module#CameraPageModule"
          }
        ]
      },
      {
        path: "chats",
        children: [
          {
            path: "",
            loadChildren: "../pages/chats/chats.module#ChatsPageModule"
          }
        ]
      },
      {
        path: "status",
        children: [
          {
            path: "",
            loadChildren: "../pages/status/status.module#StatusPageModule"
          }
        ]
      },
      {
        path: "calls",
        children: [
          {
            path: "",
            loadChildren: "../pages/calls/calls.module#CallsPageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "/tabs/chats",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "/tabs/chats",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
