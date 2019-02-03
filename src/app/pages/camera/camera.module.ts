import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { CameraPage } from "./camera.page";

import { CameraPreview } from "@ionic-native/camera-preview/ngx";
import { PhotoLibrary } from "@ionic-native/photo-library/ngx";

import { SerializeurlPipe } from "../../pipes/serializeurl.pipe";

const routes: Routes = [
  {
    path: "",
    component: CameraPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CameraPage, SerializeurlPipe],
  providers: [CameraPreview, PhotoLibrary]
})
export class CameraPageModule {}
