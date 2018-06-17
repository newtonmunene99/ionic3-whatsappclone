webpackJsonp([4],{

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(707);
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

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profilepop_profilepop__ = __webpack_require__(340);
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
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\profile\profile.html"*/'<!--\n\n  Generated template for the ProfilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header [class.opaque]="showToolbar">\n\n\n\n  <ion-navbar color="whatsapp">\n\n    <ion-title [hidden]="!showToolbar">Finn</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content (ionScroll)="onScroll($event)">\n\n  <div class="cover header-md">\n\n    <img class="cover" src="../../assets/imgs/prof.jpg" alt="profilename">\n\n    <h1>Finn</h1>\n\n  </div>\n\n  <ion-list no-border margin-top>\n\n    <ion-item-group>\n\n      <ion-item>\n\n        <ion-toggle color="whatsappalt" checked="false"></ion-toggle>\n\n        <ion-label>\n\n          Mute notifications\n\n        </ion-label>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>\n\n          Custom notifications\n\n        </ion-label>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>\n\n          Encryption\n\n          <p>Messages to this chat and calls are secured with end-to-end encryption. Tap to verify</p>\n\n        </ion-label>\n\n      \n\n        <ion-icon name=\'lock\' color="whatsappalt" item-end></ion-icon>\n\n      </ion-item>\n\n\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n\n\n      <ion-list-header>\n\n        <ion-note item-start color="whatsappalt">\n\n           About and phone number\n\n        </ion-note>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-label>\n\n          Can\'t talk, WhatsUp only.\n\n        <p>20 April</p>\n\n        </ion-label>\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <ion-label>\n\n          +254 700 123456\n\n          <p>Mobile</p>\n\n        </ion-label>\n\n        <ion-icon name=\'md-text\' color="whatsappalt" item-end></ion-icon>\n\n        <ion-icon name=\'call\' color="whatsappalt" item-end></ion-icon>\n\n        <ion-icon name=\'videocam\' color="whatsappalt" item-end></ion-icon>\n\n      </ion-item>\n\n\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n      <ion-list-header>\n\n        <ion-note item-start color="whatsappalt">\n\n           Groups in common\n\n        </ion-note>\n\n      </ion-list-header>\n\n      <ion-item>\n\n        <ion-avatar item-start>\n\n          <img src="../../assets/imgs/one.png">\n\n        </ion-avatar>\n\n        <h2>Family Group</h2>\n\n        <p>Bro,Cousin John,Cuz Mel,Dad,Mum,Sis,Uncle Kev</p>\n\n      </ion-item>\n\n\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n\n\n      <ion-item>\n\n        <ion-label color="danger">\n\n          Block\n\n        </ion-label>\n\n        <ion-icon name=\'remove-circle\' color="danger" item-start></ion-icon>\n\n      </ion-item>\n\n\n\n      <ion-item-divider color="wapp-badge"></ion-item-divider>\n\n\n\n      <ion-item>\n\n        <ion-label color="danger">\n\n          Report spam\n\n        </ion-label>\n\n        <ion-icon name=\'thumbs-down\' color="danger" item-start></ion-icon>\n\n      </ion-item>\n\n    </ion-item-group>\n\n    \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map