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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n    &copy; Claudio \"Kyntal\" Chuhaicura PokeApi\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <mat-toolbar-row>\n        <img src=\"../../../assets/images/poxedex.png\" alt=\"pokedex\" width=\"40\" height=\"40\" (click)=\"home()\">\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/poke-detail/poke-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/poke-detail/poke-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\n\n    <mat-card-header>\n      <img mat-card-avatar class=\"header-image\" src=\"{{pokemonImg}}\">\n      <mat-card-title>{{pokemon.name}}</mat-card-title>\n      <mat-card-subtitle>Nº{{pokemon.id}}</mat-card-subtitle>\n    </mat-card-header>\n\n    <img mat-card-image src=\"{{pokemonImg}}\" alt=\"Pokemon\">\n    <mat-card-content>\n        <mat-chip-list aria-label=\"Fish selection\">\n            <mat-chip color=\"primary\" selected>Type: {{pokemonType}}</mat-chip>\n            <mat-chip color=\"primary\" selected>Height: {{pokemon.height}}</mat-chip>\n            <mat-chip color=\"primary\" selected>Weight: {{pokemon.weight}}</mat-chip>\n          </mat-chip-list>\n    </mat-card-content>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/poke-table/poke-table.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/poke-table/poke-table.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n    <mat-form-field appearance=\"standard\">\n        <mat-label>Filtro</mat-label>\n        <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ej.: Pikachu\" #input>\n    </mat-form-field>\n  \n  <div>\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n  \n      <!-- ID Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Nº Pokedex </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.position}} </td>\n      </ng-container>\n  \n      <!-- Progress Column -->\n      <ng-container matColumnDef=\"image\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Pokemon </th>\n        <td mat-cell *matCellDef=\"let row\">\n            <img src=\"{{row.image}}\" alt=\"pokemon\" width=\"100\" height=\"100\">\n        </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n      </ng-container>\n  \n      <!-- Fruit Column -->\n      <ng-container matColumnDef=\"fruit\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\n        <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"getRow(row)\"></tr>\n  \n      <!-- Row shown when there is no matching data. -->\n      <tr class=\"mat-row\" *matNoDataRow>\n        <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n      </tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\n  </div>\n\n</div>\n  "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/poke-detail/poke-detail.component */ "./src/app/components/poke-detail/poke-detail.component.ts");
/* harmony import */ var _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/poke-table/poke-table.component */ "./src/app/components/poke-table/poke-table.component.ts");





