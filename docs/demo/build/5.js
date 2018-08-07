webpackJsonp([5],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifsettingsPageModule", function() { return NotifsettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifsettings__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotifsettingsPageModule = /** @class */ (function () {
    function NotifsettingsPageModule() {
    }
    NotifsettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifsettings__["a" /* NotifsettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifsettings__["a" /* NotifsettingsPage */]),
            ],
        })
    ], NotifsettingsPageModule);
    return NotifsettingsPageModule;
}());

//# sourceMappingURL=notifsettings.module.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifsettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the NotifsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotifsettingsPage = /** @class */ (function () {
    function NotifsettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotifsettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifsettingsPage');
    };
    NotifsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifsettings',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\notifsettings\notifsettings.html"*/'<!--\n\n  Generated template for the NotifsettingsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="whatsapp">\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-checkbox item-end color="whatsapp" checked="true"></ion-checkbox>\n\n      <ion-label>\n\n        Conversation tones\n\n        <p>Play sounds for incoming and outgoing messages</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-note item-start padding color="whatsappalt">\n\n      Message notifications\n\n    </ion-note>\n\n    <ion-item>\n\n      <ion-label>\n\n        Notification tone\n\n        <p>Default ringtone(Bongo)</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>\n\n        Vibrate\n\n        <p>Default</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>\n\n        Popup notification\n\n        <p>No popup</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label>\n\n        Light\n\n        <p>White</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-note item-start padding color="whatsappalt">\n\n      Group notifications\n\n    </ion-note>\n\n    <ion-item>\n\n      <ion-label>\n\n        Notification tone\n\n        <p>Default ringtone(Bongo)</p>\n\n      </ion-label>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label>\n\n        Vibrate\n\n        <p>Default</p>\n\n      </ion-label>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label>\n\n        Popup notification\n\n        <p>No popup</p>\n\n      </ion-label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label>\n\n        Light\n\n        <p>White</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n    <ion-note item-start padding color="whatsappalt">\n\n      Call notifications\n\n    </ion-note>\n\n    <ion-item>\n\n      <ion-label>\n\n        Ringtone\n\n        <p>Default ringtone(Bongo)</p>\n\n      </ion-label>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label>\n\n        Vibrate\n\n        <p>Default</p>\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\notifsettings\notifsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotifsettingsPage);
    return NotifsettingsPage;
}());

//# sourceMappingURL=notifsettings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map