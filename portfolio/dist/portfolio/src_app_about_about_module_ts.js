"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_about_about_module_ts"],{

/***/ 8057:
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var src_app_about_components_about_wrapper_about_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/about/components/about-wrapper/about-wrapper.component */ 6528);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: src_app_about_components_about_wrapper_about_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.AboutWrapperComponent
}];
class AboutRoutingModule {}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) {
  return new (t || AboutRoutingModule)();
};
AboutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AboutRoutingModule
});
AboutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var src_app_about_about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/about/about-routing.module */ 8057);
/* harmony import */ var src_app_about_components_about_wrapper_about_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/about/components/about-wrapper/about-wrapper.component */ 6528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class AboutModule {}
AboutModule.ɵfac = function AboutModule_Factory(t) {
  return new (t || AboutModule)();
};
AboutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AboutModule
});
AboutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [src_app_about_about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [src_app_about_components_about_wrapper_about_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.AboutWrapperComponent],
    imports: [src_app_about_about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule]
  });
})();

/***/ }),

/***/ 6528:
/*!***************************************************************************!*\
  !*** ./src/app/about/components/about-wrapper/about-wrapper.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutWrapperComponent": () => (/* binding */ AboutWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AboutWrapperComponent {}
AboutWrapperComponent.ɵfac = function AboutWrapperComponent_Factory(t) {
  return new (t || AboutWrapperComponent)();
};
AboutWrapperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AboutWrapperComponent,
  selectors: [["app-about-wrapper"]],
  decls: 2,
  vars: 0,
  template: function AboutWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map