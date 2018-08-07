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
    public navParams: NavParams , private cameraPreview: CameraPreview
  ) {
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }
  ionViewDidLoad() {
    // start camera
    this.cameraPreview.startCamera(this.cameraPreviewOpts).then(
      res => {

        console.log(res);
      },
      err => {
        console.error(err);
      }
    );
  }
  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

   ionViewDidEnter() {
    this.cameraPreview.show();
    this.switchFocus();
    this.getFocusModes();
    this.getFlashModes();
  }

   switchCamera() {
    this.cameraPreview
      .switchCamera()
      .then(() => {
        this.getFlashModes();
        this.getFocusModes();
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
        console.log(mode);
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

  ionViewWillUnload() {
    this.cameraPreview.stopCamera();
  }
  ionViewWillLeave() {
    this.cameraPreview.hide();
    this.tabBarElement.style.display = 'flex';
  }
  takeMeBack() {
     this.navCtrl.parent.select(0);
    // this.navCtrl.setRoot('TabsPage');
  }
}
