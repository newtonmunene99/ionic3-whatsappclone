webpackJsonp([21],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		273,
		15
	],
	"../pages/calls/calls.module": [
		277,
		14
	],
	"../pages/callspop/callspop.module": [
		274,
		20
	],
	"../pages/camera/camera.module": [
		276,
		13
	],
	"../pages/chatpop/chatpop.module": [
		275,
		19
	],
	"../pages/chats/chats.module": [
		283,
		12
	],
	"../pages/chatsettings/chatsettings.module": [
		279,
		11
	],
	"../pages/contacts/contacts.module": [
		278,
		10
	],
	"../pages/contactsettings/contactsettings.module": [
		292,
		9
	],
	"../pages/datasettings/datasettings.module": [
		293,
		8
	],
	"../pages/help/help.module": [
		280,
		7
	],
	"../pages/homepop/homepop.module": [
		281,
		18
	],
	"../pages/myprofile/myprofile.module": [
		282,
		6
	],
	"../pages/notifsettings/notifsettings.module": [
		285,
		5
	],
	"../pages/profile/profile.module": [
		291,
		4
	],
	"../pages/profilepop/profilepop.module": [
		284,
		17
	],
	"../pages/sendmessage/sendmessage.module": [
		287,
		3
	],
	"../pages/settings/settings.module": [
		286,
		2
	],
	"../pages/status/status.module": [
		288,
		1
	],
	"../pages/statuspop/statuspop.module": [
		289,
		16
	],
	"../pages/tabs/tabs.module": [
		290,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallspopPage; });
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
 * Generated class for the CallspopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CallspopPage = /** @class */ (function () {
    function CallspopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CallspopPage.prototype.settings = function () {
    };
    CallspopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-callspop',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\callspop\callspop.html"*/'<ion-list>\n\n  <button ion-item (click)="settings()">Settings</button>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\callspop\callspop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CallspopPage);
    return CallspopPage;
}());

//# sourceMappingURL=callspop.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatpopPage; });
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
 * Generated class for the ChatpopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatpopPage = /** @class */ (function () {
    function ChatpopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChatpopPage.prototype.media = function () {
    };
    ChatpopPage.prototype.search = function () {
    };
    ChatpopPage.prototype.muteNotifs = function () {
    };
    ChatpopPage.prototype.wallpaper = function () {
    };
    ChatpopPage.prototype.block = function () {
    };
    ChatpopPage.prototype.clearChat = function () {
    };
    ChatpopPage.prototype.emailChat = function () {
    };
    ChatpopPage.prototype.addShortcut = function () {
    };
    ChatpopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatpop',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\chatpop\chatpop.html"*/'<ion-list>\n\n  <button ion-item (click)="viewContact()">View contact</button>\n\n  <button ion-item (click)="media()">Media</button>\n\n  <button ion-item (click)="search()">Search</button>\n\n  <button ion-item (click)="muteNotifs()">Mute notifications</button>\n\n  <button ion-item (click)="wallpaper()">Wallpaper</button>\n\n  <button ion-item (click)="block()">Block</button>\n\n  <button ion-item (click)="clearChat()">Clear chat</button>\n\n  <button ion-item (click)="emailChat()">Email chat</button>\n\n  <button ion-item (click)="addShortcut()">Add shortcut</button>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\chatpop\chatpop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChatpopPage);
    return ChatpopPage;
}());

//# sourceMappingURL=chatpop.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepopPage; });
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
 * Generated class for the HomepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomepopPage = /** @class */ (function () {
    function HomepopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomepopPage.prototype.newGroup = function () {
    };
    HomepopPage.prototype.newBroadcast = function () {
    };
    HomepopPage.prototype.wappWeb = function () {
    };
    HomepopPage.prototype.starredMsgs = function () {
    };
    HomepopPage.prototype.settings = function () {
        this.navCtrl.push('SettingsPage');
    };
    HomepopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homepop',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\homepop\homepop.html"*/'<ion-list>\n\n  <button ion-item (click)="newGroup()">New group</button>\n\n  <button ion-item (click)="newBroadcast()">New broadcast</button>\n\n  <button ion-item (click)="wappWeb()">WhatsUp Web</button>\n\n  <button ion-item (click)="starredMsgs()">Starred messages</button>\n\n  <button ion-item (click)="settings()">Settings</button>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\homepop\homepop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomepopPage);
    return HomepopPage;
}());

