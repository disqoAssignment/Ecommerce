function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"], {
  /***/
  "./src/app/modules/inventory/components/product-list/product-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/inventory/components/product-list/product-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppModulesInventoryComponentsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent() {
        _classCallCheck(this, ProductListComponent);
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)();
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 2,
      vars: 0,
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaW52ZW50b3J5L2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/inventory/inventory-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/inventory/inventory-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: InventoryRoutingModule */

  /***/
  function srcAppModulesInventoryInventoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryRoutingModule", function () {
      return InventoryRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/modules/inventory/components/product-list/product-list.component.ts");

    var routes = [{
      path: '',
      component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"]
    }];

    var InventoryRoutingModule = function InventoryRoutingModule() {
      _classCallCheck(this, InventoryRoutingModule);
    };

    InventoryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InventoryRoutingModule
    });
    InventoryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InventoryRoutingModule_Factory(t) {
        return new (t || InventoryRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InventoryRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/inventory/inventory.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/inventory/inventory.module.ts ***!
    \*******************************************************/

  /*! exports provided: InventoryModule */

  /***/
  function srcAppModulesInventoryInventoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryModule", function () {
      return InventoryModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./inventory-routing.module */
    "./src/app/modules/inventory/inventory-routing.module.ts");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/modules/inventory/components/product-list/product-list.component.ts");

    var InventoryModule = function InventoryModule() {
      _classCallCheck(this, InventoryModule);
    };

    InventoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InventoryModule
    });
    InventoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InventoryModule_Factory(t) {
        return new (t || InventoryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventoryRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InventoryModule, {
        declarations: [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventoryRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_2__["InventoryRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=inventory-inventory-module-es5.js.map