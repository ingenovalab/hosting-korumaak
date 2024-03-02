(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_etudes_etudes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/etudes/etudes.component */ "./src/app/pages/etudes/etudes.component.ts");
/* harmony import */ var _pages_travaux_travaux_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/travaux/travaux.component */ "./src/app/pages/travaux/travaux.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_join_us_join_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/join-us/join-us.component */ "./src/app/pages/join-us/join-us.component.ts");
/* harmony import */ var _pages_area_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/area/area.component */ "./src/app/pages/area/area.component.ts");









const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: {
            pageTitle: 'Accueil'
        }
    },
    {
        path: 'nos-metiers',
        component: _pages_area_area_component__WEBPACK_IMPORTED_MODULE_6__["AreaComponent"],
        data: {
            pageTitle: 'Nos métiers'
        }
    },
    {
        path: 'professionnels',
        component: _pages_etudes_etudes_component__WEBPACK_IMPORTED_MODULE_2__["EtudesComponent"],
        data: {
            pageTitle: 'Pour les professionnels'
        }
    },
    {
        path: 'nos-offres',
        component: _pages_travaux_travaux_component__WEBPACK_IMPORTED_MODULE_3__["TravauxComponent"],
        data: {
            pageTitle: 'Pôle travaux'
        }
    },
    {
        path: 'notre-equipe',
        component: _pages_join_us_join_us_component__WEBPACK_IMPORTED_MODULE_5__["JoinUsComponent"],
        data: {
            pageTitle: 'Notre équipe'
        }
    },
    {
        path: '**',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        data: {
            pageTitle: 'Page indisponible'
        }
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                onSameUrlNavigation: "reload",
                anchorScrolling: 'enabled',
                scrollOffset: [0, 64],
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled',
                        onSameUrlNavigation: "reload",
                        anchorScrolling: 'enabled',
                        scrollOffset: [0, 64],
                        initialNavigation: 'enabled'
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_loadjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/loadjs */ "./src/utils/loadjs.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_shared_canonical_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/canonical.service */ "./src/app/shared/canonical.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");










"use strict";
// https://www.positronx.io/angular-seo-set-dynamic-page-title-meta-tags-in-universal-app/
class AppComponent {
    constructor(platformId, router, metaTagService, canonicalService) {
        this.platformId = platformId;
        this.router = router;
        this.metaTagService = metaTagService;
        this.canonicalService = canonicalService;
        this.title = 'korumaak';
    }
    ngOnInit() {
        this.metaTagService.addTags([
            {
                name: 'description',
                content: "Korumaak Activities- Des solutions solaires durables pour une énergie propre et renouvelable. Installation, vente et conseils en énergie solaire au Sénégal et dans la sous-région.",
            },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Ingenovatech' },
            { name: "msapplication-TileColor", content: "#766df4" },
            { name: 'theme-color', content: "#ffffff" },
            { name: 'keywords', content: "solar energy; solar panel" },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2024-02-18', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' },
        ]);
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            // recall swiper and theme required js
            this.jsub = Object(_utils_loadjs__WEBPACK_IMPORTED_MODULE_1__["loadAllJs"])(this.router);
            this.canonicalService.setCanonicalURL();
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.jsub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    navigateToTop() {
        window.scroll(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_canonical_service__WEBPACK_IMPORTED_MODULE_5__["CanonicalService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [["routerLink", "", "data-scroll", "", 1, "btn-scroll-top", 3, "click"], [1, "btn-scroll-top-tooltip", "text-muted", "fs-sm", "me-2"], [1, "btn-scroll-top-icon", "fi-chevron-up"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_3_listener() { return ctx.navigateToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Meta"] }, { type: src_app_shared_canonical_service__WEBPACK_IMPORTED_MODULE_5__["CanonicalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_about_about_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about/about.module */ "./src/app/pages/about/about.module.ts");
/* harmony import */ var _pages_travaux_travaux_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/travaux/travaux.module */ "./src/app/pages/travaux/travaux.module.ts");
/* harmony import */ var _pages_etudes_etudes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/etudes/etudes.module */ "./src/app/pages/etudes/etudes.module.ts");
/* harmony import */ var _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.module */ "./src/app/components/navbar/navbar.module.ts");
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.module */ "./src/app/components/footer/footer.module.ts");
/* harmony import */ var _pages_join_us_join_us_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/join-us/join-us.module */ "./src/app/pages/join-us/join-us.module.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
            _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
            _pages_travaux_travaux_module__WEBPACK_IMPORTED_MODULE_6__["TravauxModule"],
            _pages_etudes_etudes_module__WEBPACK_IMPORTED_MODULE_7__["EtudesModule"],
            _pages_about_about_module__WEBPACK_IMPORTED_MODULE_5__["AboutModule"],
            _pages_join_us_join_us_module__WEBPACK_IMPORTED_MODULE_10__["JoinUsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
        _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
        _pages_travaux_travaux_module__WEBPACK_IMPORTED_MODULE_6__["TravauxModule"],
        _pages_etudes_etudes_module__WEBPACK_IMPORTED_MODULE_7__["EtudesModule"],
        _pages_about_about_module__WEBPACK_IMPORTED_MODULE_5__["AboutModule"],
        _pages_join_us_join_us_module__WEBPACK_IMPORTED_MODULE_10__["JoinUsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"],
                    _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_9__["FooterModule"],
                    _pages_travaux_travaux_module__WEBPACK_IMPORTED_MODULE_6__["TravauxModule"],
                    _pages_etudes_etudes_module__WEBPACK_IMPORTED_MODULE_7__["EtudesModule"],
                    _pages_about_about_module__WEBPACK_IMPORTED_MODULE_5__["AboutModule"],
                    _pages_join_us_join_us_module__WEBPACK_IMPORTED_MODULE_10__["JoinUsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/flipcard/flipcard.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/flipcard/flipcard.component.ts ***!
  \***********************************************************/
/*! exports provided: FlipcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipcardComponent", function() { return FlipcardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0, a1) { return { "background-color": a0, "color": a1 }; };
function FlipcardComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.data.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r0.data.frontBgColor, ctx_r0.data.frontColor));
} }
const _c1 = function (a0) { return { "color": a0 }; };
function FlipcardComponent_h5_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r1.data.frontColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.data.frontTitle);
} }
function FlipcardComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r2.data.frontColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.frontText);
} }
function FlipcardComponent_h5_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.data.backTitle);
} }
const _c2 = function (a0) { return { "text-with-dots": a0 }; };
function FlipcardComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r4.data.actionUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.data.backText);
} }
function FlipcardComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx_r5.data.actionUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fragment", ctx_r5.data.actionUrlFragment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, ctx_r5.data.backColor, ctx_r5.data.backBgColor));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.data.actionTitle, " ");
} }
const _c3 = function (a0) { return { "background-color": a0 }; };
class FlipcardComponent {
    constructor(router) {
        this.router = router;
        router.events.subscribe(s => {
            if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                    const element = document.querySelector("#" + tree.fragment);
                    if (element) {
                        element.scrollIntoView();
                    }
                }
            }
        });
    }
}
FlipcardComponent.ɵfac = function FlipcardComponent_Factory(t) { return new (t || FlipcardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FlipcardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FlipcardComponent, selectors: [["app-flipcard"]], inputs: { data: "data" }, decls: 11, vars: 13, consts: [[1, "card-flip", "card", "shadow-sm", "border-0"], [1, "card-front", "d-flex", "align-items-center", 3, "ngStyle"], [1, "card-body", "text-center"], [3, "src", "ngStyle", 4, "ngIf"], ["class", "mt-5", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [1, "card-back", "d-flex", "align-items-center", 3, "ngStyle"], [1, "card-body"], [4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["class", "btn", 3, "routerLink", "fragment", "ngStyle", 4, "ngIf"], [3, "src", "ngStyle"], [1, "mt-5", 3, "ngStyle"], [3, "ngStyle"], [3, "ngClass"], [1, "btn", 3, "routerLink", "fragment", "ngStyle"], ["icon", "arrow-right", 1, "ml-1"]], template: function FlipcardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FlipcardComponent_img_3_Template, 1, 5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FlipcardComponent_h5_4_Template, 2, 4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FlipcardComponent_p_5_Template, 2, 4, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FlipcardComponent_h5_8_Template, 2, 1, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FlipcardComponent_p_9_Template, 2, 4, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FlipcardComponent_a_10_Template, 3, 7, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, ctx.data.frontBgColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.imgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.frontTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.frontText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx.data.backBgColor, ctx.data.backColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.backTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.backText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.actionUrl);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".card-flip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    transition: transform 400ms;\n    transition-timing-function: linear;\n    width: 100%;\n    height: 100%;\n    min-height: 20em;\n    margin: 0;\n    cursor: pointer;\n    border-radius: 0.5rem;\n}\n  \n  \n  .card-front[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n    background-image: url('flip_box02_03.png');\n    background-repeat: no-repeat;\n    background-position: left 20%;\n    img {\n        height: 6em;\n        width: auto;\n    }\n  }\n  \n  \n  .card-back[_ngcontent-%COMP%] {\n    transform: rotateY(180deg);\n    position: absolute;\n    top: 0;\n  }\n  \n  \n  .card-flip[_ngcontent-%COMP%]:hover   .card-front[_ngcontent-%COMP%] {\n    transform: rotateY(-180deg);\n  }\n  \n  \n  .card-flip[_ngcontent-%COMP%]:hover   .card-back[_ngcontent-%COMP%] {\n    transform: rotateY(0deg);\n  }\n  \n  \n  .text-with-dots[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    max-width: 98%;\n    -webkit-line-clamp: 7;\n    -webkit-box-orient: vertical;\n    overflow: hidden !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbGlwY2FyZC9mbGlwY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxlQUFlO0lBQ2YscUJBQXFCO0FBQ3pCOzs7RUFHRTtJQUNFLHdCQUF3QjtJQUN4QiwwQ0FBZ0U7SUFDaEUsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QjtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7RUFDRjs7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLE1BQU07RUFDUjs7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7OztFQUVBO0lBQ0Usd0JBQXdCO0VBQzFCOzs7RUFFQTtJQUNFLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QiwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZsaXBjYXJkL2ZsaXBjYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mbGlwID4gZGl2IHtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDIwZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4gIFxuICBcbiAgLmNhcmQtZnJvbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9mbGlwX2JveDAyXzAzLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAyMCU7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiA2ZW07XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cbiAgfVxuICBcbiAgLmNhcmQtYmFjayB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgLmNhcmQtZmxpcDpob3ZlciAuY2FyZC1mcm9udCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB9XG4gIFxuICAuY2FyZC1mbGlwOmhvdmVyIC5jYXJkLWJhY2sge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgfVxuICBcbiAgLnRleHQtd2l0aC1kb3RzIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBtYXgtd2lkdGg6IDk4JTtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDc7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipcardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-flipcard',
                templateUrl: './flipcard.component.html',
                styleUrls: ['./flipcard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/flipcard/flipcard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/flipcard/flipcard.module.ts ***!
  \********************************************************/
/*! exports provided: FlipcardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipcardModule", function() { return FlipcardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _flipcard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipcard.component */ "./src/app/components/flipcard/flipcard.component.ts");




class FlipcardModule {
}
FlipcardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FlipcardModule });
FlipcardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FlipcardModule_Factory(t) { return new (t || FlipcardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FlipcardModule, { declarations: [_flipcard_component__WEBPACK_IMPORTED_MODULE_2__["FlipcardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_flipcard_component__WEBPACK_IMPORTED_MODULE_2__["FlipcardComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipcardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_flipcard_component__WEBPACK_IMPORTED_MODULE_2__["FlipcardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [_flipcard_component__WEBPACK_IMPORTED_MODULE_2__["FlipcardComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 60, vars: 0, consts: [[1, "footer", "bg-secondary", "pt-5"], [1, "container", "pt-lg-4", "pb-4"], [1, "row", "mb-5", "pb-md-3", "pb-lg-4"], [1, "col-lg-11", "mb-lg-0", "mb-4"], [1, "d-flex", "flex-md-row", "flex-column", "text-center", "text-md-start", "justify-content-between", "mx-n2"], [1, "mb-sm-0", "mb-4", "px-2"], ["routerLink", "/", 1, "d-inline-block", "mb-4"], ["src", "assets/img/logo/logo.png", "width", "215", "alt", "logo"], [1, "nav", "flex-column", "mb-sm-4", "mb-2"], [1, "nav-item", "mb-2"], ["href", "mailto:contact@korumaak.com", 1, "nav-link", "p-0", "fw-normal"], [1, "fi-mail", "mt-n1", "me-2", "align-middle", "opacity-70"], [1, "nav-item"], ["href", "tel:+22670794679", 1, "nav-link", "p-0", "fw-normal"], [1, "fi-device-mobile", "mt-n1", "me-2", "align-middle", "opacity-70"], ["href", "tel:+33778194940", 1, "nav-link", "p-0", "fw-normal"], [1, "h5", "text-uppercase"], [1, "nav", "flex-column"], ["routerLink", "/nos-metiers", "fragment", "installation-solaire", 1, "nav-link", "p-0", "fw-normal"], ["routerLink", "/nos-metiers", "fragment", "production-photovoltaique", 1, "nav-link", "p-0", "fw-normal"], ["routerLink", "/nos-metiers", "fragment", "consommation", 1, "nav-link", "p-0", "fw-normal"], ["routerLink", "/nos-metiers", "fragment", "sav", 1, "nav-link", "p-0", "fw-normal"], ["routerLink", "/professionnels", 1, "nav-link", "p-0", "fw-normal"], ["routerLink", "/professionnels", "fragment", "conseil", 1, "nav-link", "p-0", "fw-normal"], ["href", "#korumaak-modal", "data-bs-toggle", "modal", 1, "nav-link", "p-0", "fw-normal"], ["routerLink", "/notre-equipe", 1, "nav-link", "p-0", "fw-normal"], [1, "text-center", "fs-sm", "pt-3", "mt-3", "pb-2"], ["href", "https://www.ingenovatech.com/", "target", "_blank", "rel", "noopener", 1, "d-inline-block", "nav-link", "p-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " contact@korumaak.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (+226) 7xxxxxx | S\u00E9n\u00E9gal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " (+33) 77xxxxxxx | France ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nos services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Installation et vente de Panneaux solaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Production d'\u00E9lectricit\u00E9 photovolta\u00EFque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Autoconsommation collective et vente locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Services d\u2019accompagnements et SAV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Audit et Conseil \u00E9nerg\u00E9tique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Nos solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Professionnels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Conseil et accompagnement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "A propos de nous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Nous-contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u00A9 All rights reserved. Made by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Ingenovatech");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class FooterModule {
}
FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterModule_Factory(t) { return new (t || FooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 53, vars: 2, consts: [["data-scroll-header", "", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "fixed-top"], [1, "container", "d-flex", "align-items-end"], ["routerLink", "/", 1, "navbar-brand", "me-3", "me-xl-4"], ["src", "assets/img/logo/logo.png", "width", "215", "alt", "Korumaak", 1, "d-lg-block", "d-none"], ["src", "assets/img/logo/logo.png", "width", "160", "alt", "Korumaak", 1, "d-lg-none", "d-block"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["routerLink", "notre-equipe", "routerLinkActive", "active", 1, "btn", "btn-primary", "btn-sm", "ms-2", "my-1", "order-lg-3", "mb-1"], [1, "fi-phone", "me-2"], [1, "d-none", "d-sm-inline"], [1, "d-sm-none", "d-inline"], ["id", "navbarNav", 1, "collapse", "navbar-collapse", "order-lg-2"], [1, "navbar-nav", "navbar-nav-scroll", 2, "max-height", "35rem"], [1, "nav-item"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "routerLink", "/", "routerLinkActive", "active", "role", "button", 1, "nav-link", "pb-1", "mb-0", 3, "routerLinkActiveOptions"], [1, "d-lg-block", "d-none", "bg-primary", "mb-2", 2, "width", "50px", "height", "6px"], [1, "text-uppercase"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/nos-metiers", "routerLinkActive", "active", "role", "button", 1, "nav-link", "pb-1", "mb-0"], [1, "nav-item", "dropdown"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/nos-offres", "routerLinkActive", "active", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "pb-1", "mb-0", "dropdown-toggle"], [1, "dropdown-menu"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/nos-offres", "fragment", "catalogue", 1, "dropdown-item"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/nos-offres", "fragment", "kits-solaires", 1, "dropdown-item"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/nos-offres", "fragment", "paneaux-photovoltaiques", 1, "dropdown-item"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/nos-offres", "fragment", "installations", 1, "dropdown-item"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/professionnels", "routerLinkActive", "active", "role", "button", 1, "nav-link", "pb-1", "mb-0"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", "aria-controls", "navbarNav", "routerLink", "/notre-equipe", "routerLinkActive", "active", "role", "button", 1, "nav-link", "pb-1", "mb-0"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nous Contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Appeler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nos m\u00E9tiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nos offres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "catalogue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Kits solaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Solutions photovolta\u00EFques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Types d'installations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "KORUMAAK PRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Notre \u00E9quipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/navbar/navbar.module.ts ***!
  \****************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NavbarModule {
}
NavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavbarModule });
NavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavbarModule_Factory(t) { return new (t || NavbarModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarModule, { declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AboutComponent_div_103_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", member_r1.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AboutComponent_div_103_div_8_Template, 3, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", member_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", member_r1.linkedin);
} }
class AboutComponent {
    constructor() {
        this.members = [
            {
                img: "assets/img/korumaak/about/team/01.jpg",
                role: "Coordinateur Études Travaux FTTH",
                name: "Yacouba BAGAYA",
                linkedin: "https://www.linkedin.com/in/yacouba-bagaya-a689a2150/",
                facebook: "",
                twitter: ""
            },
            {
                img: "assets/img/korumaak/about/team/02.jpg",
                role: "Ingénieur en Génie Civil / Gestionnaire",
                name: "Sayibou OUEDRAOGO",
                linkedin: "",
                facebook: "",
                twitter: ""
            },
            {
                img: "assets/img/korumaak/about/team/03.jpg",
                role: "Ingénieur Chaussées",
                name: "A. Moubarack MAIGA",
                linkedin: "https://www.linkedin.com/in/abdoul-moubarack-maiga-8358b59b/",
                facebook: "",
                twitter: ""
            },
            {
                img: "assets/img/korumaak/about/team/04.jpg",
                role: "Ingénieur Travaux GC/FTTH",
                name: "O. Fahizoun TRAORE",
                linkedin: "https://www.linkedin.com/in/oumairoun-fahizoun-traore-2b0a99135/",
                facebook: "",
                twitter: ""
            },
            {
                img: "assets/img/korumaak/about/team/05.jpg",
                role: "Ingénieur Structure",
                name: "Levy OUEDRAOGO",
                linkedin: "https://www.linkedin.com/in/levy-ouedraogo-681985aa/",
                facebook: "",
                twitter: ""
            },
            {
                img: "assets/img/korumaak/about/team/06.jpg",
                role: "Ingénieur en Géotechnique",
                name: "Ousseni KOBYAGDA",
                linkedin: "https://www.linkedin.com/in/ouss%C3%A9ni-kobyagda-9398b69b/",
                facebook: "",
                twitter: ""
            }
        ];
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 104, vars: 1, consts: [[1, "container", "mt-5", "mb-md-4", "pt-5"], ["aria-label", "breadcrumb", 1, "mb-3", "pt-md-3"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "mb-5", "pb-sm-3", "pb-lg-4"], [1, "bg-secondary", "rounded-3", "p-md-1", "p-lg-4"], [1, "col-md-10", "col-12", "offset-md-1", "p-md-0", "p-2", "d-flex", "align-items-center", "justify-content-between"], [1, "col-md-8", "py-md-5", "px-md-0", "p-4"], [1, "mb-md-4"], [1, "mb-4", "pb-md-3", "fs-lg"], ["href", "#contact-modal", "data-bs-toggle", "modal", 1, "btn", "btn-lg", "btn-primary"], [1, "fi-calculator", "me-2"], [1, "col-md-4", "d-md-block", "d-none", "text-center", "px-0"], ["src", "assets/img/korumaak/5.jpg", "width", "360", "alt", "Cover image", 1, "korumaak"], [1, "container", "mb-4", "mb-md-5"], [1, "mb-4", "pb-2", "me-auto", "fs-lg", "text-left", 2, "max-width", "616px"], [1, "row"], [1, "col-md-6", "mb-4"], [1, "card", "shadow-sm", "card-hover", "h-100"], [1, "d-sm-flex", "align-items-center"], [1, "pt-4", "ps-sm-4", "py-sm-4", "p-lg-5", "flex-shrink-0"], ["src", "assets/img/korumaak/icons/sketch.png", "width", "86", "alt", "Icon", 1, "d-block", "mx-auto"], [1, "card-body", "text-center", "text-sm-start"], [1, "h5", "mb-2"], [1, "mb-sm-4"], ["routerLink", "/pole-etudes", 1, "fw-bold", "text-decoration-none", "py-1"], [1, "fi-arrow-long-right", "fs-xs", "ms-2"], ["src", "assets/img/korumaak/icons/excavator.png", "width", "86", "alt", "Icon", 1, "d-block", "mx-auto"], ["routerLink", "/pole-travaux", 1, "fw-bold", "text-decoration-none", "py-1"], [1, "container", "mb-2", "mb-xl-5", "pb-lg-4"], [1, "tns-carousel-wrapper", "tns-nav-outside"], ["data-carousel-options", "{\"loop\": false, \"controls\": false, \"responsive\": {\"0\":{\"items\":1, \"gutter\": 16},\"500\":{\"items\":2, \"gutter\": 20},\"768\":{\"items\":3, \"gutter\": 24}}}", 1, "tns-carousel-inner"], [1, "card", "border-0"], [1, "card-body"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "#044444", 1, "mb-3"], ["d", "M39.976 40.416l-5.667-26.529c-.098-.44-.391-.831-.782-1.026L20.531 6.217l-.928-4.202c-.195-.831-.977-1.368-1.808-1.173s-1.368.977-1.172 1.808l.879 4.202-9.136 11.335c-.293.342-.391.831-.293 1.27l5.618 26.529c.195.831.977 1.368 1.808 1.173l23.304-4.934a1.59 1.59 0 0 0 1.173-1.808zm-23.597 3.469L11.2 19.554l7.182-8.843.635 2.931c.195.831.977 1.368 1.808 1.172s1.368-.977 1.172-1.808l-.635-2.931 10.162 5.179 5.179 24.33-20.324 4.299zm7.963-17.149l-2.052.44a1.54 1.54 0 0 1-1.857-1.27c-.146-.831.44-1.612 1.27-1.759l2.052-.44c.684-.146 1.368.195 1.71.782.098.244.342.342.586.293l1.954-.44c.293-.049.489-.391.391-.684-.733-2.003-2.736-3.225-4.837-3.029l-.391-1.954c-.049-.293-.342-.489-.635-.391l-1.954.391c-.293.049-.489.342-.391.635l.391 1.954c-2.247.733-3.664 3.029-3.127 5.374.586 2.492 3.078 4.006 5.521 3.469l2.003-.44c.831-.195 1.661.293 1.857 1.124.244.879-.293 1.71-1.172 1.905l-2.101.44c-.684.147-1.368-.195-1.71-.782-.098-.195-.342-.342-.586-.293l-1.954.44c-.342.049-.488.391-.391.684.733 2.003 2.736 3.224 4.837 3.029l.391 1.905c.049.293.342.489.635.391l1.954-.391c.293-.049.489-.342.391-.635l-.391-1.905c2.247-.733 3.664-3.029 3.127-5.374-.538-2.492-3.029-4.006-5.521-3.469z"], [1, "h5", "card-title", "pb-1"], [1, "card-text"], ["d", "M13.585 21.456a10.416 10.416 0 1 0 20.832 0c0-5.76-4.656-10.464-10.416-10.464s-10.416 4.704-10.416 10.464zm18.096 0c0 4.224-3.456 7.68-7.68 7.68s-7.68-3.456-7.68-7.68 3.456-7.68 7.68-7.68 7.68 3.408 7.68 7.68zm-10.225-.96a1.36 1.36 0 0 0-1.92 0 1.36 1.36 0 0 0 0 1.92l2.352 2.352c.24.24.624.384.96.384s.72-.144.96-.384l4.512-4.512a1.36 1.36 0 0 0 0-1.92 1.36 1.36 0 0 0-1.92 0l-3.552 3.552-1.392-1.392zM42 10.512C29.568 5.568 24.96 1.584 24.912 1.536c-.528-.48-1.296-.48-1.824 0C23.04 1.584 18.48 5.52 6 10.512c-.528.192-.864.72-.864 1.248 0 24.576 17.424 34.464 18.192 34.848.192.096.432.192.672.192a1.2 1.2 0 0 0 .672-.192c.72-.384 18.192-10.272 18.192-34.848 0-.528-.336-1.056-.864-1.248zM24 43.824C20.928 41.808 8.304 32.352 7.872 12.72 17.328 8.88 22.128 5.664 24 4.32c1.872 1.392 6.672 4.56 16.128 8.4C39.744 32.352 27.072 41.808 24 43.824z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "48", "height", "48", "fill", "none", 1, "mb-3"], ["fill-rule", "evenodd", "d", "M5.493 32.863a6.53 6.53 0 0 1-5.446-6.441v-3.981a6.53 6.53 0 0 1 1.913-4.619c1.225-1.225 2.887-1.913 4.619-1.913h.435C7.709 7.137 15.048.234 24 .234s16.291 6.903 16.986 15.675h.435a6.53 6.53 0 0 1 6.532 6.532v3.981a6.53 6.53 0 0 1-6.532 6.532h-1.928a1.45 1.45 0 0 1-1.447-1.448V17.274A14.05 14.05 0 0 0 24 3.228 14.05 14.05 0 0 0 9.954 17.274v14.232a1.45 1.45 0 0 1-1.447 1.448h0a8.87 8.87 0 0 0 8.821 7.935h.199c.248-.839.702-1.611 1.332-2.241.991-.991 2.336-1.548 3.738-1.548h2.807a5.29 5.29 0 0 1 5.287 5.286 5.29 5.29 0 0 1-5.287 5.287h-2.807a5.29 5.29 0 0 1-5.071-3.789h-.198c-3.147 0-6.164-1.25-8.39-3.475-2.025-2.025-3.242-4.707-3.445-7.545zm22.203 9.523c0-1.266-1.026-2.292-2.292-2.292h-2.807a2.29 2.29 0 0 0-2.292 2.292c0 1.266 1.026 2.292 2.292 2.292h2.807c1.266 0 2.292-1.026 2.292-2.292zM6.96 18.903h-.381a3.54 3.54 0 0 0-3.538 3.538v3.981a3.54 3.54 0 0 0 3.538 3.538h.381V18.903zm34.08 0V29.96h.381a3.54 3.54 0 0 0 3.538-3.538v-3.981a3.54 3.54 0 0 0-3.538-3.538h-.381z", "fill", "#044444"], [1, "container", "mb-5", "pb-2", "pb-lg-5"], [1, "row", "align-items-lg-center", "gy-4"], [1, "col-md-6"], ["src", "assets/img/korumaak/about/2.jpg", "alt", "Cover", 1, "rounded-3"], [1, "mb-lg-4"], [1, "mb-lg-4", "fs-lg"], ["href", "#contact-modal", "data-bs-toggle", "modal", 1, "btn", "btn-lg", "btn-primary", "from-bottom"], [1, "mb-4"], [1, "tns-carousel-wrapper", "tns-controls-outside-xxl", "tns-nav-outside", "tns-nav-outside-flush", "mx-n2"], ["data-carousel-options", "{\"items\": 4, \"speed\": 100, \"autoplay\": \"true\", \"responsive\": {\"0\":{\"items\":1},\"500\":{\"items\":2},\"768\":{\"items\":3},\"992\":{\"items\":4}}}", 1, "tns-carousel-inner", "row", "gx-4", "mx-0", "pt-3", "pb-4"], ["class", "col", "style", "transition: 0.25s ease-in-out; -webkit-transition: 0.25s ease-in-out;", 4, "ngFor", "ngForOf"], [1, "col", 2, "transition", "0.25s ease-in-out", "-webkit-transition", "0.25s ease-in-out"], [1, "card", "border-0", "shadow-sm", "h-100"], ["alt", "profile", 1, "card-img-top", 3, "src"], [1, "card-body", "text-center"], [1, "h5", "card-title", "mb-2"], [1, "d-inline-block", "mb-3", "fs-sm"], ["class", "pt-1 my-auto", 4, "ngIf"], [1, "pt-1", "my-auto"], ["target", "_blank", 1, "btn", "btn-icon", "btn-light-primary", "btn-xs", "rounded-circle", "shadow-sm", "mx-2", 3, "href"], [1, "fi-linkedin"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Le groupe korumaak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Imaginez diff\u00E9remment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " la construction de demain. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notre objectif:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Votre satisfaction avec des solutions \u00E9conomiques et \u00E9cologiques gr\u00E2ce \u00E0 des m\u00E9thodes innovantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Evaluez votre projet ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nos m\u00E9tiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " korumaak vous propose deux p\u00F4les d'\u00E9tudes et des services dans divers domaines du g\u00E9nie civil. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "P\u00F4le \u00C9tudes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Friands de challenges, nos ing\u00E9nieurs sp\u00E9cialis\u00E9s attendent d\u2019analyser vos projets complexes pour vous proposer des solutions optimis\u00E9es, \u00E9conomiques et \u00E9cologiques. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "En savoir plus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "P\u00F4le Travaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " La r\u00E9alisation des travaux n\u2019a plus de secret pour nos \u00E9quipes. Confiez-nous vos projets, pour une ex\u00E9cution dans les d\u00E9lais et respectant les normes et sp\u00E9cifications techniques. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "En savoir plus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Votre projet \u00E9conomique et \u00E9cologique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " A l\u2019image de ses fondateurs dipl\u00F4m\u00E9s dans diverses sp\u00E9cialit\u00E9s du g\u00E9nie civil, korumaak propose des solutions \u00E9conomiques et \u00E9cologiques tout en garantissant la satisfaction de ses clients \u00E0 travers des m\u00E9thodes innovantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Par des professionnels du domaine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Avec son savoir-faire pluridisciplinaire la soci\u00E9t\u00E9 propose un champ de prestations diversifi\u00E9es dans les domaines de l'ing\u00E9nierie du b\u00E2timent, des travaux publics, de la g\u00E9otechnique et de la t\u00E9l\u00E9communication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Avec un accompagement personnalis\u00E9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " korumaak propose \u00E9galement un panel de services int\u00E9gr\u00E9s permettant de vous accompagner \u00E0 chaque \u00E9tape de votre projet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Nos valeurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " La r\u00E9ussite des \u00E9tudes et des travaux qui nous sont confi\u00E9s est bas\u00E9e sur des valeurs qui sont le moteur du groupe korumaak. Ces valeurs sont au centre de toutes nos actions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Nous Contacter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Faites confiance \u00E0 une \u00E9quipe dynamique et pluridisciplinaire !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, AboutComponent_div_103_Template, 9, 4, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".korumaak[_ngcontent-%COMP%] {\n    -webkit-clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\n            clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZFQUFxRTtZQUFyRSxxRUFBcUU7QUFDekUiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmtvcnVtYWFrIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAsIDEwMCUgMjUlLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDI1JSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/area/area.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/area/area.component.ts ***!
  \**********************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AreaComponent {
    constructor() { }
    ngOnInit() {
    }
}
AreaComponent.ɵfac = function AreaComponent_Factory(t) { return new (t || AreaComponent)(); };
AreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AreaComponent, selectors: [["app-area"]], decls: 80, vars: 0, consts: [[1, "container-fluid", "my-5", "pt-5", "pb-lg-4", "px-xxl-4"], ["data-jarallax", "", "data-speed", "0.5", 1, "jarallax", "card", "align-items-center", "justify-content-center", "border-0", "p-md-5", "p-4", "bg-secondary", "overflow-hidden", "mt-n3", 2, "min-height", "65vh", "background-image", "url(assets/img/korumaak/home/1.jpg)"], [1, "img-overlay", "opacity-40"], [1, "content-overlay", "container", "py-3"], ["aria-label", "breadcrumb", 1, ""], [1, "breadcrumb"], [1, "breadcrumb-item", "text-light"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-6", "col-md-6", "col-sm-8", "py-md-5", "py-4", "px-0"], [1, "display-4", "mb-4", "pb-md-2", "text-light"], [1, "position-relative", "bg-white", "rounded-xxl-4", "mb-5", "pb-1", "py-md-3", "zindex-5", 2, "margin-top", "-30px"], [1, "container", "pt-5", "mb-4", "mb-md-5"], [1, "mb-4", "pb-2", "me-auto", "fs-lg", "text-left", 2, "max-width", "616px"], ["id", "installation-solaire", 1, "container", "mb-5", "pb-2", "pb-lg-5"], [1, "row", "align-items-lg-center", "gy-4"], [1, "col-md-6"], ["src", "assets/img/korumaak/home/2.jpg", "alt", "Cover", 1, "rounded-3", "w-100", 2, "height", "470px", "object-fit", "cover"], [1, "col-lg-5", "offset-lg-1", "col-md-6"], [1, "mb-lg-4"], [1, "mb-lg-4", "fs-md", "text-muted"], [1, "list-unstyled", "pb-lg-3"], [1, "d-flex"], [1, "fi-check", "mt-1", "me-2", "pe-1", "text-primary"], ["id", "sav", 1, "container", "mb-5", "pb-lg-5"], [1, "row", "row-cols-lg-3", "row-cols-sm-2", "row-cols-1", "g-sm-4", "g-0"], [1, "col"], [1, "card", "border-0", "h-100"], [1, "card-body"], [1, "h5", "text-primary"], ["id", "production-photovoltaique", 1, "container", "mb-5", "pb-2", "pb-lg-5"], ["src", "assets/img/korumaak/home/3.jpg", "alt", "Cover", 1, "rounded-3", "w-100", 2, "height", "470px", "object-fit", "cover"], ["id", "consommation", 1, "container", "mb-5", "pb-2", "pb-lg-5"], [1, "col-lg-5", "col-md-6"], [1, "col-md-6", "offset-lg-1"], ["src", "assets/img/korumaak/home/4.jpg", "alt", "Cover", 1, "rounded-3", "w-100", 2, "height", "470px", "object-fit", "cover"]], template: function AreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nos m\u00E9tiers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nos Solutions photovolta\u00EFques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "L'\u00E9nergie solaire: notre coeur de m\u00E9tier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Le professionnalisme de nos services d'installation garantit des solutions de production d\u2019\u00E9lectricit\u00E9 solaire harmonieuses, p\u00E9rennes et performantes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Installation et vente de Panneaux solaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Le professionnalisme de nos services d'installation garantit des solutions de production d\u2019\u00E9lectricit\u00E9 solaire harmonieuses, p\u00E9rennes et performantes. Nous r\u00E9pondons aux besoins des particuliers (individu,foyers, etc.), des professionnels (entreprises publics ou priv\u00E9es) et des collectivit\u00E9s du S\u00E9n\u00E9gal et de la sous-r\u00E9gion africaine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Pr\u00E9paration du site d\u2019installation (d\u00E9broussaillage, \u00E9lagage, abattage, etc.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Installation de l\u2019architecture de fixation des panneaux solaires au sol. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pose des panneaux sur les supports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Suivi et Accompagnement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "B\u00E9n\u00E9ficiez de notre expertise en dimensionnement de syst\u00E8mes photovolta\u00EFques con\u00E7us et dimensionn\u00E9s pour optimiser l'efficacit\u00E9 \u00E9nerg\u00E9tique dans un contexte local fluctuant. Notre approche sur mesure assure une production \u00E9nerg\u00E9tique solaire optimale adapt\u00E9e \u00E0 l'ensoleillement de votre zone d\u2019implantation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Services Apr\u00E8s-Vente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "B\u00E9n\u00E9ficiez de notre expertise en dimensionnement de syst\u00E8mes photovolta\u00EFques con\u00E7us et dimensionn\u00E9s pour optimiser l'efficacit\u00E9 \u00E9nerg\u00E9tique dans un contexte local fluctuant. Notre approche sur mesure assure une production \u00E9nerg\u00E9tique solaire optimale adapt\u00E9e \u00E0 l'ensoleillement de votre zone d\u2019implantation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Audit et Conseil \u00E9nerg\u00E9tique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Nos services d'audit et de conseil \u00E9nerg\u00E9tiques sont con\u00E7us pour r\u00E9pondre aux d\u00E9fis et aux besoins du march\u00E9. Nous vous aidons \u00E0 identifier des solutions pour r\u00E9duire les co\u00FBts d'\u00E9lectricit\u00E9 et \u00E0 exploiter au mieux le potentiel solaire local. Profitons du potentiel d'ensoleillement du S\u00E9n\u00E9gal et de l\u2019Afrique pour atteindre l\u2019auto-suffisance \u00E9nerg\u00E9tique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Production d'\u00E9lectricit\u00E9 photovolta\u00EFque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " La transition \u00E9nerg\u00E9tique participe \u00E0 r\u00E9duire la d\u00E9pendance aux \u00E9nergies fossiles et \u00E0 augmenter la part des \u00E9nergies renouvelables dans le mix \u00E9nerg\u00E9tique. La terre re\u00E7oit 173000 TWh d'\u00E9nergie solaire par an. Le photovolta\u00EFque permettant de convertir l\u2019\u00E9nergie solaire en \u00E9nergie \u00E9lectrique pr\u00E9sente de nombreux atouts, tels que la r\u00E9duction des \u00E9missions de CO2, la diversification des sources d\u2019\u00E9nergie, la cr\u00E9ation d\u2019emplois locaux et la baisse des co\u00FBts de production d\u2019\u00E9lectricit\u00E9. Avec Korumaak Activities la production d\u2019\u00E9nergie solaire devient abordable et accessible pour une alternative \u00E9nerg\u00E9tique p\u00E9renne et vertueuse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Autoconsommation collective et vente locale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " En tant que producteur d\u2019\u00E9nergie solaire, vous pouvez dans une d\u00E9marche de partage \u00E9nerg\u00E9tique choisir de faire profiter \u00E0 votre collectivit\u00E9, voisinage ou au r\u00E9seau local de distribution \u00E9nerg\u00E9tique, du surplus d\u2019\u00E9nergie solaire produite par vos panneaux solaires: Cette \u00E9nergie est alors dispatch\u00E9e entre plusieurs personnes situ\u00E9es sur des sites proches moyennant contrepartie financi\u00E8re. Cette approche v\u00E9hicule plusieurs avantages et assure un rapide retpur sur investissement. Chez Korumaak Activities nous vous accompagnons dans les d\u00E9marches n\u00E9cessaires \u00E0 la mise en place de cette opportunit\u00E9 de partage \u00E9nerg\u00E9tique ainsi que les aspects \u00E9conomiques associ\u00E9s y aff\u00E9rents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyZWEvYXJlYS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-area',
                templateUrl: './area.component.html',
                styleUrls: ['./area.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/etudes/etudes.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/etudes/etudes.component.ts ***!
  \**************************************************/
/*! exports provided: EtudesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtudesComponent", function() { return EtudesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_flipcard_flipcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/flipcard/flipcard.component */ "./src/app/components/flipcard/flipcard.component.ts");





function EtudesComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-flipcard", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", line_r1);
} }
class EtudesComponent {
    constructor() {
        this.listBusinessLines = [
            {
                // backTitle: "",
                backText: "Notre équipe spécialisée vous accompagne de la conception à la mise en service de votre centrale solaire, en s'adaptant à vos besoins spécifiques et à votre environnement.",
                frontTitle: "Installation de centrale solaire photovoltaïque",
                //frontText: "",
                imgSrc: "assets/icons/electric-tower.svg",
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "#F08517",
                backColor: "white",
                actionTitle: null,
                actionUrl: null,
                actionUrlFragment: 'centralesolaire',
            },
            {
                // backTitle: "",
                backText: "Parmi les différentes solutions photovoltaïques, les ombrières de parking sont les plus courantes. Elles permettent de produire de l’électricité tout en protégeant les véhicules du soleil et des intempéries. Elles offrent également des avantages économiques et environnementaux aux entreprises et aux collectivités, comme la valorisation de l’espace, la réduction de la facture énergétique, l’amélioration de l’image et la contribution à la transition énergétique.",
                frontTitle: "Installation d'ombriere solaire",
                //frontText: "",
                imgSrc: "assets/icons/solar-panel2.svg",
                actionTitle: null,
                actionUrl: null,
                actionUrlFragment: 'ombrieresolaire',
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "#F08517",
                backColor: "white",
            },
            {
                // backTitle: "",
                frontTitle: "Fourniture et installation de lampadaire solaire",
                backText: "Nos lampadaires solaires sont équipés de panneaux photovoltaïques intégrés, qui captent l'énergie solaire tout au long de la journée pour alimenter des ampoules LED haute performance pendant la nuit.",
                //frontText: "",
                imgSrc: "assets/icons/house.svg",
                actionTitle: null,
                actionUrl: null,
                actionUrlFragment: 'fourniture',
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "white",
                backColor: "#000",
            },
            {
                // backTitle: "",
                frontTitle: "Installation toiture solaire sur mesure",
                backText: "Vous pouvez opter pour une installation de vos panneaux solaires sur le toit de votre maison ou de votre entreprise. L’exposition à la lumière solaire et le rendement en seront maximisés.",
                //frontText: "",
                imgSrc: "assets/icons/house.svg",
                actionTitle: null,
                actionUrl: null,
                actionUrlFragment: 'toituresolaire',
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "white",
                backColor: "#000",
            },
            {
                // backTitle: "",
                backText: "Optimisez votre consommation énergétique grâce à nos services d'audit et de conseils personnalisés.",
                frontTitle: "Audit et conseils énergétiques professionnels pour une gestion éco-responsable",
                //frontText: "",
                imgSrc: "assets/icons/computer.svg",
                actionTitle: null,
                actionUrl: null,
                actionUrlFragment: 'audit',
                frontColor: "white",
                frontBgColor: "#F08517",
                backBgColor: "white",
                backColor: "#000",
            },
            {
                // backTitle: "",
                frontTitle: "Accompagnement pour une efficacité énergétique réussie",
                backText: "Nous vous offrons un accompagnement sur mesure pour optimiser votre efficacité énergétique.",
                //frontText: "",
                imgSrc: "assets/icons/solar-energy.svg",
                actionTitle: null,
                actionUrl: null,
                actionUrlFragment: 'accompagnement',
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "white",
                backColor: "#000",
            },
        ];
    }
    ngOnInit() {
    }
}
EtudesComponent.ɵfac = function EtudesComponent_Factory(t) { return new (t || EtudesComponent)(); };
EtudesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EtudesComponent, selectors: [["app-etudes"]], decls: 26, vars: 1, consts: [[1, "my-5", "pt-5", "pb-lg-4"], ["data-jarallax", "", "data-speed", "0.5", 1, "jarallax", "align-items-center", "justify-content-center", "border-0", "p-md-5", "p-4", "bg-secondary", "overflow-hidden", "mt-n3", 2, "max-height", "75vh", "background-image", "url(assets/img/korumaak/home/2.jpg)", "background-repeat", "no-repeat", "background-size", "cover"], [1, "img-overlay", "opacity-20"], [1, "content-overlay", "container", "py-3"], ["aria-label", "breadcrumb", 1, ""], [1, "breadcrumb"], [1, "breadcrumb-item", "text-light"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-6", "col-md-6", "col-sm-8", "py-md-5", "py-4", "px-0"], [1, "display-4", "mb-4", "pb-md-2", "text-light"], [1, "mb-sm-5", "mb-4", "pb-md-5", "pb-3", "lead", "text-light"], ["id", "conseil", 1, "container", "py-5", "mb-4"], [1, "mb-0", "pb-2", "me-auto", "fs-lg", 2, "max-width", "760px"], [1, "container", "mb-5"], [1, "row", "justify-content-center", "mb-5", "mt-5", "pt-5"], [1, "col"], [1, "row"], ["class", "col-md-4 mb-4", "data-aos", "zoom-in", 4, "ngFor", "ngForOf"], ["data-aos", "zoom-in", 1, "col-md-4", "mb-4"], [3, "data"]], template: function EtudesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "professionnels");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Vous etes professionnel ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Optimisez l'efficacit\u00E9 \u00E9nerg\u00E9tique de votre entreprise avec nos solutions solaires sur mesure. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Une \u00E9quipe d'experts \u00E0 vos c\u00F4t\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Fort d\u2019une \u00E9quipe d\u2019ing\u00E9nieurs de diff\u00E9rents horizons, nous vous guarantissons la r\u00E9ussite de vos chantiers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EtudesComponent_div_25_Template, 2, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listBusinessLines);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_flipcard_flipcard_component__WEBPACK_IMPORTED_MODULE_3__["FlipcardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V0dWRlcy9ldHVkZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtudesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-etudes',
                templateUrl: './etudes.component.html',
                styleUrls: ['./etudes.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/etudes/etudes.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/etudes/etudes.module.ts ***!
  \***********************************************/
/*! exports provided: EtudesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtudesModule", function() { return EtudesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _etudes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etudes.component */ "./src/app/pages/etudes/etudes.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_components_flipcard_flipcard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/flipcard/flipcard.module */ "./src/app/components/flipcard/flipcard.module.ts");






class EtudesModule {
}
EtudesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EtudesModule });
EtudesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EtudesModule_Factory(t) { return new (t || EtudesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_components_flipcard_flipcard_module__WEBPACK_IMPORTED_MODULE_4__["FlipcardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EtudesModule, { declarations: [_etudes_component__WEBPACK_IMPORTED_MODULE_2__["EtudesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_flipcard_flipcard_module__WEBPACK_IMPORTED_MODULE_4__["FlipcardModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_etudes_component__WEBPACK_IMPORTED_MODULE_2__["EtudesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EtudesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_etudes_component__WEBPACK_IMPORTED_MODULE_2__["EtudesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_components_flipcard_flipcard_module__WEBPACK_IMPORTED_MODULE_4__["FlipcardModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ],
                exports: [_etudes_component__WEBPACK_IMPORTED_MODULE_2__["EtudesComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_flipcard_flipcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/flipcard/flipcard.component */ "./src/app/components/flipcard/flipcard.component.ts");





function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("min-height: 75vh; background: url(", car_r5.img, ") center no-repeat; background-size: cover; transition: background-image 0.25s ease-in-out; -webkit-transition: background-image 0.25s ease-in-out;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r5.header);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", car_r5.description, " ");
} }
function HomeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expertise_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", expertise_r6.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](expertise_r6.name);
} }
function HomeComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-flipcard", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", line_r7);
} }
function HomeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", country_r8.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", country_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", country_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r8.name);
} }
function HomeComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const line_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", line_r9.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r9.description);
} }
class HomeComponent {
    constructor(platformId) {
        this.platformId = platformId;
        this.listBusinessLines = [
            {
                // backTitle: "",
                backText: "Le professionnalisme de nos services d'installation garantit des solutions de production d’électricité solaire harmonieuses, pérennes et performantes. Nous répondons aux besoins des particuliers (individu,foyers, …), des professionnels (entreprises publics ou privées) et des collectivités du Sénégal et de la sous-région africaine.",
                frontTitle: "Installation et vente de Panneaux solaires",
                //frontText: "",
                imgSrc: "assets/icons/solar-energy.svg",
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "#F08517",
                backColor: "white",
                actionTitle: "En savoir plus",
                actionUrl: "/our-expertise",
                actionUrlFragment: 'energy-expertise',
            },
            {
                // backTitle: "",
                backText: "Pour les industries: Installation de centrales solaires PV connectés au réseau ou isolés, de systèmes fuel-save. Expertise et proposition de solutions d’amélioration des performances et réduction de la facture d’électricité. Pour les résidences et commerces: Systèmes autonomes, Systèmes hybrides, Back up énergétique, Eau chaude sanitaire etc...",
                frontTitle: "Production d'électricité photovoltaïque",
                //frontText: "",
                imgSrc: "assets/icons/solar-panel2.svg",
                actionTitle: "En savoir plus",
                actionUrl: "/our-expertise",
                actionUrlFragment: 'elec-expertise',
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "#F08517",
                backColor: "white",
            },
            {
                // backTitle: "",
                backText: "En tant que producteur d’énergie solaire, vous pouvez dans une démarche de partage énergétique choisir de faire profiter à votre collectivité, voisinage ou au réseau local de distribution énergétique, du surplus d’énergie solaire produite par vos panneaux solaires: Cette énergie est alors dispatchée entre plusieurs personnes situées sur des sites proches moyennant contrepartie financière. Cette approche véhicule plusieurs avantages et assure un rapide retpur sur investissement. Chez Korumaak Activities nous vous accompagnons dans les démarches nécessaires à la mise en place de cette opportunité de partage énergétique ainsi que les aspects économiques associés y afférents.",
                frontTitle: "Autoconsommation collective et vente locale",
                //frontText: "",
                imgSrc: "assets/icons/house.svg",
                actionTitle: "En savoir plus",
                actionUrl: "/our-expertise",
                actionUrlFragment: 'autoconsommation',
                frontColor: "#000",
                frontBgColor: "white",
                backBgColor: "white",
                backColor: "#000",
            },
            {
                // backTitle: "",
                backText: "Nos services d'audit et de conseil énergétiques sont conçus pour répondre aux défis et aux besoins du marché. Nous vous aidons à identifier des solutions pour réduire les coûts d'électricité et à exploiter au mieux le potentiel solaire local. Profitons du potentiel d'ensoleillement du Sénégal et de l’Afrique pour atteindre l’auto-suffisance énergétique.",
                frontTitle: "Audit et Conseil énergétique",
                //frontText: "",
                imgSrc: "assets/icons/computer.svg",
                actionTitle: "En savoir plus",
                actionUrl: "/our-expertise",
                actionUrlFragment: 'audit-conseil',
                frontColor: "white",
                frontBgColor: "#F08517",
                backBgColor: "white",
                backColor: "#000",
            }
        ];
        this.listAreaExpertise = [
            {
                id: 1,
                name: "INSTALLATION ET VENTE DE PANNEAUX SOLAIRES",
                icon: "assets/img/korumaak/icons/civilengineer.png",
                description: "",
                url: ""
            },
            {
                id: 2,
                name: "PRODUCTION D'ÉLECTRICITÉ PHOTOVOLTAÏQUE",
                icon: "assets/img/korumaak/icons/skyscraper.png",
                description: "",
                url: ""
            },
            {
                id: 3,
                name: "AUTOCONSOMMATION COLLECTIVE ET VENTE LOCALE",
                icon: "assets/img/korumaak/icons/excavator2.png",
                description: "",
                url: ""
            },
            {
                id: 4,
                name: "SERVICES D’ACCOMPAGNEMENTS ET SAV",
                icon: "assets/img/korumaak/icons/ingenieur.png",
                description: "",
                url: ""
            },
            {
                id: 5,
                name: "AUDIT ET CONSEIL ÉNERGÉTIQUE",
                icon: "assets/img/korumaak/icons/road.png",
                description: "",
                url: ""
            },
        ];
        this.listCaroussels = [
            {
                id: 1,
                url: "",
                img: "assets/img/korumaak/home/1.jpg",
                subheader: "Une équipe compétente pour",
                header: "Pour une énergie durable et propre",
                description: "Korumaak Activities, au tournant d'un avenir énergétique durable pour le Sénégal et l'Afrique."
            },
            {
                id: 2,
                url: "",
                img: "assets/img/korumaak/home/2.jpg",
                subheader: "Satisfaction garantie, à travers",
                header: "Pour une énergie durable et propre",
                description: "Inwé ndiasnoorida ndjom maak, to mbaru ndamlox teen na doolé fé modj na na Sénégal fu na Afrique."
            },
            {
                id: 3,
                url: "",
                img: "assets/img/korumaak/home/3.jpg",
                subheader: "Un suivi transparent, pour",
                header: "Confiez vos réalisations à des experts",
                description: "Ëellëg gu Saax Ci Walu enerji Sénégal ak Afrique."
            },
        ];
        this.listBusinessLine = [
            {
                id: 1,
                url: "/pole-etudes",
                name: "Analyse de votre besoin",
                description: "Afin de vous proposer l'offre la mieux adaptée à votre besoin, nous prenons le temps de compendre et d'analyser ce dernier.",
                btn: "En savoir plus",
                img: "assets/img/korumaak/expertise/2.png"
            },
            {
                id: 2,
                url: "/pole-etudes",
                name: "Proposition d'une offre adaptée",
                description: "Nous vous proposons ensuite un devis bien étudié avec des facilités de paiement.",
                btn: "En savoir plus",
                img: "assets/img/korumaak/expertise/1.png"
            },
            {
                id: 3,
                url: "/pole-travaux",
                name: "Etudes et installations",
                description: "Nous vous porposons des kits solaires adpatés à vos besoins, ou réalisons une étude spécifique. Nous faisons les installations conformément aux normes et standars internationaux.",
                btn: "En savoir plus",
                img: "assets/img/korumaak/expertise/2.jpg"
            }
        ];
        this.listCountries = [
            {
                name: "Sénégal",
                img: "assets/img/korumaak/city/dakar.jpg",
                url: ""
            },
            {
                name: "Côte d'Ivoire",
                img: "assets/img/korumaak/city/abidjan.jpg",
                url: ""
            },
            {
                name: "Burkina Faso",
                img: "assets/img/korumaak/city/ouaga.jpg",
                url: ""
            },
            {
                name: "Togo",
                img: "assets/img/korumaak/city/lome.jpg",
                url: ""
            },
            {
                name: "Ghana",
                img: "assets/img/korumaak/city/accra.jpg",
                url: ""
            },
            {
                name: "Benin",
                img: "assets/img/korumaak/city/cotonou.jpg",
                url: ""
            }
        ];
        this.listProjectItems = [
            { id: 1, name: "Génie Civil" },
            { id: 2, name: "Bâtiment" },
        ];
        this.selectedProjectId = 1;
        this.listofProjects = [];
    }
    ngOnInit() {
        // this.listofProjects = this.getRandomSubarray(this.listProjects, 2);
        // if (isPlatformBrowser(this.platformId)) {
        //   this.showProjectTimer = interval(7000).subscribe(() => 
        //     {
        //       this.listofProjects = this.getRandomSubarray(this.listProjects, 2);
        //     }
        //   )
        // }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.showProjectTimer) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    getSelectedItemName() {
        const selectItem = this.listProjectItems.filter(_item => (_item === null || _item === void 0 ? void 0 : _item.id) !== this.selectedProjectId);
        return selectItem.length > 0 ? selectItem[0].name : 'Sélectionner';
    }
    selectProject(id) {
        this.selectedProjectId = id;
    }
    getRandomSubarray(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }
    /**getListSelectedProjects(): any[] {
      return this.getRandomSubarray(this.listProjects, 2);
    }**/
    visitWebSite() {
        window.scroll(0, 650);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 72, vars: 5, consts: [[1, "tns-carousel-wrapper", "mb-5"], ["data-carousel-options", "{\"mode\": \"gallery\", \"speed\": 50, \"autoplay\": \"true\", \"responsive\": {\"0\":{\"nav\":true, \"controls\": false},\"992\":{\"nav\":false, \"controls\": true}}}", 1, "tns-carousel-inner"], ["class", "d-flex justify-content-center align-items-center px-lg-5", 3, "style", 4, "ngFor", "ngForOf"], [1, "container", "mb-5"], [1, "d-flex", "align-items-center", "justify-content-between", "mb-3"], [1, "h3", "mb-0"], ["routerLink", "/nos-offres", 1, "btn", "btn-link", "fw-normal", "ms-md-3", "pb-0"], [1, "fi-arrow-long-right", "ms-2"], [1, "tns-carousel-wrapper", "tns-controls-outside-xxl", "tns-nav-outside", "tns-nav-outside-flush", "mx-n2"], ["data-carousel-options", "{\"items\": 5, \"controls\": false, \"speed\": 500, \"autoplay\": \"true\", \"responsive\": {\"0\":{\"items\":2},\"500\":{\"items\":3},\"768\":{\"items\":4},\"992\":{\"items\":4}}}", 1, "tns-carousel-inner", "row", "gx-4", "mx-0", "py-3"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "bg-secondary", "mb-5", "py-3"], [1, "container", "team-section"], [1, "row", "justify-content-center"], ["data-aos", "fade-down", 1, "col-md-6", "d-flex", "justify-content-center", "align-items-center"], ["src", "assets/img/korumaak/home/4.jpg", 1, "work-img"], [1, "col-md-6"], [1, "row"], [1, "col-md-12"], [2, "font-weight", "300"], [1, "mb-0"], ["data-aos", "fade-right", 1, "col-md-12"], [1, "box__right", "bg-light"], [1, "text"], [1, "h5", "mb-0", "text-primary"], [1, "m-0", "p-0"], [1, "box__left", "bg-primary"], [1, "h5", "mb-0", "text-light"], [1, "m-0", "p-0", "text-light"], [1, "row", "justify-content-center", "mb-5", "mt-5", "pt-5"], [1, "col"], [1, "col-md-8", "d-flex", "align-items-center", "center"], [2, "max-width", "769px"], [1, "mb-2"], [1, "mb-sm-4"], ["class", "col-md-4 mb-4", "data-aos", "zoom-in", 4, "ngFor", "ngForOf"], [1, "bg-primary", "mb-5", "py-5"], [1, "container"], [1, "h3", "mb-0", "text-light"], ["data-carousel-options", "{\"items\": 4, \"speed\": 800, \"autoplay\": \"true\", \"responsive\": {\"0\":{\"items\":1},\"500\":{\"items\":2},\"768\":{\"items\":3},\"992\":{\"items\":4}}}", 1, "tns-carousel-inner", "row", "h-100", "d-flex", "gx-4", "mx-0", "py-md-4", "py-3"], ["class", "col h-100", 4, "ngFor", "ngForOf"], [1, "container", "mb-5", "mt-n1", "mt-lg-0"], [1, "tns-carousel-wrapper", "tns-nav-outside", "tns-nav-outside-flush", "mx-n2"], ["data-carousel-options", "{\"items\": 3, \"controls\": false, \"responsive\": {\"0\":{\"items\":1},\"500\":{\"items\":2},\"768\":{\"items\":3}}}", 1, "tns-carousel-inner", "row", "gx-4", "mx-0", "py-3"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "align-items-center", "px-lg-5"], [1, "img-overlay", "opacity-20"], [1, "content-overlay", "d-flex", "justify-content-center", "align-items-center"], [2, "max-width", "52rem", "z-index", "10"], [1, "text-center", "text-lg-nowrap", "mt-5", "p-2", "py-sm-2"], [1, "text-light", "display-5", "from-start", "delay-1"], [1, "fs-lg", "text-light", "pb-3", "from-start", "delay-2"], [1, "col-3"], [1, "icon-box", "card", "card-body", "h-100", "border-0", "shadow-md", "bg-secondary", "card-hover", "h-100", 3, "href"], [1, "bg-primary", "mb-2", 2, "width", "50px", "height", "6px"], [1, "icon-box-title", "fs-base", "mb-0"], ["data-aos", "zoom-in", 1, "col-md-4", "mb-4"], [3, "data"], [1, "col", "h-100"], [1, "card", "shadow-sm", "card-hover", "border-0", 3, "href"], [1, "card-img-top", "card-img-hover"], [1, "img-overlay", "opacity-50"], [2, "height", "16rem", "object-fit", "cover", 3, "src", "alt"], [1, "card-body", "text-center", 2, "min-height", "6rem"], [1, "mb-0", "fs-base", "text-nav"], [1, "card", "card-hover", "border-0", "h-100", "pb-2", "pb-sm-3", "px-sm-3", "text-center"], ["alt", "Illustration", 1, "d-block", "w-100", "my-3", "rounded-3", 2, "height", "16rem", "object-fit", "cover", 3, "src"], [1, "card-body"], [1, "h4", "card-title"], [1, "card-text", "fs-sm"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 9, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Une offre de service adapt\u00E9e \u00E0 vos besoins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Tout voir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_div_12_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Faites confiance \u00E0 une \u00E9quipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " dynamique et professionnelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Notre force r\u00E9side en nos valeurs car elles guident nos actions au quotidien et constituent le socle de travail de notre \u00E9quipe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Une \u00E9quipe professionnelle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "La comp\u00E9tence, l\u2019excellence, le savoir-faire et la formation professionnelle continue constituent notre cr\u00E9do.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Une \u00E9quipe qui innove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Notre \u00E9quipe se perfectionne continuellement pour vous apporter des solutions toujours plus innovantes et \u00E0 la pointe de la technologie.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Une \u00E9quipe int\u00E8gre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Maintenir des relations de proximit\u00E9 et transparentes avec nos clients pour satisfaire leurs attentes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Un accompagnent rigoureux et un service apr\u00E8s vente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "guarantis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " B\u00E9n\u00E9ficiez de notre expertise en dimensionnement de syst\u00E8mes photovolta\u00EFques con\u00E7us et dimensionn\u00E9s pour optimiser l'efficacit\u00E9 \u00E9nerg\u00E9tique dans un contexte local fluctuant. Notre approche sur mesure assure une production \u00E9nerg\u00E9tique solaire optimale adapt\u00E9e \u00E0 l'ensoleillement de votre zone d\u2019implantation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, HomeComponent_div_59_Template, 2, 1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "section", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nous intervenons dans la sous-r\u00E9gion ouest-africaine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, HomeComponent_div_67_Template, 8, 4, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, HomeComponent_div_71_Template, 8, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCaroussels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listAreaExpertise);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listBusinessLines);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCountries);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listBusinessLine);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_flipcard_flipcard_component__WEBPACK_IMPORTED_MODULE_3__["FlipcardComponent"]], styles: [".team-section[_ngcontent-%COMP%] {\n    padding: 5em 0.7rem;\n    .work-img {\n      height: 680px;\n      width: auto;\n      border-radius: 1rem;\n    }\n\n    .box__right,\n    .box__left {\n      display: flex;\n      cursor: pointer;\n      margin: 1.6rem 0;\n      padding: 1em;\n      border-radius: 0.5rem;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n      transition: transform 0.5s ease-out;\n    }\n\n    .box__right {\n      margin-left: 50px;\n      &:hover {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        transform: translate(-50px, 0);\n      }\n    }\n    .box__left {\n      margin-right: 50px;\n      &:hover {\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n        transform: translate(50px, 0);\n      }\n    }\n}\n\n\n\n@media (max-width: 768px) {\n    .team-section[_ngcontent-%COMP%] {\n      padding: 3.2em 0.7rem;\n      .work-img {\n        display: none;\n      }\n      .box__right,\n      .box__left {\n        margin: 1rem 0rem;\n        &:hover {\n          box-shadow: var(--button-shadow-hover);\n          transform: translate(0, -5px);\n        }\n      }\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkI7TUFDRSxhQUFhO01BQ2IsV0FBVztNQUNYLG1CQUFtQjtJQUNyQjs7SUFFQTs7TUFFRSxhQUFhO01BQ2IsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixZQUFZO01BQ1oscUJBQXFCO01BQ3JCLDBDQUEwQztNQUMxQyxtQ0FBbUM7SUFDckM7O0lBRUE7TUFDRSxpQkFBaUI7TUFDakI7UUFDRSwwQ0FBMEM7UUFDMUMsOEJBQThCO01BQ2hDO0lBQ0Y7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQjtRQUNFLDBDQUEwQztRQUMxQyw2QkFBNkI7TUFDL0I7SUFDRjtBQUNKOzs7O0FBSUE7SUFDSTtNQUNFLHFCQUFxQjtNQUNyQjtRQUNFLGFBQWE7TUFDZjtNQUNBOztRQUVFLGlCQUFpQjtRQUNqQjtVQUNFLHNDQUFzQztVQUN0Qyw2QkFBNkI7UUFDL0I7TUFDRjtJQUNGO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFtLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDVlbSAwLjdyZW07XG4gICAgLndvcmstaW1nIHtcbiAgICAgIGhlaWdodDogNjgwcHg7XG4gICAgICB3aWR0aDogYXV0bztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgfVxuXG4gICAgLmJveF9fcmlnaHQsXG4gICAgLmJveF9fbGVmdCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luOiAxLjZyZW0gMDtcbiAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5ib3hfX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwcHgsIDApO1xuICAgICAgfVxuICAgIH1cbiAgICAuYm94X19sZWZ0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwcHgsIDApO1xuICAgICAgfVxuICAgIH1cbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC50ZWFtLXNlY3Rpb24ge1xuICAgICAgcGFkZGluZzogMy4yZW0gMC43cmVtO1xuICAgICAgLndvcmstaW1nIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5ib3hfX3JpZ2h0LFxuICAgICAgLmJveF9fbGVmdCB7XG4gICAgICAgIG1hcmdpbjogMXJlbSAwcmVtO1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tc2hhZG93LWhvdmVyKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNXB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/join-us/join-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/join-us/join-us.component.ts ***!
  \****************************************************/
/*! exports provided: JoinUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinUsComponent", function() { return JoinUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





function JoinUsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const area_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card border-0 shadow-sm card-hover bg-faded-", area_r1.color, " h-100");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](area_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", area_r1.description, " ");
} }
class JoinUsComponent {
    constructor() {
        this.listBusinessLine = [
            {
                id: 1,
                url: "",
                color: "primary",
                name: "Installation et vente de Panneaux solaires",
                description: "Nous proposons des panneaux solaires adaptés robustes et adaptés aux conditions climatiques du Sénégal et de la sous région Ouest Africaine.",
            },
            {
                id: 2,
                url: "",
                color: "warning",
                name: "Production d'électricité photovoltaïque",
                description: "Au sol, dans un parking ou sur toiture, nous assurrons une production d'électricité optimale grâce au bon dimensionnement à la sélection des panneaux et à la qualité des installations.",
            },
            {
                id: 3,
                url: "",
                color: "info",
                name: "Autoconsommation collective et vente locale",
                description: "Une de valeurs africaines étant le partage, nous permettons le partage de l'énergie à l'intérieur de petits réseaux locaux.",
            },
            {
                id: 4,
                url: "",
                color: "accent",
                name: "Services d’accompagnements et SAV",
                description: "Nous assurons un suivi continu des installations que l'on réalise. Vos installations sont garnties 2 ans.",
            },
            {
                id: 5,
                url: "",
                color: "danger",
                name: "Audit et Conseil énergétique",
                description: "La meilleure énergie étant celle que l'on ne consomme pas, nous vous aidons à réduire considérablement vos dépenses énergétiques.",
            }
        ];
    }
    ngOnInit() {
    }
}
JoinUsComponent.ɵfac = function JoinUsComponent_Factory(t) { return new (t || JoinUsComponent)(); };
JoinUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinUsComponent, selectors: [["app-join-us"]], decls: 80, vars: 1, consts: [[1, "container", "mt-5", "mb-md-4", "pt-5"], ["aria-label", "breadcrumb", 1, "mb-3", "pt-md-3"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "container", "mb-5", "pb-2", "pb-md-4", "pb-lg-5"], [1, "mx-md-0", "mx-auto", "text-md-start", "text-center", 2, "max-width", "456px"], [1, "mb-4"], [1, "mb-0", "fs-lg", "text-muted"], [1, "mb-md-5", "mb-4", "pb-md-4"], [1, "tns-carousel-wrapper", "tns-controls-outside-xxl", "tns-nav-outside", "tns-nav-outside-flush", "mx-n2"], ["data-carousel-options", "{\"items\": 5, \"controls\": false, \"speed\": 500, \"autoplay\": \"true\", \"responsive\": {\"0\":{\"items\":2},\"500\":{\"items\":3},\"768\":{\"items\":4},\"992\":{\"items\":4}}}", 1, "tns-carousel-inner", "row", "gx-4", "mx-0", "py-3"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "row", "align-items-md-start", "align-items-center", "gy-4"], [1, "col-lg-5", "col-md-6"], [1, "row", "g-4"], [1, "col-md-12"], ["href", "mailto:contact@korumaak.com", 1, "icon-box", "card", "card-hover", "h-100"], [1, "card-body"], [1, "icon-box-media", "text-primary", "rounded-circle", "shadow-sm", "mb-3"], [1, "fi-mail"], [1, "d-block", "mb-1", "text-body"], [1, "h4", "text-primary", "mb-0", "opacity-90"], ["target", "_blank", "href", "https://wa.me/+xxxxxx", 1, "icon-box", "card", "card-hover", "h-100"], [1, "fi-whatsapp"], ["href", "tel:+22xxxxx", 1, "icon-box", "card", "card-hover", "h-100"], [1, "fi-device-mobile"], [1, "col-md-6", "offset-lg-1"], [1, "card", "border-0", "bg-faded-primary", "p-sm-3", "p-2"], ["method", "post", "action", "https://send.pageclip.co/xxxxxxxxxxx", "novalidate", "", 1, "needs-validation"], ["for", "contact-name", 1, "form-label"], ["name", "name", "id", "contact-name", "type", "text", "required", "", 1, "form-control", "form-control-lg"], [1, "invalid-tooltip", "mt-1"], ["for", "contact-email", 1, "form-label"], ["id", "contact-email", "name", "email", "type", "email", "required", "", 1, "form-control", "form-control-lg"], ["id", "subject", "name", "subject", "aria-label", "Select subject", "required", "", 1, "form-select", "mb-4"], ["value", "Demande de devis"], ["value", "Demande d'information"], ["value", "Autres"], ["for", "contact-comment", 1, "form-label"], ["name", "body", "placeholder", "D\u00E9crivez nous votre profil", "id", "contact-comment", "rows", "4", "required", "", 1, "form-control"], [1, "pt-sm-2", "pt-1"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "w-sm-auto", "w-100"], [1, "col"], [1, "card-body", "icon-box"], [1, "h5", "card-title"], [1, "card-text", "fs-sm"]], template: function JoinUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Notre \u00E9quique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Vous avez un nouveau projet?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Contactez Korumaak, votre \u00E9quipe d'experts ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JoinUsComponent_div_17_Template, 7, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "contact@korumaak.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00C9crivez nous sur WhatsApp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "(+33) 778xxxxxxxx");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Nous appeler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(+22x) 7xxxx ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Nom Pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Nom et pr\u00E9nom obligatoires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Votre Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Email obligatoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Demande de devis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Demande d'information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Autres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "textarea", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Laisser nous un message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Envoyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listBusinessLine);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2pvaW4tdXMvam9pbi11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-join-us',
                templateUrl: './join-us.component.html',
                styleUrls: ['./join-us.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/join-us/join-us.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/join-us/join-us.module.ts ***!
  \*************************************************/
/*! exports provided: JoinUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinUsModule", function() { return JoinUsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _join_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./join-us.component */ "./src/app/pages/join-us/join-us.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class JoinUsModule {
}
JoinUsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: JoinUsModule });
JoinUsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function JoinUsModule_Factory(t) { return new (t || JoinUsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](JoinUsModule, { declarations: [_join_us_component__WEBPACK_IMPORTED_MODULE_2__["JoinUsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]], exports: [_join_us_component__WEBPACK_IMPORTED_MODULE_2__["JoinUsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinUsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_join_us_component__WEBPACK_IMPORTED_MODULE_2__["JoinUsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                exports: [_join_us_component__WEBPACK_IMPORTED_MODULE_2__["JoinUsComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/travaux/travaux.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/travaux/travaux.component.ts ***!
  \****************************************************/
/*! exports provided: TravauxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravauxComponent", function() { return TravauxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TravauxComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productImgSrc_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", productImgSrc_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TravauxComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const productImgSrc_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", productImgSrc_r3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class TravauxComponent {
    constructor() {
        this.panels = [
            "assets/img/korumaak/products/1.jpeg",
            "assets/img/korumaak/products/2.jpeg",
            "assets/img/korumaak/products/3.jpeg",
            "assets/img/korumaak/products/1.jpeg",
            "assets/img/korumaak/products/2.jpeg",
            "assets/img/korumaak/products/3.jpeg",
            "assets/img/korumaak/products/3.jpeg",
        ];
        this.kits = [
            "assets/img/korumaak/products/4.jpeg",
            "assets/img/korumaak/products/5.jpeg",
            "assets/img/korumaak/products/6.jpeg",
            "assets/img/korumaak/products/7.jpeg",
            "assets/img/korumaak/products/4.jpeg",
            "assets/img/korumaak/products/5.jpeg",
            "assets/img/korumaak/products/6.jpeg",
            "assets/img/korumaak/products/7.jpeg",
        ];
    }
    ngOnInit() {
    }
}
TravauxComponent.ɵfac = function TravauxComponent_Factory(t) { return new (t || TravauxComponent)(); };
TravauxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TravauxComponent, selectors: [["app-travaux"]], decls: 91, vars: 2, consts: [[1, "container-fluid", "my-5", "pt-5", "pb-lg-4", "px-xxl-4"], ["data-jarallax", "", "data-speed", "0.5", 1, "jarallax", "card", "align-items-center", "justify-content-center", "border-0", "p-md-5", "p-4", "bg-secondary", "overflow-hidden", "mt-n3", 2, "min-height", "65vh", "background-image", "url(assets/img/korumaak/home/1.jpg)"], [1, "img-overlay", "opacity-40"], [1, "content-overlay", "container", "py-3"], ["aria-label", "breadcrumb", 1, ""], [1, "breadcrumb"], [1, "breadcrumb-item", "text-light"], ["routerLink", "/"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "col-lg-6", "col-md-6", "col-sm-8", "py-md-5", "py-4", "px-0"], [1, "display-4", "mb-4", "pb-md-2", "text-light"], ["id", "catalogue", 1, "container", "mb-5", "pb-2", "pb-lg-5"], [1, "mb-2", "pb-2", "me-auto", "fs-lg", 2, "max-width", "760px"], [1, "list-unstyled", "pb-lg-3"], [1, "d-flex"], [1, "fi-check", "mt-1", "me-2", "pe-1", "text-primary"], [1, "tns-carousel-wrapper", "tns-controls-outside-xxl", "tns-nav-outside", "tns-nav-outside-flush", "mx-n2"], ["data-carousel-options", "{\"items\": 5, \"controls\": false, \"speed\": 400, \"autoplay\": \"false\", \"responsive\": {\"0\":{\"items\":2},\"500\":{\"items\":3},\"768\":{\"items\":4},\"992\":{\"items\":4}}}", 1, "tns-carousel-inner", "row", "gx-4", "mx-0", "py-3"], ["class", "col", 4, "ngFor", "ngForOf"], ["id", "kits-solaires", 1, "container", "mb-5", "pb-2", "pb-lg-5"], [1, "row", "align-items-lg-center", "gy-4"], [1, "col-md-6"], ["src", "assets/img/korumaak/home/2.jpg", "alt", "Cover", 1, "rounded-3", "w-100", 2, "height", "470px", "object-fit", "cover"], [1, "col-lg-5", "offset-lg-1", "col-md-6"], [1, "mb-lg-4"], [1, "mb-lg-4", "fs-md", "text-muted"], ["id", "paneaux-photovoltaiques", 1, "container", "mb-5", "pb-2", "pb-lg-5"], ["id", "installations", 1, "container", "mb-5", "pb-2", "pb-lg-5"], [1, "col-lg-5", "col-md-6"], [1, "col-md-6", "offset-lg-1"], ["src", "assets/img/korumaak/home/5.png", "alt", "Cover", 1, "rounded-3", "w-100", 2, "height", "470px", "object-fit", "cover"], [1, "col"], [1, "icon-box-media-box", "h-100", "card", "card-body", "border-0", "shadow-sm", "d-flex", "align-items-center", "text-center"], [1, "h-100", "d-flex", "align-items-center"], ["alt", "product", 3, "src"], [3, "src"]], template: function TravauxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nos offres");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nos Solutions photovolta\u00EFques");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Des offres qualitatives adapt\u00E9es \u00E0 vos besoins");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Nous avons plusieurs types de panneaux solaires que nous proposons en fonction de vos besoins. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Panneaux solaires polycristallins avec des puissances allant de 100W \u00E0 550W ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Panneaux solaires monocristallins avec gammes de puissance 100W \u00E0 550W ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Panneaux solaires flexibles avec gammes de puissance de 100W et 160W ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TravauxComponent_div_31_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Installation et vente de Panneaux solaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Le professionnalisme de nos services d'installation garantit des solutions de production d\u2019\u00E9lectricit\u00E9 solaire harmonieuses, p\u00E9rennes et performantes. Nous r\u00E9pondons aux besoins des particuliers (individu,foyers, etc.), des professionnels (entreprises publics ou priv\u00E9es) et des collectivit\u00E9s du S\u00E9n\u00E9gal et de la sous-r\u00E9gion africaine. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Centrales solaires ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ombri\u00E8res photovolta\u00EFques ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Toitures photovolta\u00EFques ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Solaire pour \u00E9clairage pubic ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "section", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Des kits solaires pour tous les budgets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Nous avons plusieurs kits solaires autonomes solaires que nous proposons en fonction de vos besoins. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Kit autonome de 3 Kw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Kit autonome de 5 Kw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Kit autonome de 10 Kw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, TravauxComponent_div_71_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Diff\u00E9rents types d'installation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Nous proposons des syst\u00E8mes flexibles de production d\u2019\u00E9nergie solaire totalement autonomes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Panneaux solaires au sol ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Panneaux solaires sur toiture ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Parking solaires ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.panels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kits);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyYXZhdXgvdHJhdmF1eC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravauxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-travaux',
                templateUrl: './travaux.component.html',
                styleUrls: ['./travaux.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/travaux/travaux.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/travaux/travaux.module.ts ***!
  \*************************************************/
/*! exports provided: TravauxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravauxModule", function() { return TravauxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _travaux_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travaux.component */ "./src/app/pages/travaux/travaux.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class TravauxModule {
}
TravauxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TravauxModule });
TravauxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TravauxModule_Factory(t) { return new (t || TravauxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TravauxModule, { declarations: [_travaux_component__WEBPACK_IMPORTED_MODULE_2__["TravauxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_travaux_component__WEBPACK_IMPORTED_MODULE_2__["TravauxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TravauxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_travaux_component__WEBPACK_IMPORTED_MODULE_2__["TravauxComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                ],
                exports: [_travaux_component__WEBPACK_IMPORTED_MODULE_2__["TravauxComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/canonical.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/canonical.service.ts ***!
  \*********************************************/
/*! exports provided: CanonicalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanonicalService", function() { return CanonicalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * see error: https://stackoverflow.com/questions/58420285/angular-universal-npm-run-servessr-returns-document-is-not-defined
 */
class CanonicalService {
    constructor(dom) {
        this.dom = dom;
    }
    setCanonicalURL(url) {
        const canURL = url == undefined ? this.dom.URL : url;
        const link = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(link);
        link.setAttribute('href', canURL);
    }
}
CanonicalService.ɵfac = function CanonicalService_Factory(t) { return new (t || CanonicalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
CanonicalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CanonicalService, factory: CanonicalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanonicalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "./src/utils/loadjs.ts":
/*!*****************************!*\
  !*** ./src/utils/loadjs.ts ***!
  \*****************************/
/*! exports provided: loadAllJs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllJs", function() { return loadAllJs; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 *  @description Allow injecting js file at route event change
 *  The most likely scenario is that those scripts rely on all of the html content
 *  being present at their respective time of initial execution. Or more specifically
 *  they are designed for static HTML pages. A SPA (Angular or otherwise) is dynamic by
 *  nature which would make such scripts fundamentally incompatible without additional code
 *  within the application to trigger the scripts to re-analyze the DOM
 *  when relevant elements are added or modified.
 *  see issue: https://github.com/angular/angular-cli/issues/13402
 */


/**
 * @description When we navigate from one page to another `scope of js funtions`
 * finished so we have to call it again.
 */
const loadAllJs = (router) => {
    return router.events
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]))
        .subscribe(event => {
        getScript('assets/js/src/theme.min.js');
    }, err => console.log('There was an error when loading js file'));
};
/**
 * @description Attached a specific js script specified by `url` to document.
 */
const getScript = (url) => {
    const node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
};


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sanam/Projets/korumaak-activities/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map