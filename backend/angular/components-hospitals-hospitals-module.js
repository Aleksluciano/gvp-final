(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-hospitals-hospitals-module"],{

/***/ "./src/app/components/hospitals/add-hospital/add-hospital.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/hospitals/add-hospital/add-hospital.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash{\n  color: red;\n}\n\n.fa-edit{\n  background-color: orange;\n}\n\n.fa-eye{\n  background-color: lightblue;\n}\n\n#actions{\n  text-align: center;\n}\n\ntr:hover {\n  background-color: lightgoldenrodyellow;\n}\n\n.list-group-item {\n\tfont-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;\n}\n\n.Topic{\n  background: blanchedalmond;\n}\n\n#arrowBack, #textVoltar{\n  color: rgb(67, 117, 211);\n}\n\nlabel {\n  color: blueviolet;\n  font-size: 15px;\n}\n\n#bodyForm {\n  background-color: gainsboro;\n}\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n::placeholder{\n  opacity: 0.5;\n}\n\np{\n  font-size: 12px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3NwaXRhbHMvYWRkLWhvc3BpdGFsL2FkZC1ob3NwaXRhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUdEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUdEO0VBQ0UsdUNBQXVDO0NBQ3hDOztBQUdEO0NBQ0MsK0VBQStFO0NBQy9FOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFHRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9zcGl0YWxzL2FkZC1ob3NwaXRhbC9hZGQtaG9zcGl0YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLWVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLWV5ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG5cbiNhY3Rpb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuXG4ubGlzdC1ncm91cC1pdGVtIHtcblx0Zm9udC1mYW1pbHk6IFJvY2t3ZWxsLENvdXJpZXIgQm9sZCxDb3VyaWVyLEdlb3JnaWEsVGltZXMsVGltZXMgTmV3IFJvbWFuLHNlcmlmO1xufVxuXG4uVG9waWN7XG4gIGJhY2tncm91bmQ6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4jYXJyb3dCYWNrLCAjdGV4dFZvbHRhcntcbiAgY29sb3I6IHJnYig2NywgMTE3LCAyMTEpO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cblxuI2JvZHlGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG46OnBsYWNlaG9sZGVye1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbnB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/hospitals/add-hospital/add-hospital.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/hospitals/add-hospital/add-hospital.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n\n\n    <div *ngIf=\"hospital && modeView == false\"class=\"col-md-6\">\n    <h2 ><i class=\"fa fa-hospital-o\"></i> Hospitais</h2>\n\n\n      <h5 class=\"text-right text-secondary\">Total: {{ hospitals?.length }}</h5>\n\n<div id=\"bodyForm\" class=\"card card-body mb-3\" @fade>\n  <form #hospitalForm=\"ngForm\" (ngSubmit)=\"onSubmit(hospitalForm)\">\n      <p>Os campos com * são obrigatórios</p>\n    <div class=\"form-group\">\n      <input type=\"text\"\n      #nameRef\n      name=\"name\"\n      [ngModel]=\"hospital.name\"\n      (ngModelChange)=\"hospital.name = $event\"\n      class=\"form-control\"\n      placeholder=\"*Hospital...\">\n    </div>\n    <div class=\"row\">\n\n      <div class=\"col-md-4\">\n         <div class=\"form-group\">\n            <div class=\"input-group\">\n             <input\n             type=\"text\"\n             class=\"form-control\"\n             name=\"cep\"\n             #cepModel=\"ngModel\"\n             [ngClass]=\"{'is-invalid':cepModel.errors && cepModel.touched}\"\n             [(ngModel)]=\"hospital.cep\"\n             placeholder=\"Cep\"\n             >\n             <span class=\"input-group-btn\">\n\n                <button id=\"cepButton\" type=\"button\" class=\"btn btn-info\" (click)=\"searchCep()\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                 </button>\n             </span>\n           </div>\n          </div>\n\n         </div>\n\n           <div class=\"col-md-2\">\n                <div class=\"form-group\">\n\n                    <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"state\"\n                    #stateModel=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':stateModel.errors && stateModel.touched}\"\n                    [(ngModel)]=\"hospital.state\"\n                    maxlength=\"2\"\n                    placeholder=\"*UF\"\n                    >\n\n                  </div>\n               </div>\n\n               <div class=\"col-md-6\">\n                   <div class=\"form-group\">\n\n                       <input\n                       type=\"text\"\n                       class=\"form-control\"\n                       name=\"city\"\n                       #cityModel=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':cityModel.errors && cityModel.touched}\"\n                       [(ngModel)]=\"hospital.city\"\n                       placeholder=\"*Cidade\"\n                       >\n\n                     </div>\n                  </div>\n\n                  <div class=\"col-md-5\">\n                     <div class=\"form-group\">\n\n                         <input\n                         type=\"text\"\n                         class=\"form-control\"\n                         name=\"neighborhood\"\n                         #neighborhoodModel=\"ngModel\"\n                         [ngClass]=\"{'is-invalid':neighborhoodModel.errors && neighborhoodModel.touched}\"\n                         [(ngModel)]=\"hospital.neighborhood\"\n                         placeholder=\"*Bairro\"\n                         >\n\n                       </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                       <div class=\"form-group\">\n\n                           <input\n                           type=\"text\"\n                           class=\"form-control\"\n                           name=\"address\"\n                           #addressModel=\"ngModel\"\n                           [ngClass]=\"{'is-invalid':addressModel.errors && addressModel.touched}\"\n                           [(ngModel)]=\"hospital.address\"\n                           placeholder=\"*Logradouro\"\n                           >\n\n                         </div>\n                      </div>\n\n                      <div class=\"col-md-3\">\n                       <div class=\"form-group\">\n\n                           <input\n                           type=\"number\"\n                           class=\"form-control\"\n                           name=\"numeral\"\n                           #numeralModel=\"ngModel\"\n                           [ngClass]=\"{'is-invalid':numeralModel.errors && numeralModel.touched}\"\n                           [(ngModel)]=\"hospital.numeral\"\n                           placeholder=\"*Nº\"\n                           >\n\n                         </div>\n                      </div>\n                      <div class=\"col-md-6\">\n                       <div class=\"form-group\">\n\n                           <input\n                           type=\"text\"\n                           class=\"form-control\"\n                           name=\"complement\"\n                           #complementModel=\"ngModel\"\n                           [ngClass]=\"{'is-invalid':\n                           complementModel.errors &&\n                           complementModel.touched}\"\n                           [(ngModel)]=\"hospital.complement\"\n                           placeholder=\"Complemento\"\n                           >\n\n                         </div>\n                      </div>\n                    </div>\n    <input type=\"submit\" [value]=\"textInput\" class=\"btn btn-light\"\n    [disabled]=\"!hospital.name || !hospital.state || !hospital.city || !hospital.neighborhood || !hospital.address || !hospital.numeral\">\n    <button id=\"resetButton\"(click)=\"clearState()\" type=\"button\" class=\"btn btn-info\" [hidden]=\"!hospital.name && this.textInput != 'Atualizar'\">Reset</button>\n  </form>\n</div>\n</div >\n\n<div *ngIf=\"hospital && modeView == true\" class=\"col-md-6\" >\n\n    <a   [routerLink]=\"\" (click)=\"backMainView()\">\n        <i  class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n      </a>\n\n  <div class=\"card\" @fade>\n    <h3 class=\"card-header\">{{ hospital.name }}</h3>\n    <div class=\"card-body\" >\n\n\n          <h4  > ID: {{ hospital.id }}</h4>\n\n\n      <hr>\n      <div class=\"row\">\n        <ul class=\"list-group\">\n         <li class=\"list-group-item\"><strong class=\"Topic\">Estado:</strong> {{ hospital.state }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Cidade:</strong> {{ hospital.city }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Bairro:</strong> {{ hospital.neighborhood }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Logradouro:</strong> {{ hospital.address }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Número:</strong> {{ hospital.numeral }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Complemento:</strong> {{ hospital.complement }}</li>\n          <li class=\"list-group-item\"><strong class=\"Topic\">Cep:</strong> {{ hospital.cep }}</li>\n        </ul>\n    </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-6\">\n\n        <input type=\"text\" class=\"form-control\" name=\"filteredName\" [ngModel]=\"filteredName\" (ngModelChange)=\"filteredName = $event\"\n          placeholder=\"Filtrar por nome\">\n\n\n\n        <div class=\"mt-1\">\n        <table *ngIf=\"hospitals?.length > 0;else noHospitals\" class=\"table\" >\n          <thead class=\"thead-dark\">\n            <tr>\n              <th>Nome</th>\n              <th id=\"actions\" colspan=\"3\">Ações</th>\n            </tr>\n          </thead>\n          <tbody @fade>\n            <tr *ngFor=\"let hospital of  hospitals | filter: filteredName : 'name'\">\n              <td >{{ hospital.name }}</td>\n              <td ><button (click)=\"onSelectedToView(hospital)\" ><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td>\n           <td ><button (click)=\"onSelectedToChange(hospital)\" ><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button></td>\n            <td ><button id=\"deleteButton\" (click)=\"onDeleteClick(hospital.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n          </td>\n\n            </tr>\n          </tbody>\n\n        </table>\n\n\n\n\n\n<!-- <ul class=\"list-group\" *ngIf=\"hospitals?.length > 0;else noHospitals\" @fade>\n  <li *ngFor=\"let hospital of hospitals | filter: filteredName : 'name' \" [class.list-group-item-secondary]=\"selectedHospital === hospital\" class=\"list-group-item d-flex justify-content-between\n  align-items-center\">\n    <a (click)=\"onSelected(hospital)\" href=\"javascript:void(0);\">{{ hospital.name }}</a>\n    <i (click)=\"onDeleteClick(hospital.id)\" class=\"fa fa-remove\"></i>\n  </li>\n\n</ul> -->\n\n<ng-template #noHospitals>\n  <hr><h5>Não existem hospitais cadastrados no sistema</h5>\n  </ng-template>\n\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/hospitals/add-hospital/add-hospital.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/hospitals/add-hospital/add-hospital.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddHospitalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHospitalComponent", function() { return AddHospitalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _hospitals_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hospitals.service */ "./src/app/components/hospitals/hospitals.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../info-modal/info-modal.component */ "./src/app/components/info-modal/info-modal.component.ts");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddHospitalComponent = /** @class */ (function () {
    function AddHospitalComponent(hospitalsService, dialog, viacep) {
        this.hospitalsService = hospitalsService;
        this.dialog = dialog;
        this.viacep = viacep;
        this.hospitals = [];
        this.loaded = false;
        this.isNew = true;
        this.textInput = "Criar";
        this.filteredName = "";
        this.modeView = false;
        this.hospital = {
            id: "",
            name: "",
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            address: "",
            numeral: null,
            complement: ""
        };
    }
    AddHospitalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hospitals = this.hospitalsService.Hospitals;
        if (this.hospitals.length <= 0)
            this.hospitalsService.getHospitalsServer();
        this.hospitalsSub = this.hospitalsService
            .getHospitalsUpdateListener()
            .subscribe(function (hospitalsData) {
            _this.hospitals = hospitalsData;
        });
    };
    AddHospitalComponent.prototype.onSelectedToChange = function (hospital) {
        this.hospital = {
            id: hospital.id,
            name: hospital.name,
            cep: hospital.cep,
            state: hospital.state,
            city: hospital.city,
            neighborhood: hospital.neighborhood,
            address: hospital.address,
            numeral: hospital.numeral,
            complement: hospital.complement
        };
        this.modeView = false;
        this.isNew = false;
        this.textInput = "Atualizar";
        window.scrollTo(0, 0);
    };
    AddHospitalComponent.prototype.onSelectedToView = function (hospital) {
        this.hospital = {
            id: hospital.id,
            name: hospital.name,
            cep: hospital.cep,
            state: hospital.state,
            city: hospital.city,
            neighborhood: hospital.neighborhood,
            address: hospital.address,
            numeral: hospital.numeral,
            complement: hospital.complement
        };
        this.modeView = true;
        window.scrollTo(0, 0);
    };
    AddHospitalComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog
            .open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], dialogConfig)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this.hospitalsService.deleteHospital(id);
                _this.backMainView();
                window.scrollTo(0, 0);
            }
        });
    };
    AddHospitalComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
        }
        else if (this.isNew) {
            this.hospitalsService.createHospital(value);
            this.hospital = this.clearModel();
        }
        else {
            value.id = this.hospital.id;
            this.hospitalsService.updateHospital(value.id, value);
            this.clearState();
        }
    };
    AddHospitalComponent.prototype.searchCep = function () {
        var _this = this;
        if (!this.hospital.cep)
            return;
        this.viacep
            .buscarPorCep(this.hospital.cep)
            .then(function (endereco) {
            _this.hospital.cep = endereco.cep;
            _this.hospital.state = endereco.uf;
            _this.hospital.city = endereco.localidade;
            _this.hospital.neighborhood = endereco.bairro;
            _this.hospital.address = endereco.logradouro;
        })
            .catch(function (error) {
            // Alguma coisa deu errado :/
            _this.dialog.open(_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_5__["InfoModalComponent"], {
                data: { title: "Erro", message: error.message }
            });
        });
    };
    AddHospitalComponent.prototype.ngOnDestroy = function () {
        this.hospitalsSub.unsubscribe();
    };
    AddHospitalComponent.prototype.backMainView = function () {
        this.clearState();
        this.modeView = false;
    };
    AddHospitalComponent.prototype.clearState = function () {
        this.hospital = this.clearModel();
        this.isNew = true;
        this.textInput = "Criar";
    };
    AddHospitalComponent.prototype.clearModel = function () {
        var model;
        return model = {
            id: "",
            name: "",
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            address: "",
            numeral: null,
            complement: ""
        };
    };
    AddHospitalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-hospital",
            template: __webpack_require__(/*! ./add-hospital.component.html */ "./src/app/components/hospitals/add-hospital/add-hospital.component.html"),
            styles: [__webpack_require__(/*! ./add-hospital.component.css */ "./src/app/components/hospitals/add-hospital/add-hospital.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_hospitals_service__WEBPACK_IMPORTED_MODULE_2__["HospitalsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__["NgxViacepService"]])
    ], AddHospitalComponent);
    return AddHospitalComponent;
}());



