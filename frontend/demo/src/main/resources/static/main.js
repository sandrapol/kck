(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
/* harmony import */ var _model_details_model_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model-details/model-details.component */ "./src/app/model-details/model-details.component.ts");
/* harmony import */ var _param_choice_param_choice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./param-choice/param-choice.component */ "./src/app/param-choice/param-choice.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'choice', component: _param_choice_param_choice_component__WEBPACK_IMPORTED_MODULE_2__["ParamChoiceComponent"] },
    { path: 'modelDetails', component: _model_details_model_details_component__WEBPACK_IMPORTED_MODULE_1__["ModelDetailsComponent"] },
    { path: 'predict', component: _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_0__["PredictionComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app{\r\n    font-family: Consolas, 'Courier New', monospace;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnREFBZ0Q7SUFDaEQsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcHtcclxuICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<body class=\"app\">\n<router-outlet></router-outlet>\n</body>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef) {
        this.elementRef = elementRef;
        this.title = 'frontend';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
/* harmony import */ var _model_details_model_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model-details/model-details.component */ "./src/app/model-details/model-details.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _param_choice_param_choice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./param-choice/param-choice.component */ "./src/app/param-choice/param-choice.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/chart/chart.component.ts");
/* harmony import */ var _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./prediction/prediction.component */ "./src/app/prediction/prediction.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _param_choice_param_choice_component__WEBPACK_IMPORTED_MODULE_9__["ParamChoiceComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
                _model_details_model_details_component__WEBPACK_IMPORTED_MODULE_0__["ModelDetailsComponent"],
                _chart_chart_component__WEBPACK_IMPORTED_MODULE_11__["ChartComponent"],
                _prediction_prediction_component__WEBPACK_IMPORTED_MODULE_12__["PredictionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chart/chart.component.css":
/*!*******************************************!*\
  !*** ./src/app/chart/chart.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chart/chart.component.html":
/*!********************************************!*\
  !*** ./src/app/chart/chart.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    <!DOCTYPE html>\r\n    <html>\r\n        <head>\r\n            <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">\r\n            <meta charset=\"UTF-8\">\r\n            <title>asciichart</title>\r\n            <script src=\"asciichart.ts\"></script>\r\n            <script type=\"text/typescript\">\r\n                var s0 = new Array (120)\r\n                for (var i = 0; i < s0.length; i++)\r\n                    s0[i] = 15 * Math.sin (i * ((Math.PI * 4) / s0.length))\r\n                console.log (asciichart.plot (s0))\r\n            </script>\r\n        </head>\r\n        <body>\r\n        </body>\r\n    </html>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/chart/chart.component.ts":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
    }
    ChartComponent.prototype.ngOnInit = function () {
        //   var asciichart = require ("asciichart")
        var s0 = new Array(120);
        for (var i = 0; i < s0.length; i++)
            s0[i] = 15 * Math.sin(i * ((Math.PI * 4) / s0.length));
        // console.log (asciichart.plot (s0))
    };
    ChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.css */ "./src/app/chart/chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center; margin: 1%\">\n  <div><span style=\"color:#447294;\">__...__..........._......_........_ ..................................._\n      ..................................</span></div>\n  <div><span style=\"color:#5785a6;\">| .\\/. |.........| |....| |......| |..................................|\n      |..................................</span></div>\n  <div><span style=\"color:#6a97b8;\">| \\../ |.___...__| |.___| |...___| |._____. _ __...___.._ __ ___...___| |_ _ __ _..\n      _..___ _____ __.._..._.</span></div>\n  <div><span style=\"color:#7caac9;\">| |\\/| |/ _ \\ / _` |/ _ \\ |../ _ \\ |/ / _ \\| '_ \\ / _ \\| '_ ' _ \\ / _ \\ __| '__| |\n      | |/ __|_. / '_ \\| | | |</span></div>\n  <div><span style=\"color:#8fbcdb;\">| |..| | (_) | (_| |. __/ |..| __/ . | (_) | | | | (_) | | | | | |. __/ |_| |..|\n      |_| | (__ / /| | | | |_| |</span></div>\n  <div><span style=\"color:#83ceb3;\">|_|..|_|\\___/.\\__,_|\\___|_|..\\___|_|\\_\\___/|_| |_|\\___/|_| |_|\n      |_|\\___|\\__|_|...\\__, |\\___/___|_| |_|\\__, |</span></div>\n  <div><span style=\"color:#76e08a;\">.................................................................................__/\n      |................__/ |</span></div>\n  <div><span style=\"color:#6af262;\">................................................................................|___/................|___/.</span></div>\n\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div>\r\n  <label>\r\n    <input type=\"file\" (change)=\"selectFile($event)\">\r\n  </label>\r\n  <button class=\"singlebutton\" [disabled]=\"!selectedFiles\" (click)=\"upload()\">Upload</button>\r\n  <button class=\"singlebutton\"  (click)=\"hellwig()\">Upload</button>\r\n  `8.`888b                 ,8'  8 8888 8888888 8888888888   .8.                  8 8888\r\n  `8.`888b               ,8'   8 8888       8 8888        .888.                 8 8888\r\n   `8.`888b             ,8'    8 8888       8 8888       :88888.                8 8888\r\n    `8.`888b     .b    ,8'     8 8888       8 8888      . `88888.               8 8888\r\n     `8.`888b    88b  ,8'      8 8888       8 8888     .8. `88888.              8 8888\r\n      `8.`888b .`888b,8'       8 8888       8 8888    .8`8. `88888.             8 8888\r\n       `8.`888b8.`8888'        8 8888       8 8888   .8' `8. `88888. 88.        8 8888\r\n        `8.`888`8.`88'         8 8888       8 8888  .8'   `8. `88888.`88.       8 888'\r\n         `8.`8' `8,`'          8 8888       8 8888 .888888888. `88888. `88o.    8 88' \r\n          `8.`   `8'           8 8888       8 8888.8'       `8. `88888.  `Y888888 '   \r\n \r\n \r\n \r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(uploadServ) {
        this.uploadServ = uploadServ;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
    };
    HomeComponent.prototype.upload = function () {
        this.currentFileUpload = this.selectedFiles.item(0);
        this.fileName = this.currentFileUpload.name;
        this.uploadServ.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(function (event) { console.log('File is completely uploaded!'); }, function (err) { console.log(err); }, function () { });
    };
    HomeComponent.prototype.hellwig = function () {
        var _this = this;
        this.uploadServ.hellwigMethod().subscribe(function (event) { console.log('Variables chosen'); }, function (err) { console.log(err); }, function () { _this.mnk(); });
    };
    HomeComponent.prototype.mnk = function () {
        this.uploadServ.mnkWithHellwig().subscribe(function (event) { console.log('MNK created'); }, function (err) { console.log(err); }, function () { });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swiniak{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 40%;\r\n    margin-top: 20%;\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aW5pYWt7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"swiniak\">\r\n    <img src=\"assets/images/swiniak2.gif\">\r\n       ŁADOWANIE\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin-top: 3%;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 3%;\r\n}\r\n.welcome{\r\n    margin-top:4%;\r\n   margin-bottom: 3%;\r\n   margin-left: 1%;\r\n   margin-right: 1%;\r\n}\r\n.opis{\r\n    margin-top:4%;\r\n   margin-bottom: 2%;\r\n   margin-left: 1%;\r\n   margin-right: 1%;\r\n}\r\n.napis{\r\n    text-align: center;\r\n}\r\n.uploadbutton{\r\n    padding: 6px 12px;\r\n    cursor: pointer;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    font-weight: 450\r\n}\r\n.upload{\r\n    width:100%;\r\n    height: auto;\r\n    display: inline-block;\r\n    align-content: flex-start;\r\n    margin-bottom: 4%;\r\n    margin-top: 2%;\r\n    text-align: center;\r\n}\r\n.name{\r\n    display: block;\r\n    color:grey;\r\n    -webkit-text-decoration-line: underline;\r\n            text-decoration-line: underline;\r\n    padding: 6px 12px;\r\n}\r\n.strzalka{\r\n    font-size: 100%;\r\n    text-align: center;\r\n}\r\n.error{\r\n    text-align: center;\r\n    margin: 2%;\r\n    padding: 1%;\r\n    color: red;\r\n    border: dotted;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGNBQWM7R0FDZixrQkFBa0I7R0FDbEIsZ0JBQWdCO0dBQ2hCLGlCQUFpQjtDQUNuQjtBQUVEO0lBQ0ksY0FBYztHQUNmLGtCQUFrQjtHQUNsQixnQkFBZ0I7R0FDaEIsaUJBQWlCO0NBQ25CO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250e1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbn1cclxuLndlbGNvbWV7XHJcbiAgICBtYXJnaW4tdG9wOjQlO1xyXG4gICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDElO1xyXG59XHJcblxyXG4ub3Bpc3tcclxuICAgIG1hcmdpbi10b3A6NCU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICBtYXJnaW4tbGVmdDogMSU7XHJcbiAgIG1hcmdpbi1yaWdodDogMSU7XHJcbn1cclxuLm5hcGlze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51cGxvYWRidXR0b257XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtd2VpZ2h0OiA0NTBcclxufVxyXG4udXBsb2Fke1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5uYW1le1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjpncmV5O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG59XHJcblxyXG4uc3RyemFsa2F7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlcjogZG90dGVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\r\n        <div class=\"napis\">\r\n                <div><span style=\"color:#447294;\"> ..`8.`888b...............,8'..8 8888.8888888\r\n                                8888888888...888..................8.8888</span></div>\r\n                <div><span style=\"color:#5381a2;\"> .`8.`888b...............,8'...8 8888.......8\r\n                                8888........8888..................8\r\n                                8888</span></div>\r\n                <div><span style=\"color:#6290b0;\"> ..`8.`888b.............,8'....8 8888.......8\r\n                                8888.......:88888.................8\r\n                                8888</span></div>\r\n                <div><span style=\"color:#719ebf;\"> ...`8.`888b......b....,8'.....8 8888.......8 8888.......\r\n                                `88888................8\r\n                                8888</span></div>\r\n                <div><span style=\"color:#80adcd;\"> ....`8.`888b....88b..,8'......8 8888.......8 8888......8.\r\n                                `88888...............8\r\n                                8888</span></div>\r\n                <div><span style=\"color:#8fbcdb;\"> .....`8.`888b .`888b,8'.......8 8888.......8 8888.....8`8.\r\n                                `88888..............8\r\n                                8888</span></div>\r\n                <div><span style=\"color:#87cbc5;\"> ......`8.`888b8.`8888'........8 8888.......8 8888....8'.`8. `88888.\r\n                                88.........8\r\n                                8888</span></div>\r\n                <div><span style=\"color:#7edab0;\"> .......`8.`888`8.`88'.........8 8888.......8 8888...8'...`8.\r\n                                `88888.`88........8\r\n                                888'</span></div>\r\n                <div><span style=\"color:#76e99a;\"> ........`8.`8'.`8,`'..........8 8888.......8 8888 .888888888.\r\n                                `88888.\r\n                                `88o.....8\r\n                                88'.</span></div>\r\n                <div><span style=\"color:#6df884;\"> .........`8.`...`8'...........8 8888.......8 8888.8'.......`8.\r\n                                `88888.\r\n                                ..`Y888888'...</span></div>\r\n        </div>\r\n        <div *ngIf=\"!error\">\r\n                <div class=\"opis\">\r\n                        &nbsp; &nbsp; &nbsp;Witamy na stronie służącej budowaniu modelu ekonometrycznego w postaci\r\n                        modelu regresji\r\n                        liniowej. Z jej\r\n                        pomocą mogą Państwo zbudować model oraz ocenić jego dopasowanie do danych empirycznych.\r\n                        Dodatkowo mają\r\n                        Państwo możliwość dokonania prognozy.<br>\r\n                        &nbsp; &nbsp; &nbsp;Jak wiadomo, <b>model ekonometryczny</b> za pomocą równania (lub układu\r\n                        równań) pomaga wyjaśnić mechanizm zmian\r\n                        zachodzących w badanym obszarze. Opisuje powiązania między danymi wielkościami ekonomicznymi.\r\n                        Jest to formalny matematyczny zapis istniejących prawidłowości ekonomicznych.\r\n                </div>\r\n                <div class=\"strzalka\">\r\n...............hMMh............<br>\r\n...............hMMh............<br>\r\n...............hMMh............<br>\r\n.`oh-..........hMMh........-ho`<br>\r\n..`hMMMh-......hMMh......-hMMMh<br>\r\n...-hMMMh-.....hMMh....-hMMMh-.<br>\r\n....-hMMMh-....hMMh...-hMMMh-..<br>\r\n......-hMMMh:.......:hMMMh-....<br>\r\n..........-hMMMMhhMMMMh-.......<br>\r\n............-hMMMMMh-..........<br>\r\n..............-hh- ............ <br>\r\n                </div>\r\n        </div>\r\n        <div *ngIf=\"error\" class=\"error\">\r\n                Zły format pliku, bądź błędne nagówki! Dostosuj się do instrukcji.\r\n        </div>\r\n        <div class=\"welcome\">\r\n                Proszę wybrać plik z danymi. Plik MUSI być w formacie .csv, a dane muszą być oddzielone średnikami.<br>\r\n                Nagłówek odpowiadający zmiennej\r\n                objaśnianej\r\n                musi nosić nazwę \"y\" lub \"Y\". <br>\r\n                Na kolejnej stronie będziesz w stanie wybrać, które zmienne zostaną użyte w modelu ekonometrycznym oraz\r\n                dokonać predykcji.\r\n        </div>\r\n\r\n\r\n        <div class=\"upload\">\r\n                <input hidden id=\"input-file-id\" type=\"file\" (change)=\"selectFile($event)\">\r\n                <label style=\"color:#6df884\" for=\"input-file-id\" class=\"uploadbutton\">+--------------+<br> | Wybierz\r\n                        plik |<br>\r\n                        +--------------+</label>\r\n                <label class=\"name\">{{fileName ? fileName : 'plik'}}</label>\r\n                <label style=\"color:#6df884\" *ngIf=\"fileName\" class=\"uploadbutton\" (click)=\"upload()\">+----+<br> | OK |<br>\r\n                        +----+</label>\r\n        </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = /** @class */ (function () {
    function MainComponent(router, uploadServ) {
        this.router = router;
        this.uploadServ = uploadServ;
        this.error = false;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.fileName = this.currentFileUpload.name;
    };
    MainComponent.prototype.upload = function () {
        var _this = this;
        this.uploadServ.pushFileToStorage(this.currentFileUpload, this.fileName).subscribe(function (event) { console.log('File is completely uploaded!'); }, function (err) { console.log(err); _this.error = true; }, function () { _this.submit(); _this.error = false; });
    };
    MainComponent.prototype.submit = function () {
        this.router.navigateByUrl('/choice');
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_upload_service__WEBPACK_IMPORTED_MODULE_1__["UploadService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/model-details/model-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/model-details/model-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin-top: 3%;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 3%;\r\n    width: 90%;\r\n        \r\n}\r\n.zRamka{\r\n    border: 1;\r\n    border-style: dotted;\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n.button1{\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n    color: #6df884;\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWwtZGV0YWlscy9tb2RlbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVzs7Q0FFZDtBQUNEO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtDQUNmO0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kZWwtZGV0YWlscy9tb2RlbC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBcclxufVxyXG4uelJhbWthe1xyXG4gICAgYm9yZGVyOiAxO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBjb2xvcjogIzZkZjg4NDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/model-details/model-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/model-details/model-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div *ngIf=\"loading\">\r\n  <app-loading></app-loading>\r\n</div>\r\n<div class=\"cont\" *ngIf=\"!loading\">\r\n  <div class=\"zRamka\">\r\n  <p style=\"color:#6df884\">Postać modelu:</p>\r\n  <div style=\"display: inline-block\">\r\n  <div style=\"display: inline-block\">y =  {{mnk.parameters[0]}} </div>\r\n  <div style=\"display: inline-block\" *ngFor=\"let header of mnk.headers\"> &nbsp; + {{header}}* {{getParam(header)}} </div>\r\n    </div>\r\n</div>\r\n<label *ngIf = \"!clicked\" class=\"button1\" (click)=\"more()\">+--------+<br> | Więcej |<br>\r\n  +--------+</label>\r\n<div class=\"zRamka\" *ngIf = \"clicked\"> \r\n<p style=\"color:#6df884\">Błędy ocen parametrów:</p>\r\n  <tr *ngFor=\"let averageEstimateErro of mnk.averageEstimateError\">\r\n    <td> {{averageEstimateErro}} </td>\r\n  </tr>\r\n  <p style=\"color:#6df884\">Współczynnik zmienności resztowej</p>\r\n  <p>{{mnk.crv}}</p>\r\n  <p style=\"color:#6df884\">Współczynnik determinacji R2:</p>\r\n  <p>{{mnk.r2}}</p>\r\n  <p style=\"color:#6df884\">Wariancja resztowa:</p>\r\n  <p>{{mnk.residualVariance}}</p>\r\n  <p style=\"color:#6df884\">Odchylenie standardowe:</p>\r\n  <p>{{mnk.standardDeviation}}</p>\r\n    </div>\r\n  <label class=\"button1\" (click)=\"goToPredictions()\">+------------------+<br> | Idź do predykcji |<br>\r\n    +------------------+</label>\r\n</div>"

/***/ }),

/***/ "./src/app/model-details/model-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/model-details/model-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ModelDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDetailsComponent", function() { return ModelDetailsComponent; });
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModelDetailsComponent = /** @class */ (function () {
    function ModelDetailsComponent(upServ, router) {
        this.upServ = upServ;
        this.router = router;
        this.loading = true;
        this.clicked = false;
    }
    ModelDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upServ.getMNK().subscribe(function (elems) { _this.mnk = elems; console.log(_this.mnk); }, function (err) { _this.router.navigateByUrl(""); }, function () { _this.loading = false; _this.roundIt(); });
    };
    ModelDetailsComponent.prototype.roundIt = function () {
        this.mnk.parameters = this.mnk.parameters.map(function (element) {
            return Math.round(element * 1000) / 1000;
        });
        this.mnk.averageEstimateError = this.mnk.averageEstimateError.map(function (element) {
            return Math.round(element * 1000) / 1000;
        });
        this.mnk.r2 = Math.round(this.mnk.r2 * 100000) / 100000;
        this.mnk.crv = Math.round(this.mnk.crv * 100000) / 100000;
        this.mnk.residualVariance = Math.round(this.mnk.residualVariance * 100000) / 100000;
        this.mnk.standardDeviation = Math.round(this.mnk.standardDeviation * 100000) / 100000;
    };
    ModelDetailsComponent.prototype.getParam = function (header) {
        var index = this.mnk.headers.indexOf(header);
        return Math.round(this.mnk.parameters[index + 1] * 100000) / 100000;
    };
    ModelDetailsComponent.prototype.goToPredictions = function () {
        this.router.navigateByUrl("/predict");
    };
    ModelDetailsComponent.prototype.more = function () {
        this.clicked = true;
    };
    ModelDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-model-details',
            template: __webpack_require__(/*! ./model-details.component.html */ "./src/app/model-details/model-details.component.html"),
            styles: [__webpack_require__(/*! ./model-details.component.css */ "./src/app/model-details/model-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ModelDetailsComponent);
    return ModelDetailsComponent;
}());



/***/ }),

/***/ "./src/app/param-choice/param-choice.component.css":
/*!*********************************************************!*\
  !*** ./src/app/param-choice/param-choice.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin-top: 3%;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 3%;\r\n    width: 90%;\r\n}\r\n.hellwigButtons{\r\n    display: inline-flex;\r\n    float: right;\r\n    margin-right: 10%;\r\n}\r\n.button1{\r\n    color: #6df884\r\n}\r\n.header{\r\n    \r\n    margin: 1% 3%;\r\n}\r\n.button2{\r\n\r\n    color: #6df884;\r\n}\r\n.hellwig{\r\n    width: 100%;  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFyYW0tY2hvaWNlL3BhcmFtLWNob2ljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7Q0FDZDtBQUNEO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLGNBQWM7Q0FDakI7QUFDRDs7SUFFSSxjQUFjO0NBQ2pCO0FBQ0Q7O0lBRUksZUFBZTtDQUNsQjtBQUdEO0lBQ0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFyYW0tY2hvaWNlL3BhcmFtLWNob2ljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmhlbGx3aWdCdXR0b25ze1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmJ1dHRvbjF7XHJcbiAgICBjb2xvcjogIzZkZjg4NFxyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMSUgMyU7XHJcbn1cclxuLmJ1dHRvbjJ7XHJcblxyXG4gICAgY29sb3I6ICM2ZGY4ODQ7XHJcbn1cclxuXHJcblxyXG4uaGVsbHdpZ3tcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/param-choice/param-choice.component.html":
/*!**********************************************************!*\
  !*** ./src/app/param-choice/param-choice.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"cont\">\r\n  <div *ngIf=\"!loading\">\r\n  <div *ngIf=\"!choosenHeaders\" class=\"hellwig\">\r\n    <p>Czy chcesz użyć metody Hellwiga do wyboru zmiennych?</p>\r\n    <div class=\"hellwigButtons\">\r\n      <label class=\"button1\" (click)=\"hellwigMethodChoosen()\">+-----+<br> | Tak |<br>\r\n        +-----+</label><p>&nbsp;</p>\r\n      <label class=\"button2\" (click)=\"createModel()\">+-----+<br> | Nie |<br>\r\n        +-----+</label>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"choosenHeaders\">\r\n    <p>Metodą Helliwga wybrano zmienne:</p>\r\n    <div *ngFor=\"let choosenHeader of choosenHeaders\">\r\n      <div class=\"header\"> <span style=\"color: #6df884\">o </span>{{choosenHeader}}</div> \r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"choosenHeaders\" class=\"hellwig\">\r\n    <p>Czy chcesz użyć tych zmiennych do stworzenia modelu, czy wszystkich?</p>\r\n    <div class=\"hellwigButtons\">\r\n      <label class=\"button1\" (click)=\"modelWithHellwig()\">+-----+<br> | Tak |<br>+-----+</label><p>&nbsp;</p>\r\n      <label class=\"button2\" (click)=\"createModel()\">+-----+<br> | Nie |<br>+-----+</label>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf =\"loading\">\r\n  <app-loading></app-loading>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/param-choice/param-choice.component.ts":
/*!********************************************************!*\
  !*** ./src/app/param-choice/param-choice.component.ts ***!
  \********************************************************/
/*! exports provided: ParamChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParamChoiceComponent", function() { return ParamChoiceComponent; });
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParamChoiceComponent = /** @class */ (function () {
    function ParamChoiceComponent(upService, router) {
        this.upService = upService;
        this.router = router;
        this.loading = false;
    }
    ParamChoiceComponent.prototype.ngOnInit = function () {
    };
    ParamChoiceComponent.prototype.hellwigMethodChoosen = function () {
        var _this = this;
        this.loading = true;
        this.upService.hellwigMethod().subscribe(function (elem) { _this.choosenHeaders = elem; }, function (err) { return (_this.router.navigateByUrl("")); }, function () { _this.loading = false; });
    };
    ParamChoiceComponent.prototype.modelWithHellwig = function () {
        var _this = this;
        this.loading = true;
        this.upService.mnkWithHellwig().subscribe(function (event) { console.log('Model created'); }, function (err) { console.log(err); _this.router.navigateByUrl(""); }, function () { _this.loading = false; _this.submit(); });
    };
    ParamChoiceComponent.prototype.createModel = function () {
        var _this = this;
        this.loading = true;
        this.upService.newMNK().subscribe(function (event) { console.log('Model created'); }, function (err) { console.log(err); }, function () { _this.loading = false; _this.submit(); });
    };
    ParamChoiceComponent.prototype.submit = function () {
        this.loading = true;
        this.router.navigateByUrl('/modelDetails');
    };
    ParamChoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-param-choice',
            template: __webpack_require__(/*! ./param-choice.component.html */ "./src/app/param-choice/param-choice.component.html"),
            styles: [__webpack_require__(/*! ./param-choice.component.css */ "./src/app/param-choice/param-choice.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ParamChoiceComponent);
    return ParamChoiceComponent;
}());



/***/ }),

/***/ "./src/app/prediction/prediction.component.css":
/*!*****************************************************!*\
  !*** ./src/app/prediction/prediction.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cont{\r\n    margin-top: 3%;\r\n    margin-right: 5%;\r\n    margin-left: 5%;\r\n    margin-bottom: 3%;\r\n}\r\ninput{\r\nbackground-color: black;\r\nborder: 0ch;\r\ncolor: white;\r\nmargin-bottom: 20px;\r\n}\r\n.error{\r\n    text-align: center;\r\n    margin: 2%;\r\n    padding: 1%;\r\n    color: red;\r\n    border: dotted;\r\n}\r\nh4{\r\n    font-size: 2em;\r\n    display: inline-block;\r\n}\r\n.togowno{\r\n    display: inline-block;\r\n    border: 1;\r\n    border-style: dotted;\r\n    padding: 5px;\r\n}\r\np{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n.outer{\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-left: 120%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFDRDtBQUNBLHdCQUF3QjtBQUN4QixZQUFZO0FBQ1osYUFBYTtBQUNiLG9CQUFvQjtDQUNuQjtBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7Q0FDbEI7QUFDRDtJQUNJLGVBQWU7SUFDZixzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGFBQWE7Q0FDaEI7QUFDRDtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7Q0FDdEI7QUFFRDtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbmlucHV0e1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuYm9yZGVyOiAwY2g7XHJcbmNvbG9yOiB3aGl0ZTtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmVycm9ye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyJTtcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGJvcmRlcjogZG90dGVkO1xyXG59XHJcbmg0e1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRvZ293bm97XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDE7XHJcbiAgICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5we1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ub3V0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMjAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/prediction/prediction.component.html":
/*!******************************************************!*\
  !*** ./src/app/prediction/prediction.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"cont\">\r\n  <p style=\"margin-bottom:40px;\">Proszę wprowadzić przewidywane wartości zmiennych objaśnianych.</p>\r\n  <p class=\"error\" *ngIf=\"err\">{{err}}</p>\r\n  <tr *ngFor=\"let header of headers\">\r\n    <td style=\"margin-bottom: 20px; color: #6df884\"> {{header}}:\r\n      <input placeholder=\"____________\"type=\"number\" required #box (keyup)=\"setParam(box.value, header)\"><br>\r\n    </td>\r\n  </tr>\r\n  <label class=\"button1\" (click)=\"predict()\">+----+<br> | OK |<br>+----+</label>\r\n  <div class=\"outer\">\r\n  <div class=\"togowno\"*ngIf=\"prediction\"><h4><p>Prognoza:</p> {{prediction}}</h4> </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/prediction/prediction.component.ts":
/*!****************************************************!*\
  !*** ./src/app/prediction/prediction.component.ts ***!
  \****************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../services/upload.service */ "./src/app/services/upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PredictionComponent = /** @class */ (function () {
    function PredictionComponent(upServ, router) {
        this.upServ = upServ;
        this.router = router;
    }
    PredictionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upServ.getHeaders().subscribe(function (elem) { _this.headers = elem; }, function (err) { return (_this.router.navigateByUrl("")); }, function () { _this.params = [_this.headers.length]; });
    };
    PredictionComponent.prototype.setParam = function (value, header) {
        this.params[this.headers.indexOf(header)] = Number(value);
    };
    PredictionComponent.prototype.predict = function () {
        var _this = this;
        this.upServ.predict(this.params).subscribe(function (elem) { _this.prediction = elem; }, function (err) { _this.err = err.headers.get('error_details'); console.log(_this.err); }, function () { _this.roundIt(); _this.err = false; });
        console.log(this.params);
    };
    PredictionComponent.prototype.roundIt = function () {
        this.prediction = Math.round(this.prediction * 1000) / 1000;
    };
    PredictionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prediction',
            template: __webpack_require__(/*! ./prediction.component.html */ "./src/app/prediction/prediction.component.html"),
            styles: [__webpack_require__(/*! ./prediction.component.css */ "./src/app/prediction/prediction.component.css")]
        }),
        __metadata("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_0__["UploadService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PredictionComponent);
    return PredictionComponent;
}());



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/upload.service.ts ***!
  \********************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    ;
    UploadService.prototype.pushFileToStorage = function (file, name) {
        this.fileName = name;
        var formdata = new FormData();
        formdata.append('file', file);
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', 'api/upload', formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadService.prototype.hellwigMethod = function () {
        return this.http.get('api/hellwig');
    };
    UploadService.prototype.mnkWithHellwig = function () {
        //const params = new HttpParams().set('newModelName', name);
        return this.http.get('api/mnkWithHellwig');
    };
    UploadService.prototype.newMNK = function () {
        return this.http.get('api/newMNK');
    };
    UploadService.prototype.getMNK = function () {
        return this.http.get('api/getMNK');
    };
    UploadService.prototype.getHeaders = function () {
        return this.http.get('api/getHeaders');
    };
    UploadService.prototype.predict = function (param) {
        JSON.stringify(param);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('userParams', JSON.stringify(param));
        return this.http.get('api/predict', { params: params });
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sandra\Documents\kck\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map