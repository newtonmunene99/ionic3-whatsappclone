webpackJsonp([13],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(698);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CameraPageModule = (function () {
    function CameraPageModule() {
    }
    CameraPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__camera__["a" /* CameraPage */]),
            ],
        })
    ], CameraPageModule);
    return CameraPageModule;
}());

//# sourceMappingURL=camera.module.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CameraPage = (function () {
    function CameraPage(navCtrl, navParams, cameraPreview) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        var cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'front',
            tapPhoto: false,
            tapToFocus: true,
            previewDrag: false,
            toBack: true
        };
        // start camera
        this.cameraPreview.startCamera(cameraPreviewOpts).then(function (res) {
            _this.cameraPreview.setFocusMode('auto');
            console.log(res);
        }, function (err) {
            console.error(err);
        });
    }
    CameraPage.prototype.ionViewDidLoad = function () {
        this.cameraPreview.show();
    };
    CameraPage.prototype.switchCamera = function () {
        this.cameraPreview.switchCamera();
    };
    CameraPage.prototype.takePhoto = function () {
        var _this = this;
        var pictureOpts = {
            width: 1280,
            height: 1280,
            quality: 85
        };
        this.cameraPreview.takePicture(pictureOpts).then(function (imageData) {
            _this.picture = 'data:image/jpeg;base64,' + imageData;
            console.log(imageData);
        }, function (err) {
            console.log(err);
            _this.picture = 'assets/img/test.jpg';
        });
    };
    CameraPage.prototype.ionViewDidLeave = function () {
        this.cameraPreview.stopCamera();
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\camera\camera.html"*/'<!--\n\n  Generated template for the CameraPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>camera</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <button ion-button (click)="changeCamera()" style="z-index: 1;">\n\n    change CAMERA\n\n  </button>\n\n  <button ion-button (click)="hideCamera()">\n\n    change CAMERA\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\camera\camera.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__["a" /* CameraPreview */]])
    ], CameraPage);
    return CameraPage;
}());

//# sourceMappingURL=camera.js.map

/***/ })

});
//# sourceMappingURL=13.js.map