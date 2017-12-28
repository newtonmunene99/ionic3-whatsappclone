webpackJsonp([4],{

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilepop_profilepop__ = __webpack_require__(197);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, ref, pop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ref = ref;
        this.pop = pop;
        this.showToolbar = false;
    }
    ProfilePage.prototype.onScroll = function ($event) {
        var scrollTop = $event.scrollTop;
        this.showToolbar = scrollTop >= 120;
        this.ref.detectChanges();
    };
    ProfilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_2__profilepop_profilepop__["a" /* ProfilepopPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header [class.opaque]="showToolbar">\n\n  <ion-navbar color="whatsapp">\n    <ion-title [hidden]="!showToolbar">Finn</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content (ionScroll)="onScroll($event)">\n  <div class="cover header-md">\n    <img class="cover" src="../../assets/imgs/prof.jpg" alt="profilename">\n    <h1>Finn</h1>\n  </div>\n  <ion-list no-border margin-top>\n    <ion-item-group>\n      <ion-item>\n        <ion-toggle color="whatsappalt" checked="false"></ion-toggle>\n        <ion-label>\n          Mute notifications\n        </ion-label>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>\n          Custom notifications\n        </ion-label>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>\n          Encryption\n          <p>Messages to this chat and calls are secured with end-to-end encryption. Tap to verify</p>\n        </ion-label>\n      \n        <ion-icon name=\'lock\' color="whatsappalt" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n      <ion-list-header>\n        <ion-note item-start color="whatsappalt">\n           About and phone number\n        </ion-note>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>\n          Can\'t talk, WhatsUp only.\n        <p>20 April</p>\n        </ion-label>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label>\n          +254 700 123456\n          <p>Mobile</p>\n        </ion-label>\n        <ion-icon name=\'md-text\' color="whatsappalt" item-end></ion-icon>\n        <ion-icon name=\'call\' color="whatsappalt" item-end></ion-icon>\n        <ion-icon name=\'videocam\' color="whatsappalt" item-end></ion-icon>\n      </ion-item>\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n      <ion-list-header>\n        <ion-note item-start color="whatsappalt">\n           Groups in common\n        </ion-note>\n      </ion-list-header>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/one.png">\n        </ion-avatar>\n        <h2>Family Group</h2>\n        <p>Bro,Cousin John,Cuz Mel,Dad,Mum,Sis,Uncle Kev</p>\n      </ion-item>\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n      <ion-item>\n        <ion-label color="danger">\n          Block\n        </ion-label>\n        <ion-icon name=\'remove-circle\' color="danger" item-start></ion-icon>\n      </ion-item>\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n      <ion-item>\n        <ion-label color="danger">\n          Report spam\n        </ion-label>\n        <ion-icon name=\'thumbs-down\' color="danger" item-start></ion-icon>\n      </ion-item>\n    </ion-item-group>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map