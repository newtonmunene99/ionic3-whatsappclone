webpackJsonp([6],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function() { return MyprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myprofile__ = __webpack_require__(704);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyprofilePageModule = (function () {
    function MyprofilePageModule() {
    }
    MyprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myprofile__["a" /* MyprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myprofile__["a" /* MyprofilePage */]),
            ],
        })
    ], MyprofilePageModule);
    return MyprofilePageModule;
}());

//# sourceMappingURL=myprofile.module.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the MyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyprofilePage = (function () {
    function MyprofilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MyprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyprofilePage');
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\myprofile\myprofile.html"*/'<!--\n\n  Generated template for the MyprofilePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="whatsapp">\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content color="wapp-badge">\n\n\n\n  <ion-item (click)="myProfile()">\n\n    <ion-avatar >\n\n      <img class="center" src="../../assets/imgs/one.png">\n\n    </ion-avatar>\n\n  </ion-item>\n\n\n\n  <ion-list no-lines>\n\n    <ion-item>\n\n      <ion-label>\n\n        Finn\n\n      </ion-label>\n\n      <ion-icon name=\'md-create\' color="whatsappalt" item-end></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list no-border margin-top>\n\n    <ion-item-group>\n\n\n\n      <ion-item-divider color="wapp-badge">This is not your username or pin. This name will be visible to your WhatsUp contacts.</ion-item-divider>\n\n  \n\n      <ion-note item-start padding color="whatsappalt">\n\n        About and phone number\n\n      </ion-note>\n\n      <ion-item>\n\n        <ion-label>\n\n          Can\'t talk, WhatsUp only.\n\n        </ion-label>\n\n      </ion-item>\n\n  \n\n      <ion-item>\n\n        <ion-label>\n\n          +254 700 123456\n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-item-group>\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ })

});
//# sourceMappingURL=6.js.map