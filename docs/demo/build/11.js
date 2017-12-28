webpackJsonp([11],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsettingsPageModule", function() { return ChatsettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatsettings__ = __webpack_require__(301);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatsettingsPageModule = (function () {
    function ChatsettingsPageModule() {
    }
    ChatsettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chatsettings__["a" /* ChatsettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chatsettings__["a" /* ChatsettingsPage */]),
            ],
        })
    ], ChatsettingsPageModule);
    return ChatsettingsPageModule;
}());

//# sourceMappingURL=chatsettings.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsettingsPage; });
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
 * Generated class for the ChatsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatsettingsPage = (function () {
    function ChatsettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatsettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsettingsPage');
    };
    ChatsettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatsettings',template:/*ion-inline-start:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\chatsettings\chatsettings.html"*/'<!--\n  Generated template for the ChatsettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="whatsapp">\n    <ion-title>Chats</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n      <ion-note item-start padding color="whatsappalt">\n        Chat settings\n      </ion-note>\n      <ion-item>\n        <ion-checkbox item-end color="whatsapp" checked="false"></ion-checkbox>\n        <ion-label>\n           Enter is send\n          <p>Enter key will add a new line</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n           Font size: Small\n          <p>Font size for chat screen</p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n           Wallpaper\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n           Chat backup\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n           Chat history\n        </ion-label>\n      </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\chatsettings\chatsettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatsettingsPage);
    return ChatsettingsPage;
}());

//# sourceMappingURL=chatsettings.js.map

/***/ })

});
//# sourceMappingURL=11.js.map