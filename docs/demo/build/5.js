webpackJsonp([5],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifsettingsPageModule", function() { return NotifsettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifsettings__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotifsettingsPageModule = (function () {
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

/***/ 307:
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
var NotifsettingsPage = (function () {
    function NotifsettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotifsettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotifsettingsPage');
    };
    NotifsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notifsettings',template:/*ion-inline-start:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\notifsettings\notifsettings.html"*/'<!--\n  Generated template for the NotifsettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="whatsapp">\n    <ion-title>Notifications</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-checkbox item-end color="whatsapp" checked="true"></ion-checkbox>\n      <ion-label>\n        Conversation tones\n        <p>Play sounds for incoming and outgoing messages</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note item-start padding color="whatsappalt">\n      Message notifications\n    </ion-note>\n    <ion-item>\n      <ion-label>\n        Notification tone\n        <p>Default ringtone(Bongo)</p>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        Vibrate\n        <p>Default</p>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        Popup notification\n        <p>No popup</p>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        Light\n        <p>White</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note item-start padding color="whatsappalt">\n      Group notifications\n    </ion-note>\n    <ion-item>\n      <ion-label>\n        Notification tone\n        <p>Default ringtone(Bongo)</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>\n        Vibrate\n        <p>Default</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>\n        Popup notification\n        <p>No popup</p>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        Light\n        <p>White</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-note item-start padding color="whatsappalt">\n      Call notifications\n    </ion-note>\n    <ion-item>\n      <ion-label>\n        Ringtone\n        <p>Default ringtone(Bongo)</p>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label>\n        Vibrate\n        <p>Default</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\notifsettings\notifsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NotifsettingsPage);
    return NotifsettingsPage;
}());

//# sourceMappingURL=notifsettings.js.map

/***/ })

});
//# sourceMappingURL=5.js.map