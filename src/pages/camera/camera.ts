import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CameraPreview, CameraPreviewOptions } from '@ionic-native/camera-preview';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private cameraPreview: CameraPreview) {
    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'front',
      tapPhoto: false,
      tapToFocus: true,
      previewDrag: true,
      toBack: false,
      alpha: 0
    };

    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts);
  }

  ionViewDidLoad() {
    this.cameraPreview.show();
  }

  ionViewDidLeave() {
    
  }
}
