"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _core_components_generic_error_generic_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/generic-error/generic-error.component */ 8387);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/enums/routes.enum */ 7185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: _core_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__.Routes.about,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about_about_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 6985)).then(m => m.AboutModule)
}, {
  path: _core_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__.Routes.work,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_work_work_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./work/work.module */ 672)).then(m => m.WorkModule)
}, {
  path: _core_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__.Routes.home,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomeModule)
}, {
  path: _core_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__.Routes.empty,
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomeModule)
}, {
  path: _core_enums_routes_enum__WEBPACK_IMPORTED_MODULE_1__.Routes.any,
  component: _core_components_generic_error_generic_error_component__WEBPACK_IMPORTED_MODULE_0__.GenericErrorComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_models_business_settings_business_settings_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models/business-settings/business-settings.model */ 1829);
/* harmony import */ var src_app_core_models_route_def_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/models/route-def.model */ 8758);
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 591);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_business_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/business-settings.service */ 2791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_core_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/components */ 1657);









function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
class AppComponent {
  constructor(businessSettingsService) {
    this.businessSettingsService = businessSettingsService;
    this.routes = [new src_app_core_models_route_def_model__WEBPACK_IMPORTED_MODULE_1__.RouteDef(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.Routes.about, 'about'), new src_app_core_models_route_def_model__WEBPACK_IMPORTED_MODULE_1__.RouteDef(src_app_core_enums__WEBPACK_IMPORTED_MODULE_2__.Routes.work, 'work')];
    this.businessSettings = new src_app_core_models_business_settings_business_settings_model__WEBPACK_IMPORTED_MODULE_0__.BusinessSettings();
    this.errorOccurred = false;
  }
  ngOnInit() {
    this.businessSettingsService.getBusinessSettings().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(result => console.log(result)), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)(error => {
      this.errorOccurred = true;
      return rxjs__WEBPACK_IMPORTED_MODULE_8__.EMPTY;
    })).subscribe({
      next: businessSettings => {
        this.businessSettings = businessSettings;
      }
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_business_settings_service__WEBPACK_IMPORTED_MODULE_3__.BusinessSettingsService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 2,
  consts: [[3, "routes"], [4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-nav-bar", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 3, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "router-outlet");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routes", ctx.routes);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errorOccurred);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, src_app_core_components__WEBPACK_IMPORTED_MODULE_4__.NavBarComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _core_services_business_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/business-settings.service */ 2791);
/* harmony import */ var src_app_core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/components */ 1657);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [_core_services_business_settings_service__WEBPACK_IMPORTED_MODULE_0__.BusinessSettingsService],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent, src_app_core_components__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent, src_app_core_components__WEBPACK_IMPORTED_MODULE_1__.GenericErrorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 8387:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/generic-error/generic-error.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericErrorComponent": () => (/* binding */ GenericErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class GenericErrorComponent {}
GenericErrorComponent.ɵfac = function GenericErrorComponent_Factory(t) {
  return new (t || GenericErrorComponent)();
};
GenericErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: GenericErrorComponent,
  selectors: [["app-generic-error"]],
  decls: 2,
  vars: 0,
  template: function GenericErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 1657:
/*!******************************************!*\
  !*** ./src/app/core/components/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericErrorComponent": () => (/* reexport safe */ _generic_error_generic_error_component__WEBPACK_IMPORTED_MODULE_0__.GenericErrorComponent),
/* harmony export */   "NavBarComponent": () => (/* reexport safe */ _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__.NavBarComponent)
/* harmony export */ });
/* harmony import */ var _generic_error_generic_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic-error/generic-error.component */ 8387);
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ 4574);



/***/ }),

/***/ 4574:
/*!**************************************************************!*\
  !*** ./src/app/core/components/nav-bar/nav-bar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/enums */ 9442);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function NavBarComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div")(2, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const route_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", route_r1.routePath);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("_ ", route_r1.routeLabel, "");
  }
}
class NavBarComponent {
  constructor() {
    this.routes = [];
    this.routePaths = src_app_core_enums__WEBPACK_IMPORTED_MODULE_0__.Routes;
  }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
  return new (t || NavBarComponent)();
};
NavBarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavBarComponent,
  selectors: [["app-nav-bar"]],
  inputs: {
    routes: "routes"
  },
  decls: 4,
  vars: 2,
  consts: [["routerLinkActive", "active", 3, "routerLink"], [4, "ngFor", "ngForOf"]],
  template: function NavBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Yannick Sielski");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavBarComponent_ng_container_3_Template, 4, 2, "ng-container", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.routePaths.home);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.routes);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  encapsulation: 2
});

