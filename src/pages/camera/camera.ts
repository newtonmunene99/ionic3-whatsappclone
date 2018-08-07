import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  CameraPreview,
  CameraPreviewOptions
} from '@ionic-native/camera-preview';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  tabBarElement: any;
  picture: any;
  flashModes: Array<any> = [];
  currentFlashMode: any;
  focusModes: Array<any> = [];
  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'front',
    toBack: true,
    tapPhoto: false,
    tapToFocus: true,
    previewDrag: false
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private cameraPreview: CameraPreview
  ) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewDidEnter() {
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
            this.currentFlashMode = 'off';
          });

        this.getFlashModes();
      },
      err => {
        console.error(err);
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
            this.currentFlashMode = 'off';
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
        if (this.flashModes.indexOf(mode) == 0 && this.flashModes.length <= 1) {
          this.cameraPreview.setFlashMode(mode).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = mode;
        } else if (
          this.flashModes.indexOf(mode) == 0 &&
          this.flashModes.length >= 2
        ) {
          this.cameraPreview.setFlashMode(this.flashModes[1]).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = this.flashModes[1];
        } else if (
          this.flashModes.indexOf(mode) == 1 &&
          this.flashModes.length >= 3
        ) {
          this.cameraPreview.setFlashMode(this.flashModes[2]).catch(err => {
            console.error(err);
          });
          this.currentFlashMode = this.flashModes[2];
        } else if (
          this.flashModes.indexOf(mode) == 2 &&
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
    this.tabBarElement.style.display = 'flex';
  }
  ionViewDidLeave() {
    this.cameraPreview.stopCamera();
  }
  takeMeBack() {
    this.navCtrl.parent.select(1);
    // this.navCtrl.setRoot('TabsPage');
  }
}
