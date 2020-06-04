function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-commons-commons-module"], {
  /***/
  "./src/app/modules/commons/commons-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/commons/commons-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CommonsRoutingModule */

  /***/
  function srcAppModulesCommonsCommonsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonsRoutingModule", function () {
      return CommonsRoutingModule;
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


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/modules/commons/components/layout/layout.component.ts");
    /* harmony import */


    var _login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.guard */
    "./src/app/modules/commons/login.guard.ts");

    var routes = [{
      path: '',
      component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | inventory-inventory-module */
          "inventory-inventory-module").then(__webpack_require__.bind(null,
          /*! ../inventory/inventory.module */
          "./src/app/modules/inventory/inventory.module.ts")).then(function (m) {
            return m.InventoryModule;
          });
        }
      }, {
        path: 'cart',
        canLoad: [_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cart-cart-module */
          "cart-cart-module").then(__webpack_require__.bind(null,
          /*! ../cart/cart.module */
          "./src/app/modules/cart/cart.module.ts")).then(function (m) {
            return m.CartModule;
          });
        }
      }, {
        path: 'order',
        canLoad: [_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | order-order-module */
          "order-order-module").then(__webpack_require__.bind(null,
          /*! ../order/order.module */
          "./src/app/modules/order/order.module.ts")).then(function (m) {
            return m.OrderModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | account-account-module */
          "account-account-module").then(__webpack_require__.bind(null,
          /*! ../account/account.module */
          "./src/app/modules/account/account.module.ts")).then(function (m) {
            return m.AccountModule;
          });
        }
      }, {
        path: '**',
        redirectTo: ''
      }]
    }];

    var CommonsRoutingModule = function CommonsRoutingModule() {
      _classCallCheck(this, CommonsRoutingModule);
    };

    CommonsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommonsRoutingModule
    });
    CommonsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommonsRoutingModule_Factory(t) {
        return new (t || CommonsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonsRoutingModule, [{
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
  "./src/app/modules/commons/commons.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/modules/commons/commons.module.ts ***!
    \***************************************************/

  /*! exports provided: CommonsModule */

  /***/
  function srcAppModulesCommonsCommonsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonsModule", function () {
      return CommonsModule;
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


    var _commons_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./commons-routing.module */
    "./src/app/modules/commons/commons-routing.module.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/modules/commons/components/header/header.component.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/modules/commons/components/menu/menu.component.ts");
    /* harmony import */


    var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/layout/layout.component */
    "./src/app/modules/commons/components/layout/layout.component.ts");

    var CommonsModule = function CommonsModule() {
      _classCallCheck(this, CommonsModule);
    };

    CommonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommonsModule
    });
    CommonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommonsModule_Factory(t) {
        return new (t || CommonsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _commons_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommonsModule, {
        declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _commons_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _commons_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommonsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/commons/components/header/header.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/commons/components/header/header.component.ts ***!
    \***********************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppModulesCommonsComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../menu/menu.component */
    "./src/app/modules/commons/components/menu/menu.component.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 3,
      vars: 0,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "header works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-menu");
        }
      },
      directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9ucy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/commons/components/layout/layout.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/commons/components/layout/layout.component.ts ***!
    \***********************************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppModulesCommonsComponentsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/header.component */
    "./src/app/modules/commons/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 4,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "layout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9ucy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/commons/components/menu/menu.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/commons/components/menu/menu.component.ts ***!
    \*******************************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppModulesCommonsComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 10,
      vars: 0,
      consts: [["routerLink", "/"], ["routerLink", "/cart"], ["routerLink", "/order"], ["routerLink", "/login"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "menu works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9ucy9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/commons/login.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/modules/commons/login.guard.ts ***!
    \************************************************/

  /*! exports provided: LoginGuard */

  /***/
  function srcAppModulesCommonsLoginGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginGuard", function () {
      return LoginGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_custom_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/custom-cookie.service */
    "./src/app/services/custom-cookie.service.ts");

    var LoginGuard = /*#__PURE__*/function () {
      function LoginGuard(cookieService) {
        _classCallCheck(this, LoginGuard);

        this.cookieService = cookieService;
      }

      _createClass(LoginGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          return !!this.cookieService.getCookie('jwt');
        }
      }, {
        key: "canLoad",
        value: function canLoad(next, state) {
          return this.canActivate(next, state);
        }
      }]);

      return LoginGuard;
    }();

    LoginGuard.ɵfac = function LoginGuard_Factory(t) {
      return new (t || LoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_custom_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CustomCookieService"]));
    };

    LoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoginGuard,
      factory: LoginGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _services_custom_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CustomCookieService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-commons-commons-module-es5.js.map