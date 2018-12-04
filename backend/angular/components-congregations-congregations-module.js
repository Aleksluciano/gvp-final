(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-congregations-congregations-module"],{

/***/ "./src/app/components/congregations/add-congregation/add-congregation.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/congregations/add-congregation/add-congregation.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash{\n  color: red;\n}\n\n.fa-edit{\n  background-color: orange;\n}\n\n.fa-eye{\n  background-color: lightblue;\n}\n\n#actions{\n  text-align: center;\n}\n\ntr:hover {\n  background-color: lightgoldenrodyellow;\n}\n\n#bodyForm {\n  background-color: gainsboro;\n}\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n::placeholder{\n  opacity: 0.5;\n}\n\n.list-group-item {\n\tfont-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;\n}\n\n.Topic{\n  background: blanchedalmond;\n}\n\n#arrowBack, #textVoltar{\n  color: rgb(67, 117, 211);\n}\n\nlabel {\n  color: blueviolet;\n  font-size: 15px;\n}\n\np{\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25ncmVnYXRpb25zL2FkZC1jb25ncmVnYXRpb24vYWRkLWNvbmdyZWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUdEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUdEO0VBQ0UsdUNBQXVDO0NBQ3hDOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUZEO0VBQ0UsYUFBYTtDQUNkOztBQUZEO0VBQ0UsYUFBYTtDQUNkOztBQUdEO0NBQ0MsK0VBQStFO0NBQy9FOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZ3JlZ2F0aW9ucy9hZGQtY29uZ3JlZ2F0aW9uL2FkZC1jb25ncmVnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLWVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLWV5ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG5cbiNhY3Rpb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuI2JvZHlGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG46OnBsYWNlaG9sZGVye1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG5cdGZvbnQtZmFtaWx5OiBSb2Nrd2VsbCxDb3VyaWVyIEJvbGQsQ291cmllcixHZW9yZ2lhLFRpbWVzLFRpbWVzIE5ldyBSb21hbixzZXJpZjtcbn1cblxuLlRvcGlje1xuICBiYWNrZ3JvdW5kOiBibGFuY2hlZGFsbW9uZDtcbn1cblxuI2Fycm93QmFjaywgI3RleHRWb2x0YXJ7XG4gIGNvbG9yOiByZ2IoNjcsIDExNywgMjExKTtcbn1cblxubGFiZWwge1xuICBjb2xvcjogYmx1ZXZpb2xldDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5we1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/congregations/add-congregation/add-congregation.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/congregations/add-congregation/add-congregation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n    <div *ngIf=\"congregation && modeView == false\" class=\"col-md-6\">\n\n      <h2 ><i class=\"fa fa-university\"></i> Congregações</h2>\n\n        <h5 class=\"text-right text-secondary\">Total: {{ congregations?.length }}</h5>\n\n\n  <div id=\"bodyForm\" class=\"card card-body mb-3\" @fade>\n    <form #congregationForm=\"ngForm\" (ngSubmit)=\"onSubmit(congregationForm)\">\n      <p>Os campos com * são obrigatórios</p>\n      <div class=\"form-group\">\n        <input type=\"text\"\n        #nameRef\n        name=\"name\"\n        [ngModel]=\"congregation.name\"\n        (ngModelChange)=\"congregation.name = $event\"\n        class=\"form-control\"\n        placeholder=\"*Congregação...\">\n      </div>\n      <input type=\"submit\" [value]=\"textInput\" class=\"btn btn-light\" [disabled]=\"!congregation.name\">\n      <button id=\"resetButton\"(click)=\"clearState()\" type=\"button\" class=\"btn btn-info\" [hidden]=\"!congregation.name && this.textInput != 'Atualizar'\">Reset</button>\n    </form>\n  </div>\n</div>\n\n\n<div *ngIf=\"congregation && modeView == true\" class=\"col-md-6\" >\n\n    <a   [routerLink]=\"\" (click)=\"backMainView()\">\n        <i  class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n      </a>\n\n  <div class=\"card\" @fade>\n    <h3 class=\"card-header\">{{ congregation.name }}</h3>\n    <div class=\"card-body\" >\n\n\n          <h4  > ID: {{ congregation.id }}</h4>\n\n\n      <!-- <hr>\n      <div class=\"row\">\n        <ul class=\"list-group\">\n         <li class=\"list-group-item\">Não existem detalhes</li>\n        </ul>\n    </div> -->\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-md-6\">\n\n\n          <input type=\"text\" class=\"form-control\" name=\"filteredName\" [ngModel]=\"filteredName\" (ngModelChange)=\"filteredName = $event\"\n            placeholder=\"Filtrar por nome\">\n\n\n\n\n          <div class=\"mt-1\">\n          <table *ngIf=\"congregations?.length > 0;else noCongregations\" class=\"table\" >\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>Nome</th>\n                <th id=\"actions\" colspan=\"3\">Ações</th>\n              </tr>\n            </thead>\n            <tbody @fade>\n              <tr *ngFor=\"let congregation of  congregations | filter: filteredName : 'name'\">\n                <td >{{ congregation.name }}</td>\n                <td ><button (click)=\"onSelectedToView(congregation)\" ><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td>\n             <td ><button (click)=\"onSelectedToChange(congregation)\" ><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button></td>\n              <td ><button id=\"deleteButton\" (click)=\"onDeleteClick(congregation.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n            </td>\n\n              </tr>\n            </tbody>\n\n          </table>\n\n\n\n\n  <!-- <ul class=\"list-group\" *ngIf=\"congregations?.length > 0;else noCongregations\" @fade>\n    <li *ngFor=\"let congregation of congregations | filter: filteredName : 'name' \" [class.list-group-item-secondary]=\"selectedCongregation === congregation\" class=\"list-group-item d-flex justify-content-between\n    align-items-center\">\n      <a (click)=\"onSelected(congregation)\" href=\"javascript:void(0);\">{{ congregation.name }}</a>\n      <i (click)=\"onDeleteClick(congregation.id)\" class=\"fa fa-remove\"></i>\n    </li>\n\n  </ul> -->\n\n  <ng-template #noCongregations>\n    <hr><h5>Não existem congregaçõess cadastrados no sistema</h5>\n    </ng-template>\n  </div>\n\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/congregations/add-congregation/add-congregation.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/congregations/add-congregation/add-congregation.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AddCongregationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCongregationComponent", function() { return AddCongregationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _congregations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../congregations.service */ "./src/app/components/congregations/congregations.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCongregationComponent = /** @class */ (function () {
    function AddCongregationComponent(congregationsService, dialog) {
        this.congregationsService = congregationsService;
        this.dialog = dialog;
        this.congregations = [];
        this.loaded = false;
        this.isNew = true;
        this.textInput = "Criar";
        this.filteredName = "";
        this.modeView = false;
        this.congregation = {
            id: "",
            name: ""
        };
    }
    AddCongregationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.congregations = this.congregationsService.Congregations;
        if (this.congregations.length <= 0)
            this.congregationsService.getCongregationsServer();
        this.congregationsSub = this.congregationsService
            .getCongregationsUpdateListener()
            .subscribe(function (congregationsData) {
            _this.congregations = congregationsData;
        });
    };
    AddCongregationComponent.prototype.onSelectedToChange = function (congregation) {
        this.congregation = {
            id: congregation.id,
            name: congregation.name
        };
        this.modeView = false;
        this.isNew = false;
        this.textInput = "Atualizar";
        window.scrollTo(0, 0);
    };
    AddCongregationComponent.prototype.onSelectedToView = function (congregation) {
        this.congregation = {
            id: congregation.id,
            name: congregation.name
        };
        this.modeView = true;
        window.scrollTo(0, 0);
    };
    AddCongregationComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog
            .open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], dialogConfig)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this.congregationsService.deleteCongregation(id);
                _this.backMainView();
                window.scrollTo(0, 0);
            }
        });
    };
    AddCongregationComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
        }
        else if (this.isNew) {
            this.congregationsService.createCongregation(value);
            this.congregation = this.clearModel();
        }
        else {
            value.id = this.congregation.id;
            this.congregationsService.updateCongregation(value.id, value);
            this.clearState();
        }
    };
    AddCongregationComponent.prototype.backMainView = function () {
        this.modeView = false;
        this.clearState();
    };
    AddCongregationComponent.prototype.ngOnDestroy = function () {
        this.congregationsSub.unsubscribe();
    };
    AddCongregationComponent.prototype.clearState = function () {
        this.congregation = this.clearModel();
        this.isNew = true;
        this.textInput = "Criar";
    };
    AddCongregationComponent.prototype.clearModel = function () {
        var model;
        return model = {
            id: "",
            name: ""
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("nameRef"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddCongregationComponent.prototype, "nameRef", void 0);
    AddCongregationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-congregation",
            template: __webpack_require__(/*! ./add-congregation.component.html */ "./src/app/components/congregations/add-congregation/add-congregation.component.html"),
            styles: [__webpack_require__(/*! ./add-congregation.component.css */ "./src/app/components/congregations/add-congregation/add-congregation.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_congregations_service__WEBPACK_IMPORTED_MODULE_2__["CongregationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AddCongregationComponent);
    return AddCongregationComponent;
}());



/***/ }),