/***/ }),

/***/ "./src/app/components/hospitals/hospitals-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/hospitals/hospitals-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: HospitalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsRoutingModule", function() { return HospitalsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-hospital/add-hospital.component */ "./src/app/components/hospitals/add-hospital/add-hospital.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_2__["AddHospitalComponent"] }
];
var HospitalsRoutingModule = /** @class */ (function () {
    function HospitalsRoutingModule() {
    }
    HospitalsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HospitalsRoutingModule);
    return HospitalsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/hospitals/hospitals.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/hospitals/hospitals.module.ts ***!
  \**********************************************************/
/*! exports provided: HospitalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsModule", function() { return HospitalsModule; });
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-hospital/add-hospital.component */ "./src/app/components/hospitals/add-hospital/add-hospital.component.ts");
/* harmony import */ var src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/filter.module */ "./src/app/pipes/filter.module.ts");
/* harmony import */ var _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hospitals-routing.module */ "./src/app/components/hospitals/hospitals-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HospitalsModule = /** @class */ (function () {
    function HospitalsModule() {
    }
    HospitalsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_hospital_add_hospital_component__WEBPACK_IMPORTED_MODULE_4__["AddHospitalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _hospitals_routing_module__WEBPACK_IMPORTED_MODULE_6__["HospitalsRoutingModule"],
                src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterModule"],
                _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_0__["NgxViacepModule"]
            ]
        })
    ], HospitalsModule);
    return HospitalsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-hospitals-hospitals-module.js.map