import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  {
    path: "contacts",
    loadChildren: "./pages/contacts/contacts.module#ContactsPageModule"
  },
  { path: "chat", loadChildren: "./pages/chat/chat.module#ChatPageModule" },
  {
    path: "user-profile",
    loadChildren:
      "./pages/user-profile/user-profile.module#UserProfilePageModule"
  },
  {
    path: "settings",
    loadChildren: "./pages/settings/settings.module#SettingsPageModule"
  },
  {
    path: "chat-backup",
    loadChildren: "./pages/chat-backup/chat-backup.module#ChatBackupPageModule"
  },
  {
    path: "chat-history",
    loadChildren:
      "./pages/chat-history/chat-history.module#ChatHistoryPageModule"
  },

  {
    path: "network-usage",
    loadChildren:
      "./pages/network-usage/network-usage.module#NetworkUsagePageModule"
  },
  {
    path: "storage-usage",
    loadChildren:
      "./pages/storage-usage/storage-usage.module#StorageUsagePageModule"
  },

  {
    path: "app-info",
    loadChildren: "./pages/app-info/app-info.module#AppInfoPageModule"
  },
  {
    path: "contact-us",
    loadChildren: "./pages/contact-us/contact-us.module#ContactUsPageModule"
  },
  { path: "about", loadChildren: "./pages/about/about.module#AboutPageModule" },
  {
    path: "my-profile-photo",
    loadChildren:
      "./pages/my-profile-photo/my-profile-photo.module#MyProfilePhotoPageModule"
  },
  {
    path: "user-profile-photo",
    loadChildren:
      "./pages/user-profile-photo/user-profile-photo.module#UserProfilePhotoPageModule"
  },
  { path: "media", loadChildren: "./pages/media/media.module#MediaPageModule" }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
