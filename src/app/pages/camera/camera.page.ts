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
    camera: "front",
    tapPhoto: false,
    previewDrag: false,
    toBack: true,
    alpha: 1
  };
  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85
  };
  picture: any;
  flashModes: Array<any> = [];
  currentFlashMode: any;
  focusModes: Array<any> = [];
  constructor(private cameraPreview: CameraPreview) {}

  ngOnInit() {
    // start camera
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      () => {
        this.cameraPreview.show();
        this.cameraPreview
          .getFlashMode()
          .then(mode => {
            this.currentFlashMode = mode;
            console.log(mode);
          })
          .catch(err => {
            console.error(err);
            this.currentFlashMode = "off";
          });

        this.getFlashModes();
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
    this.cameraPreview
      .switchCamera()
      .then(() => {
        this.cameraPreview
          .getFlashMode()
          .then(mode => {
            this.currentFlashMode = mode;
          })
          .catch(err => {
            console.error(err);
            this.currentFlashMode = "off";
          });
        this.getFlashModes();
      })
      .catch(err => {
        console.error(err);
      });
  }

  getFlashModes() {
    this.cameraPreview
      .getSupportedFlashModes()
      .then(modes => {
        console.log(modes);
        this.flashModes = modes;
      })
      .catch(err => {
        console.error(err);
      });
  }
  switchFlash() {
    this.cameraPreview
      .getFlashMode()
      .then(mode => {
        if (
          this.flashModes.indexOf(mode) === 0 &&
          this.flashModes.length <= 1
        ) {
          this.cameraPreview.setFlashMode(mode).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = mode;
        } else if (
          this.flashModes.indexOf(mode) === 0 &&
          this.flashModes.length >= 2
        ) {
          this.cameraPreview.setFlashMode(this.flashModes[1]).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = this.flashModes[1];
        } else if (
          this.flashModes.indexOf(mode) === 1 &&
          this.flashModes.length >= 3
        ) {
          this.cameraPreview.setFlashMode(this.flashModes[2]).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = this.flashModes[2];
        } else if (
          this.flashModes.indexOf(mode) === 2 &&
          this.flashModes.length >= 4
        ) {
          this.cameraPreview.setFlashMode(this.flashModes[3]).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = this.flashModes[3];
        } else {
          this.cameraPreview.setFlashMode(this.flashModes[0]).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = this.flashModes[0];
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  switchFocus() {
    this.cameraPreview
      .getFocusMode()
      .then(mode => {
        console.log(mode);
      })
      .catch(err => {
        console.error(err);
      });
  }
  getFocusModes() {
    this.cameraPreview
      .getSupportedFocusModes()
      .then(modes => {
        console.log(modes);
        this.focusModes = modes;
      })
      .catch(err => {
        console.error(err);
      });
  }

  ionViewWillLeave() {
    this.cameraPreview.hide();
  }
  ionViewDidLeave() {
    this.cameraPreview.stopCamera();
  }
}