//# sourceMappingURL=homepop.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilepopPage; });
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
 * Generated class for the ProfilepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilepopPage = /** @class */ (function () {
    function ProfilepopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilepopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilepopPage');
    };
    ProfilepopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profilepop',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\profilepop\profilepop.html"*/'<ion-list>\n\n  <button ion-item (click)="share()">Share</button>\n\n  <button ion-item (click)="edit()">Edit</button>\n\n  <button ion-item (click)="viewinAddress()">View in address book</button>\n\n  <button ion-item (click)="verifyCode()">Verify security code</button>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\profilepop\profilepop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ProfilepopPage);
    return ProfilepopPage;
}());

//# sourceMappingURL=profilepop.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatuspopPage; });
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
 * Generated class for the StatuspopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StatuspopPage = /** @class */ (function () {
    function StatuspopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    StatuspopPage.prototype.statusPrivacy = function () {
    };
    StatuspopPage.prototype.settings = function () {
    };
    StatuspopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-statuspop',template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\statuspop\statuspop.html"*/'<ion-list>\n\n  <button ion-item (click)="statusPrivacy()">Status Privacy</button>\n\n  <button ion-item (click)="settings()">Settings</button>\n\n</ion-list>'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\pages\statuspop\statuspop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], StatuspopPage);
    return StatuspopPage;
}());

//# sourceMappingURL=statuspop.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_preview__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_chatpop_chatpop__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_callspop_callspop__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_homepop_homepop__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profilepop_profilepop__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_statuspop_statuspop__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chatpop_chatpop__["a" /* ChatpopPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_callspop_callspop__["a" /* CallspopPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homepop_homepop__["a" /* HomepopPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profilepop_profilepop__["a" /* ProfilepopPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_statuspop_statuspop__["a" /* StatuspopPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/callspop/callspop.module#CallspopPageModule', name: 'CallspopPage', segment: 'callspop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatpop/chatpop.module#ChatpopPageModule', name: 'ChatpopPage', segment: 'chatpop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/camera/camera.module#CameraPageModule', name: 'CameraPage', segment: 'camera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calls/calls.module#CallsPageModule', name: 'CallsPage', segment: 'calls', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatsettings/chatsettings.module#ChatsettingsPageModule', name: 'ChatsettingsPage', segment: 'chatsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homepop/homepop.module#HomepopPageModule', name: 'HomepopPage', segment: 'homepop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myprofile/myprofile.module#MyprofilePageModule', name: 'MyprofilePage', segment: 'myprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chats/chats.module#ChatsPageModule', name: 'ChatsPage', segment: 'chats', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profilepop/profilepop.module#ProfilepopPageModule', name: 'ProfilepopPage', segment: 'profilepop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifsettings/notifsettings.module#NotifsettingsPageModule', name: 'NotifsettingsPage', segment: 'notifsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sendmessage/sendmessage.module#SendmessagePageModule', name: 'SendmessagePage', segment: 'sendmessage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/status/status.module#StatusPageModule', name: 'StatusPage', segment: 'status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/statuspop/statuspop.module#StatuspopPageModule', name: 'StatuspopPage', segment: 'statuspop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contactsettings/contactsettings.module#ContactsettingsPageModule', name: 'ContactsettingsPage', segment: 'contactsettings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/datasettings/datasettings.module#DatasettingsPageModule', name: 'DatasettingsPage', segment: 'datasettings', priority: 'low', defaultHistory: [] }
                    ]
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_chatpop_chatpop__["a" /* ChatpopPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_callspop_callspop__["a" /* CallspopPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homepop_homepop__["a" /* HomepopPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profilepop_profilepop__["a" /* ProfilepopPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_statuspop_statuspop__["a" /* StatuspopPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera_preview__["a" /* CameraPreview */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "TabsPage";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Munene\Projects\IonicProjects\ionic3-whatsappclone\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map