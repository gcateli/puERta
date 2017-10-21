webpackJsonp([1],{

/***/ 107:
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
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/imei/imei.module": [
		262,
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
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imei_imei__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(msg, navCtrl, modal) {
        this.msg = msg;
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.imeiPage = __WEBPACK_IMPORTED_MODULE_2__imei_imei__["a" /* ImeiPage */];
        this.msgOptions = {
            message: 'Porta aberta',
            duration: 3000,
            position: 'bottom'
        };
    }
    HomePage.prototype.abrePorta = function () {
        console.log('Porta Aberta');
        this.msg.create(this.msgOptions).present();
    };
    HomePage.prototype.mostraIMEI = function () {
        var paginaModal = this.modal.create('ImeiPage');
        paginaModal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/guilhermecateli/Documents/gitHub/puerta/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <!--><button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <ion-title>puERta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<div text-center>\n	<p>Clique no cadeado para desbloquear a porta</p>\n\n    <div padding-vertical>\n		 	<button ion-button icon-only (click)=\'abrePorta();\'>\n  		    <ion-icon name="lock"></ion-icon>\n			 </button>\n		</div>\n	</div>\n</ion-content>\n\n<ion-footer>\n	<div text-right>\n		<button ion-button icon-only [navPush]="imeiPage">\n				<ion-icon name="cog"></ion-icon>\n		 </button>\n	</div>	 		 \n	</ion-footer>\n'/*ion-inline-end:"/Users/guilhermecateli/Documents/gitHub/puerta/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_imei_imei__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_imei_imei__["a" /* ImeiPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/imei/imei.module#ImeiPageModule', name: 'ImeiPage', segment: 'imei', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_imei_imei__["a" /* ImeiPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_imei_imei__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_imei_imei__["a" /* ImeiPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/guilhermecateli/Documents/gitHub/puerta/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/guilhermecateli/Documents/gitHub/puerta/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImeiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImeiPage = (function () {
    function ImeiPage(msg, navCtrl, navParams) {
        this.msg = msg;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imei = '';
        this.msgOptions = {
            message: '',
            duration: 3000,
            position: 'bottom'
        };
    }
    ImeiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImeiPage');
    };
    ImeiPage.prototype.obterIMEI = function () {
        var permissions = cordova.plugins.permissions;
        var imei = cordova.plugins.imei;
        permissions.requestPermission(permissions.READ_PHONE_STATE, success, error);
        function error() {
            this.msgOptions.message = 'Não há permissões para acessar o IMEI!';
            this.msg.create(this.msgOptions).present();
        }
        function success(status) {
            imei.get(function (imei) {
                console.log('worked');
                this.imei = imei;
            }, function () {
                console.log('error');
                this.msgOptions.message = 'Erro ao acessar o IMEI!';
                this.msg.create(this.msgOptions).present();
            });
        }
    };
    return ImeiPage;
}());
ImeiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-imei',template:/*ion-inline-start:"/Users/guilhermecateli/Documents/gitHub/puerta/src/pages/imei/imei.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-title>Configurações</ion-title>      \n    <button ion-button icon-only menuToggle>\n        <ion-icon name="arrow-dropleft"></ion-icon>\n    </button>  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div padding-vertical>\n    <ion-list>        \n      <ion-item>\n          <ion-label floating>IMEI</ion-label>        \n          <ion-input type="text" [(ngModel)]="imei"></ion-input>\n      </ion-item>\n    </ion-list>   \n    <button ion-button full (click)=\'obterIMEI();\'>Obter IMEI</button>    \n  </div>    \n</ion-content>\n'/*ion-inline-end:"/Users/guilhermecateli/Documents/gitHub/puerta/src/pages/imei/imei.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object])
], ImeiPage);

var _a, _b, _c;
//# sourceMappingURL=imei.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map