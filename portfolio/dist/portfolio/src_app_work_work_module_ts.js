"use strict";
(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([["src_app_work_work_module_ts"],{

/***/ 8346:
/*!************************************************************************!*\
  !*** ./src/app/work/components/work-wrapper/work-wrapper.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkWrapperComponent": () => (/* binding */ WorkWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class WorkWrapperComponent {}
WorkWrapperComponent.ɵfac = function WorkWrapperComponent_Factory(t) {
  return new (t || WorkWrapperComponent)();
};
WorkWrapperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WorkWrapperComponent,
  selectors: [["app-work-wrapper"]],
  decls: 2,
  vars: 0,
  template: function WorkWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "work page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 5083:
/*!*********************************************!*\
  !*** ./src/app/work/work-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkRoutingModule": () => (/* binding */ WorkRoutingModule)
/* harmony export */ });
/* harmony import */ var src_app_work_components_work_wrapper_work_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/work/components/work-wrapper/work-wrapper.component */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: src_app_work_components_work_wrapper_work_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.WorkWrapperComponent
}];
class WorkRoutingModule {}
WorkRoutingModule.ɵfac = function WorkRoutingModule_Factory(t) {
  return new (t || WorkRoutingModule)();
};
WorkRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: WorkRoutingModule
});
WorkRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](WorkRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 672:
/*!*************************************!*\
  !*** ./src/app/work/work.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkModule": () => (/* binding */ WorkModule)
/* harmony export */ });
/* harmony import */ var src_app_work_work_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/work/work-routing.module */ 5083);
/* harmony import */ var src_app_work_components_work_wrapper_work_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/work/components/work-wrapper/work-wrapper.component */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class WorkModule {}
WorkModule.ɵfac = function WorkModule_Factory(t) {
  return new (t || WorkModule)();
};
WorkModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: WorkModule
});
WorkModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [src_app_work_work_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkRoutingModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WorkModule, {
    declarations: [src_app_work_components_work_wrapper_work_wrapper_component__WEBPACK_IMPORTED_MODULE_1__.WorkWrapperComponent],
    imports: [src_app_work_work_routing_module__WEBPACK_IMPORTED_MODULE_0__.WorkRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_work_work_module_ts.js.map