/***/ "./src/app/components/congregations/congregations-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/congregations/congregations-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: CongregationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongregationsRoutingModule", function() { return CongregationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_congregation_add_congregation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-congregation/add-congregation.component */ "./src/app/components/congregations/add-congregation/add-congregation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _add_congregation_add_congregation_component__WEBPACK_IMPORTED_MODULE_2__["AddCongregationComponent"] }
];
var CongregationsRoutingModule = /** @class */ (function () {
    function CongregationsRoutingModule() {
    }
    CongregationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CongregationsRoutingModule);
    return CongregationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/congregations/congregations.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/congregations/congregations.module.ts ***!
  \******************************************************************/
/*! exports provided: CongregationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongregationsModule", function() { return CongregationsModule; });
/* harmony import */ var _congregations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./congregations-routing.module */ "./src/app/components/congregations/congregations-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_congregation_add_congregation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-congregation/add-congregation.component */ "./src/app/components/congregations/add-congregation/add-congregation.component.ts");
/* harmony import */ var src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/filter.module */ "./src/app/pipes/filter.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CongregationsModule = /** @class */ (function () {
    function CongregationsModule() {
    }
    CongregationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_congregation_add_congregation_component__WEBPACK_IMPORTED_MODULE_4__["AddCongregationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _congregations_routing_module__WEBPACK_IMPORTED_MODULE_0__["CongregationsRoutingModule"],
                src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterModule"]
            ]
        })
    ], CongregationsModule);
    return CongregationsModule;
}());



/***/ }),

/***/ "./src/app/pipes/filter.module.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/filter.module.ts ***!
  \****************************************/
/*! exports provided: FilterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterModule", function() { return FilterModule; });
/* harmony import */ var src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["FilterPipe"]
            ],
            exports: [
                src_app_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_0__["FilterPipe"]
            ]
        })
    ], FilterModule);
    return FilterModule;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName, propName2) {
        if (value.length === 0 || filterString === "")
            return value;
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            var name_1 = item[propName] + ' ' + item[propName2];
            if (name_1.toUpperCase().substring(0, filterString.length) ===
                filterString.toUpperCase().substring(0, filterString.length)) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ })

}]);
//# sourceMappingURL=components-congregations-congregations-module.js.map