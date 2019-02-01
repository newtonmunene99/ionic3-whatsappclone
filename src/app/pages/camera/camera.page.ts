import { Component, OnInit } from "@angular/core";
import {
  CameraPreview,
  CameraPreviewPictureOptions,
  CameraPreviewOptions,
  CameraPreviewDimensions
} from "@ionic-native/camera-preview/ngx";

@Component({
  selector: "app-camera",
  templateUrl: "./camera.page.html",
  styleUrls: ["./camera.page.scss"]
})
export class CameraPage implements OnInit {
  // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: "rear",
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1
  };
  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  };
  picture: any;
  constructor(private cameraPreview: CameraPreview) {}

  ngOnInit() {
    // start camera
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  takePhoto() {
    this.cameraPreview.takePicture(this.pictureOpts).then(
      imageData => {
        this.picture = "data:image/jpeg;base64," + imageData;
      },
      err => {
        console.log(err);
        this.picture = "../../../assets/images/one.png";
      }
    );
  }

  switchCamera() {
    this.cameraPreview.switchCamera();
  }

  ionViewWillLeave() {
    this.cameraPreview.stopCamera();
  }
}
