webpackJsonp([13],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CameraPageModule = /** @class */ (function () {
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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_preview__ = __webpack_require__(198);
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
var CameraPage = /** @class */ (function () {
    function CameraPage(navCtrl, navParams, cameraPreview) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cameraPreview = cameraPreview;
        this.flashModes = [];
        this.focusModes = [];
        this.cameraPreviewOpts = {
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
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    CameraPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    CameraPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // start camera
        this.cameraPreview.startCamera(this.cameraPreviewOpts).then(function () {
            _this.cameraPreview.show();
            _this.cameraPreview
                .getFlashMode()
                .then(function (mode) {
                _this.currentFlashMode = mode;
                console.log(mode);
            })
                .catch(function (err) {
                console.error(err);
                _this.currentFlashMode = 'off';
            });
            _this.getFlashModes();
        }, function (err) {
            console.error(err);
        });
    };
    CameraPage.prototype.switchCamera = function () {
        var _this = this;
        this.cameraPreview
            .switchCamera()
            .then(function () {
            _this.cameraPreview
                .getFlashMode()
                .then(function (mode) {
                _this.currentFlashMode = mode;
            })
                .catch(function (err) {
                console.error(err);
                _this.currentFlashMode = 'off';
            });
            _this.getFlashModes();
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    CameraPage.prototype.getFlashModes = function () {
        var _this = this;
        this.cameraPreview
            .getSupportedFlashModes()
            .then(function (modes) {
            console.log(modes);
            _this.flashModes = modes;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    CameraPage.prototype.switchFlash = function () {
        var _this = this;
        this.cameraPreview
            .getFlashMode()
            .then(function (mode) {
            if (_this.flashModes.indexOf(mode) == 0 && _this.flashModes.length <= 1) {
                _this.cameraPreview.setFlashMode(mode).catch(function (err) {
                    console.error(err);
                });
                _this.currentFlashMode = mode;
            }
            else if (_this.flashModes.indexOf(mode) == 0 &&
                _this.flashModes.length >= 2) {
                _this.cameraPreview.setFlashMode(_this.flashModes[1]).catch(function (err) {
                    console.error(err);
                });
                _this.currentFlashMode = _this.flashModes[1];
            }
            else if (_this.flashModes.indexOf(mode) == 1 &&
                _this.flashModes.length >= 3) {
                _this.cameraPreview.setFlashMode(_this.flashModes[2]).catch(function (err) {
                    console.error(err);
                });
                _this.currentFlashMode = _this.flashModes[2];
            }
            else if (_this.flashModes.indexOf(mode) == 2 &&
                _this.flashModes.length >= 4) {
                _this.cameraPreview.setFlashMode(_this.flashModes[3]).catch(function (err) {
                    console.error(err);
                });
                _this.currentFlashMode = _this.flashModes[3];
            }
            else {
                _this.cameraPreview.setFlashMode(_this.flashModes[0]).catch(function (err) {
                    console.error(err);
                });
                _this.currentFlashMode = _this.flashModes[0];
            }
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    CameraPage.prototype.switchFocus = function () {
        this.cameraPreview
            .getFocusMode()
            .then(function (mode) {
            console.log(mode);
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    CameraPage.prototype.getFocusModes = function () {
        var _this = this;
        this.cameraPreview
            .getSupportedFocusModes()
            .then(function (modes) {
            console.log(modes);
            _this.focusModes = modes;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    CameraPage.prototype.ionViewWillLeave = function () {
        this.cameraPreview.hide();
        this.tabBarElement.style.display = 'flex';
    };
    CameraPage.prototype.ionViewDidLeave = function () {
        this.cameraPreview.stopCamera();
    };
    CameraPage.prototype.takeMeBack = function () {
        this.navCtrl.parent.select(1);
        // this.navCtrl.setRoot('TabsPage');
    };
    CameraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-camera',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\camera\camera.html"*/'<!--\n  Generated template for the CameraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="takeMeBack()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="footer">\n    <div class="left ">\n      <button class="noborder" ion-button icon-only round (click)="switchFlash()">\n        <ion-icon name="flash" *ngIf="currentFlashMode === \'on\'"></ion-icon>\n        <ion-icon name="flash-off" *ngIf="currentFlashMode === \'off\'|| !currentFlashMode"></ion-icon>\n        <ion-icon name="flashlight" *ngIf="currentFlashMode === \'torch\'"></ion-icon>\n        <ion-icon name="swap" *ngIf="currentFlashMode === \'auto\'"></ion-icon>\n      </button>\n    </div>\n    <div class="center ">\n      <button class="withborder" ion-button icon-only round>\n        <ion-icon name="radio-button-off"></ion-icon>\n      </button>\n    </div>\n    <div class="right ">\n      <button class="noborder" ion-button icon-only round (click)="switchCamera()">\n        <ion-icon name="reverse-camera"></ion-icon>\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\camera\camera.html"*/
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