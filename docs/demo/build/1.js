webpackJsonp([1],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusPageModule", function() { return StatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StatusPageModule = (function () {
    function StatusPageModule() {
    }
    StatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__status__["a" /* StatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__status__["a" /* StatusPage */]),
            ],
        })
    ], StatusPageModule);
    return StatusPageModule;
}());

//# sourceMappingURL=status.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statuspop_statuspop__ = __webpack_require__(198);
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
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatusPage = (function () {
    function StatusPage(navCtrl, navParams, pop) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pop = pop;
    }
    StatusPage.prototype.presentPopover = function (myEvent) {
        var popover = this.pop.create(__WEBPACK_IMPORTED_MODULE_2__statuspop_statuspop__["a" /* StatuspopPage */]);
        popover.present({
            ev: myEvent
        });
    };
    StatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StatusPage');
    };
    StatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-status',template:/*ion-inline-start:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\status\status.html"*/'<!--\n  Generated template for the StatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="whatsapp">\n    <ion-title>WhatsUp</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-item-group>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>My status</h2>\n      <p>tap to add status updates</p>\n    </ion-item>\n\n    <ion-item-divider color="wapp-badge">Recent updates</ion-item-divider>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <p>20 minutes ago</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <p>Today,2:31 AM</p>\n    </ion-item>\n\n    <ion-item-divider color="wapp-badge">Viewed updates</ion-item-divider>\n    \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <p>Today,1:06 AM</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <p>38 minutes ago</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <p>Today,7:28 AM</p>\n    </ion-item>\n    \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="../../assets/imgs/one.png">\n      </ion-avatar>\n      <h2>Finn</h2>\n      <p>50 minutes ago</p>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-fab right bottom>\n    <button ion-fab color="wapp-light">\n      <ion-icon name="md-camera"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\status\status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], StatusPage);
    return StatusPage;
}());

//# sourceMappingURL=status.js.map

/***/ })

});
//# sourceMappingURL=1.js.map