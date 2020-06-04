function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"], {
  /***/
  "./src/app/modules/order/components/order-list/order-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/order/components/order-list/order-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: OrderListComponent */

  /***/
  function srcAppModulesOrderComponentsOrderListOrderListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderListComponent", function () {
      return OrderListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OrderListComponent = /*#__PURE__*/function () {
      function OrderListComponent() {
        _classCallCheck(this, OrderListComponent);
      }

      _createClass(OrderListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrderListComponent;
    }();

    OrderListComponent.ɵfac = function OrderListComponent_Factory(t) {
      return new (t || OrderListComponent)();
    };

    OrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OrderListComponent,
      selectors: [["app-order-list"]],
      decls: 2,
      vars: 0,
      template: function OrderListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "order-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3JkZXIvY29tcG9uZW50cy9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-order-list',
          templateUrl: './order-list.component.html',
          styleUrls: ['./order-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/order/order-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/order/order-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OrderRoutingModule */

  /***/
  function srcAppModulesOrderOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function () {
      return OrderRoutingModule;
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


    var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/order-list/order-list.component */
    "./src/app/modules/order/components/order-list/order-list.component.ts");

    var routes = [{
      path: '',
      component: _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_2__["OrderListComponent"]
    }];

    var OrderRoutingModule = function OrderRoutingModule() {
      _classCallCheck(this, OrderRoutingModule);
    };

    OrderRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderRoutingModule
    });
    OrderRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderRoutingModule_Factory(t) {
        return new (t || OrderRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderRoutingModule, [{
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
  "./src/app/modules/order/order.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/order/order.module.ts ***!
    \***********************************************/

  /*! exports provided: OrderModule */

  /***/
  function srcAppModulesOrderOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderModule", function () {
      return OrderModule;
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


    var _order_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./order-routing.module */
    "./src/app/modules/order/order-routing.module.ts");
    /* harmony import */


    var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/order-list/order-list.component */
    "./src/app/modules/order/components/order-list/order-list.component.ts");

    var OrderModule = function OrderModule() {
      _classCallCheck(this, OrderModule);
    };

    OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: OrderModule
    });
    OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function OrderModule_Factory(t) {
        return new (t || OrderModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderModule, {
        declarations: [_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _order_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrderRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=order-order-module-es5.js.map