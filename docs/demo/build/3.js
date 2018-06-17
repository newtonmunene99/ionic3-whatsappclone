webpackJsonp([3],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmessagePageModule", function() { return SendmessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sendmessage__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SendmessagePageModule = (function () {
    function SendmessagePageModule() {
    }
    SendmessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sendmessage__["a" /* SendmessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sendmessage__["a" /* SendmessagePage */]),
            ],
        })
    ], SendmessagePageModule);
    return SendmessagePageModule;
}());

//# sourceMappingURL=sendmessage.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendmessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatpop_chatpop__ = __webpack_require__(338);
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
 * Generated class for the SendmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendmessagePage = (function () {
    function SendmessagePage(navCtrl, navParams, pop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pop = pop;
    }
    SendmessagePage.prototype.presentPopover = function (myEvent) {
        var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_2__chatpop_chatpop__["a" /* ChatpopPage */]);
        popover.present({
            ev: myEvent
        });
    };
    SendmessagePage.prototype.showProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    SendmessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SendmessagePage');
    };
    SendmessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sendmessage',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\sendmessage\sendmessage.html"*/'<!--\n\n  Generated template for the SendmessagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="whatsapp">\n\n    <ion-item class="head" (click)="showProfile()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Finn</h2>\n\n      <p>today at 11:53 AM</p>\n\n    </ion-item>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal">\n\n        <ion-icon name="videocam"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal">\n\n        <ion-icon name="call"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col col-9 class="message other_message">\n\n        <span>Talk to me</span>\n\n        <div class="time">8:08am</div>\n\n      </ion-col>\n\n\n\n      <ion-col offset-3 col-9 class="message my_message">\n\n        <span>I\'ll tell you about it later. How was you day?</span>\n\n        <div class="time">9:00am</div>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n\n\n<ion-footer ion-fixed>\n\n  <ion-toolbar class="no-border" color="white">\n\n    <ion-item class="footer">\n\n      <button ion-button icon-only item-left color="whte">\n\n        <ion-icon name="happy"></ion-icon>\n\n      </button>\n\n      <ion-input [(ngModel)]="newmessage" placeholder="Type a message"></ion-input>\n\n      <button ion-button icon-only item-right color="whte">\n\n        <ion-icon name="link"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only item-right color="whte">\n\n        <ion-icon name="md-camera"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-buttons end>\n\n      <button ion-fab color="whatsapp">\n\n        <ion-icon name="mic"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\sendmessage\sendmessage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], SendmessagePage);
    return SendmessagePage;
}());

//# sourceMappingURL=sendmessage.js.map

/***/ })

});
//# sourceMappingURL=3.js.map