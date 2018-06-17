webpackJsonp([10],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsPageModule", function() { return ContactsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts__ = __webpack_require__(700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactsPageModule = (function () {
    function ContactsPageModule() {
    }
    ContactsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contacts__["a" /* ContactsPage */]),
            ],
        })
    ], ContactsPageModule);
    return ContactsPageModule;
}());

//# sourceMappingURL=contacts.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
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
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactsPage');
    };
    ContactsPage.prototype.initChat = function () {
        this.navCtrl.push('SendmessagePage');
        //this.app.getRootNav().push('SendmessagePage');
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\contacts\contacts.html"*/'<!--\n\n  Generated template for the ContactsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="whatsapp">\n\n    <ion-title>Select Contact</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only color="royal">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n\n        <ion-icon name="person-add"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="royal" (click)="presentPopover($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item (click)="initChat()">\n\n      <ion-icon color="whatsappalt" name="people" item-start></ion-icon>\n\n      New group\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n\n\n    <ion-item (click)="initChat()">\n\n      <ion-avatar item-start>\n\n        <img src="../../assets/imgs/one.png">\n\n      </ion-avatar>\n\n      <h2>Alvin</h2>\n\n      <p>Can\'t talk whatsapp only</p>\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic2-whatsappclone\src\pages\contacts\contacts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ContactsPage);
    return ContactsPage;
}());

//# sourceMappingURL=contacts.js.map

/***/ })

});
//# sourceMappingURL=10.js.map