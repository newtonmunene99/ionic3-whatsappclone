webpackJsonp([8],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasettingsPageModule", function() { return DatasettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datasettings__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DatasettingsPageModule = (function () {
    function DatasettingsPageModule() {
    }
    DatasettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__datasettings__["a" /* DatasettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__datasettings__["a" /* DatasettingsPage */]),
            ],
        })
    ], DatasettingsPageModule);
    return DatasettingsPageModule;
}());

//# sourceMappingURL=datasettings.module.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasettingsPage; });
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
 * Generated class for the DatasettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DatasettingsPage = (function () {
    function DatasettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DatasettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatasettingsPage');
    };
    DatasettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datasettings',template:/*ion-inline-start:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\datasettings\datasettings.html"*/'<!--\n  Generated template for the DatasettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="whatsapp">\n    <ion-title>Data and storage usage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  \n  <ion-list>  \n    <ion-item>\n      <ion-label>\n        Network usage\n      </ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        Storage usage\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <ion-note item-start padding color="whatsappalt">\n      Media auto-download\n    </ion-note>\n    <ion-item>\n      <ion-label>\n        When using mobile data\n        <p>Photos</p>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        When connected on Wi-Fi\n        <p>All media</p>\n      </ion-label>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>\n        When roaming\n        <p>No media</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <ion-note item-start padding color="whatsappalt">\n      Call settings\n    </ion-note>\n    <ion-item>\n      <ion-checkbox item-end color="whatsapp" checked="false"></ion-checkbox>\n      <ion-label>\n        Low data usage\n        <p>Lower the ammount of data used during a WhatsUp call</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Munene\Documents\Ionic Projects\whatsapp\src\pages\datasettings\datasettings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DatasettingsPage);
    return DatasettingsPage;
}());

//# sourceMappingURL=datasettings.js.map

/***/ })

});
//# sourceMappingURL=8.js.map