var routes = [
    { path: 'home', component: _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_4__["PokeTableComponent"] },
    { path: 'pokeDetail/:id', component: _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_3__["PokeDetailComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PokeApi';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/poke-detail/poke-detail.component */ "./src/app/components/poke-detail/poke-detail.component.ts");
/* harmony import */ var _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/poke-table/poke-table.component */ "./src/app/components/poke-table/poke-table.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/material.module */ "./src/shared/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_poke_detail_poke_detail_component__WEBPACK_IMPORTED_MODULE_7__["PokeDetailComponent"],
                _components_poke_table_poke_table_component__WEBPACK_IMPORTED_MODULE_8__["PokeTableComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  display: flex;\n  flex: 0;\n  justify-content: center;\n  align-items: center;\n  height: 80px;\n  color: #fcfcfc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXENsYXVkaW8gQ2h1aGFpY3VyYVxccHJveWVjdG9zXFxQb2tlQXBpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXENsYXVkaW8gQ2h1aGFpY3VyYVxccHJveWVjdG9zXFxQb2tlQXBpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0NOSTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbmZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbn0iLCIkcmVkOiAjYmQzNzM2O1xyXG4kYmxhY2s6ICM0MjQyNDI7XHJcbiR3aGl0ZTogI2ZjZmNmYztcclxuJHllbGxvdzogI2ZmZDkyNDsiLCJmb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBjb2xvcjogI2ZjZmNmYztcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\n  background-color: #424242;\n}\n\nimg:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXENsYXVkaW8gQ2h1aGFpY3VyYVxccHJveWVjdG9zXFxQb2tlQXBpL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXENsYXVkaW8gQ2h1aGFpY3VyYVxccHJveWVjdG9zXFxQb2tlQXBpL3NyY1xcYXNzZXRzXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSx5QkNGSTtBQ0NSOztBRklBO0VBQ0ksZUFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XHJcbn1cclxuXHJcbmltZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIkcmVkOiAjYmQzNzM2O1xyXG4kYmxhY2s6ICM0MjQyNDI7XHJcbiR3aGl0ZTogI2ZjZmNmYztcclxuJHllbGxvdzogI2ZmZDkyNDsiLCIubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xufVxuXG5pbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.home = function () {
        this.router.navigateByUrl('/home');
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/poke-detail/poke-detail.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/poke-detail/poke-detail.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 300px;\n  margin: auto;\n  margin-top: 20px;\n  background-color: #bd3736;\n}\n\n.mat-card-title {\n  text-transform: uppercase;\n}\n\n.mat-card-subtitle {\n  color: #424242;\n}\n\n.header-image {\n  background-size: cover;\n}\n\n.mat-card-header {\n  background-color: #fcfcfc;\n  padding-top: 10px;\n  border-radius: 10px;\n}\n\n.mat-chip {\n  background-color: #424242 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlLWRldGFpbC9EOlxcQ2xhdWRpbyBDaHVoYWljdXJhXFxwcm95ZWN0b3NcXFBva2VBcGkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHBva2UtZGV0YWlsXFxwb2tlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tlLWRldGFpbC9EOlxcQ2xhdWRpbyBDaHVoYWljdXJhXFxwcm95ZWN0b3NcXFBva2VBcGkvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZS1kZXRhaWwvcG9rZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDTkU7QUNLTjs7QUZJQTtFQUNJLHlCQUFBO0FFREo7O0FGSUE7RUFDSSxjQ2JJO0FDWVI7O0FGR0E7RUFDSSxzQkFBQTtBRUFKOztBRkdBO0VBQ0kseUJDbkJJO0VEb0JKLGlCQUFBO0VBQ0EsbUJBQUE7QUVBSjs7QUZHQTtFQUNJLG9DQUFBO0FFQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2UtZGV0YWlsL3Bva2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmVkO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICRibGFjaztcclxufVxyXG4uaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LWNoaXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrICFpbXBvcnRhbnQ7XHJcbn0iLCIkcmVkOiAjYmQzNzM2O1xyXG4kYmxhY2s6ICM0MjQyNDI7XHJcbiR3aGl0ZTogI2ZjZmNmYztcclxuJHllbGxvdzogI2ZmZDkyNDsiLCIuY2FyZCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQzNzM2O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogIzQyNDI0Mjtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1hdC1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/poke-detail/poke-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/poke-detail/poke-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: PokeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeDetailComponent", function() { return PokeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");




var PokeDetailComponent = /** @class */ (function () {
    function PokeDetailComponent(pokemonService, activatedRouter) {
        var _this = this;
        this.pokemonService = pokemonService;
        this.activatedRouter = activatedRouter;
        this.pokemon = '';
        this.pokemonType = [];
        this.pokemonImg = '';
        this.activatedRouter.params.subscribe(function (params) {
            _this.getPokemon(params['id']);
        });
    }
    PokeDetailComponent.prototype.ngOnInit = function () {
    };
    PokeDetailComponent.prototype.getPokemon = function (id) {
        var _this = this;
        this.pokemonService.getPokemon(id).subscribe(function (res) {
            console.log(res);
            _this.pokemon = res;
            _this.pokemonImg = _this.pokemon.sprites.front_default;
            _this.pokemonType = res.types[0].type.name;
        }, function (err) {
            console.log(err);
        });
    };
    PokeDetailComponent.ctorParameters = function () { return [
        { type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PokeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poke-detail',
            template: __webpack_require__(/*! raw-loader!./poke-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/poke-detail/poke-detail.component.html"),
            styles: [__webpack_require__(/*! ./poke-detail.component.scss */ "./src/app/components/poke-detail/poke-detail.component.scss")]
        })
    ], PokeDetailComponent);
    return PokeDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/poke-table/poke-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/poke-table/poke-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  margin-top: 20px;\n  text-align: center;\n}\n\ntable {\n  min-width: 80%;\n  margin: auto;\n  text-align: center;\n}\n\n.mat-header-cell {\n  color: black;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.mat-row:nth-child(even) {\n  background-color: #fcfcfc;\n}\n\n.mat-row:nth-child(odd) {\n  background-color: #bd3736;\n}\n\n.mat-row:nth-child(odd) .mat-cell {\n  color: white;\n}\n\n.mat-cell::first-letter {\n  text-transform: uppercase;\n}\n\n.mat-row:hover {\n  cursor: pointer;\n  box-shadow: inset 0 0 0 5px #ffd924;\n}\n\n::ng-deep.mat-paginator {\n  width: 80%;\n  margin: auto;\n}\n\n.mat-form.field {\n  font-size: 13px;\n  width: 20%;\n  margin-bottom: 5px;\n  padding: 10px;\n}\n\n::ng-deep.mat-form-field-label {\n  color: #fcfcfc !important;\n}\n\n::ng-deep.mat-form-field-underline {\n  background-color: #fcfcfc !important;\n}\n\n::ng-deep.mat-form-field-ripple {\n  background-color: #fcfcfc !important;\n}\n\ninput {\n  color: #fcfcfc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2tlLXRhYmxlL0Q6XFxDbGF1ZGlvIENodWhhaWN1cmFcXHByb3llY3Rvc1xcUG9rZUFwaS9zcmNcXGFwcFxcY29tcG9uZW50c1xccG9rZS10YWJsZVxccG9rZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wb2tlLXRhYmxlL3Bva2UtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcG9rZS10YWJsZS9EOlxcQ2xhdWRpbyBDaHVoYWljdXJhXFxwcm95ZWN0b3NcXFBva2VBcGkvc3JjXFxhc3NldHNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FES0E7RUFDSSx5QkVyQkk7QURtQlI7O0FETUE7RUFDSSx5QkU1QkU7QUR5Qk47O0FESUk7RUFDSSxZQUFBO0FDRlI7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLG1DQUFBO0FDSEo7O0FETUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEo7O0FETUE7RUFDSSxvQ0FBQTtBQ0hKOztBRE1BO0VBQ0ksb0NBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bva2UtdGFibGUvcG9rZS10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vcm93IHBhcmVzXHJcbi5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbi8vcm93IGltcGFyZXNcclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJlZDtcclxuICAgICYgLm1hdC1jZWxsIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtY2VsbDo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDVweCAkeWVsbG93O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXBhZ2luYXRvciB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWZvcm0uZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUge1xuICBtaW4td2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbn1cblxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmQzNzM2O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkgLm1hdC1jZWxsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LWNlbGw6OmZpcnN0LWxldHRlciB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYXQtcm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCA1cHggI2ZmZDkyNDtcbn1cblxuOjpuZy1kZWVwLm1hdC1wYWdpbmF0b3Ige1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYXQtZm9ybS5maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogI2ZjZmNmYyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYyAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYyAhaW1wb3J0YW50O1xufVxuXG5pbnB1dCB7XG4gIGNvbG9yOiAjZmNmY2ZjICFpbXBvcnRhbnQ7XG59IiwiJHJlZDogI2JkMzczNjtcclxuJGJsYWNrOiAjNDI0MjQyO1xyXG4kd2hpdGU6ICNmY2ZjZmM7XHJcbiR5ZWxsb3c6ICNmZmQ5MjQ7Il19 */"

/***/ }),

/***/ "./src/app/components/poke-table/poke-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/poke-table/poke-table.component.ts ***!
  \***************************************************************/
/*! exports provided: PokeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokeTableComponent", function() { return PokeTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pokemon.service */ "./src/app/services/pokemon.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PokeTableComponent = /** @class */ (function () {
    function PokeTableComponent(pokeService, router) {
        this.pokeService = pokeService;
        this.router = router;
        this.displayedColumns = ['position', 'image', 'name'];
        this.data = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.data);
        this.pokemons = [];
    }
    PokeTableComponent.prototype.ngOnInit = function () {
        this.getPokemon();
    };
    PokeTableComponent.prototype.getPokemon = function () {
        var _this = this;
        var pokemonData;
        var _loop_1 = function (i) {
            this_1.pokeService.getPokemon(i).subscribe(function (res) {
                pokemonData = {
                    position: i,
                    image: res.sprites.front_default,
                    name: res.name
                };
                _this.data.push(pokemonData);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.data);
                _this.dataSource.paginator = _this.paginator;
                // console.log(res);
            }, function (err) {
                console.log(err);
            });
        };
        var this_1 = this;
        for (var i = 1; i <= 150; i++) {
            _loop_1(i);
        }
    };
    PokeTableComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    PokeTableComponent.prototype.getRow = function (row) {
        this.router.navigateByUrl("pokeDetail/" + row.position);
    };
    PokeTableComponent.ctorParameters = function () { return [
        { type: _services_pokemon_service__WEBPACK_IMPORTED_MODULE_3__["PokemonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
    ], PokeTableComponent.prototype, "paginator", void 0);
    PokeTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poke-table',
            template: __webpack_require__(/*! raw-loader!./poke-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/poke-table/poke-table.component.html"),
            styles: [__webpack_require__(/*! ./poke-table.component.scss */ "./src/app/components/poke-table/poke-table.component.scss")]
        })
    ], PokeTableComponent);
    return PokeTableComponent;
}());



/***/ }),

/***/ "./src/app/services/pokemon.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pokemon.service.ts ***!
  \*********************************************/
/*! exports provided: PokemonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokemonService", function() { return PokemonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PokemonService = /** @class */ (function () {
    function PokemonService(http) {
        this.http = http;
        this.baseUrl = 'https://pokeapi.co/api/v2';
    }
    PokemonService.prototype.getPokemon = function (index) {
        return this.http.get(this.baseUrl + "/pokemon/" + index);
    };
    PokemonService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PokemonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], PokemonService);
    return PokemonService;
}());



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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/shared/material.module.ts":
/*!***************************************!*\
  !*** ./src/shared/material.module.ts ***!
  \***************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");













var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]
            ],
            exports: [
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Claudio Chuhaicura\proyectos\PokeApi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map