webpackJsonp([12],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function() { return ChatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chats__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatsPageModule = (function () {
    function ChatsPageModule() {
    }
    ChatsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chats__["a" /* ChatsPage */]),
            ],
        })
    ], ChatsPageModule);
    return ChatsPageModule;
}());

//# sourceMappingURL=chats.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepop_homepop__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(149);
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
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatsPage = (function () {
    function ChatsPage(navCtrl, navParams, pop, app, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pop = pop;
        this.app = app;
        this.statusBar = statusBar;
        // this.statusBar.overlaysWebView(false);
        this.statusBar.backgroundColorByHexString('#075e54');
    }
    ChatsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_2__homepop_homepop__["a" /* HomepopPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ChatsPage.prototype.initChat = function () {
        //this.navCtrl.push('SendmessagePage');
        this.app.getRootNav().push('SendmessagePage');
    };
    ChatsPage.prototype.contacts = function () {
        this.app.getRootNav().push('ContactsPage');
    };
    ChatsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatsPage');
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\chats\chats.html"*/'<!--\n\n  Generated template for the ChatsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="whatsapp">\n\n    <ion-title>WhatsUp</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Finn</h2>\n\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Finn</h2>\n\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Finn</h2>\n\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Finn</h2>\n\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Finn</h2>\n\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n\n      <ion-note item-end>3:43 pm</ion-note>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="wapp-light" (click)="contacts()">\n\n      <ion-icon name="md-text"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\chats\chats.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_app_app__["a" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ })

});
//# sourceMappingURL=12.js.map