/***/ }),

/***/ 9442:
/*!*************************************!*\
  !*** ./src/app/core/enums/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* reexport safe */ _routes_enum__WEBPACK_IMPORTED_MODULE_0__.Routes)
/* harmony export */ });
/* harmony import */ var _routes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes.enum */ 7185);


/***/ }),

/***/ 7185:
/*!*******************************************!*\
  !*** ./src/app/core/enums/routes.enum.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
var Routes;
(function (Routes) {
  Routes["any"] = "**";
  Routes["home"] = "home";
  Routes["about"] = "about";
  Routes["work"] = "work";
  Routes["empty"] = "";
})(Routes || (Routes = {}));

/***/ }),

/***/ 1829:
/*!**************************************************************************!*\
  !*** ./src/app/core/models/business-settings/business-settings.model.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessSettings": () => (/* binding */ BusinessSettings)
/* harmony export */ });
/* harmony import */ var src_app_core_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/models */ 3902);

class BusinessSettings {
  constructor(dynamicValues = null) {
    this.featureFlags = [];
    if (dynamicValues !== null) {
      Object.assign(this, dynamicValues);
      if (dynamicValues.hasOwnProperty('FeatureFlags')) {
        dynamicValues['FeatureFlags'].forEach(featureFlag => {
          this.featureFlags.push(new src_app_core_models__WEBPACK_IMPORTED_MODULE_0__.FeatureFlag(featureFlag));
        });
      }
    }
  }
}

/***/ }),

/***/ 1205:
/*!*********************************************************************!*\
  !*** ./src/app/core/models/business-settings/feature-flag.model.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureFlag": () => (/* binding */ FeatureFlag)
/* harmony export */ });
class FeatureFlag {
  constructor(dynamicValues = null) {
    if (dynamicValues !== null) {
      Object.assign(this, dynamicValues);
    }
  }
}

/***/ }),

/***/ 3902:
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessSettings": () => (/* reexport safe */ _business_settings_business_settings_model__WEBPACK_IMPORTED_MODULE_1__.BusinessSettings),
/* harmony export */   "FeatureFlag": () => (/* reexport safe */ _business_settings_feature_flag_model__WEBPACK_IMPORTED_MODULE_2__.FeatureFlag),
/* harmony export */   "RouteDef": () => (/* reexport safe */ _route_def_model__WEBPACK_IMPORTED_MODULE_0__.RouteDef)
/* harmony export */ });
/* harmony import */ var _route_def_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route-def.model */ 8758);
/* harmony import */ var _business_settings_business_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-settings/business-settings.model */ 1829);
/* harmony import */ var _business_settings_feature_flag_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-settings/feature-flag.model */ 1205);




/***/ }),

/***/ 8758:
/*!************************************************!*\
  !*** ./src/app/core/models/route-def.model.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteDef": () => (/* binding */ RouteDef)
/* harmony export */ });
class RouteDef {
  constructor(routePath, routeLabel) {
    this._routePath = routePath;
    this._routeLabel = routeLabel;
  }
  get routePath() {
    return this._routePath;
  }
  get routeLabel() {
    return this._routeLabel;
  }
}

/***/ }),

/***/ 2791:
/*!************************************************************!*\
  !*** ./src/app/core/services/business-settings.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusinessSettingsService": () => (/* binding */ BusinessSettingsService),
/* harmony export */   "businessSettingsApiRoutes": () => (/* binding */ businessSettingsApiRoutes)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);



const businessSettingsApiRoutes = {
  businessSettings: 'businesssettings'
};
class BusinessSettingsService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getBusinessSettings() {
    return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api.baseUrl + businessSettingsApiRoutes.businessSettings);
  }
}
BusinessSettingsService.ɵfac = function BusinessSettingsService_Factory(t) {
  return new (t || BusinessSettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
};
BusinessSettingsService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: BusinessSettingsService,
  factory: BusinessSettingsService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// Local
const environment = {
  production: 'true',
  environmentName: 'LOCAL',
  api: {
    baseUrl: 'http://localhost:7071/api/'
  }
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map