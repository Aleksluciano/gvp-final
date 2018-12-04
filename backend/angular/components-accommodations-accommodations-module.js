(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-accommodations-accommodations-module"],{

/***/ "./src/app/components/accommodations/accommodations-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/accommodations/accommodations-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AccommodationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccommodationsRoutingModule", function() { return AccommodationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_accommodation_add_accommodation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-accommodation/add-accommodation.component */ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _add_accommodation_add_accommodation_component__WEBPACK_IMPORTED_MODULE_2__["AddAccommodationComponent"] }
];
var AccommodationsRoutingModule = /** @class */ (function () {
    function AccommodationsRoutingModule() {
    }
    AccommodationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AccommodationsRoutingModule);
    return AccommodationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/accommodations/accommodations.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/accommodations/accommodations.module.ts ***!
  \********************************************************************/
/*! exports provided: AccommodationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccommodationsModule", function() { return AccommodationsModule; });
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_accommodation_add_accommodation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-accommodation/add-accommodation.component */ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.ts");
/* harmony import */ var src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/filter.module */ "./src/app/pipes/filter.module.ts");
/* harmony import */ var _accommodations_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accommodations-routing.module */ "./src/app/components/accommodations/accommodations-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccommodationsModule = /** @class */ (function () {
    function AccommodationsModule() {
    }
    AccommodationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_accommodation_add_accommodation_component__WEBPACK_IMPORTED_MODULE_4__["AddAccommodationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _accommodations_routing_module__WEBPACK_IMPORTED_MODULE_6__["AccommodationsRoutingModule"],
                src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterModule"],
                _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_0__["NgxViacepModule"]
            ]
        })
    ], AccommodationsModule);
    return AccommodationsModule;
}());



/***/ }),

/***/ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/accommodations/add-accommodation/add-accommodation.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash{\n  color: red;\n}\n\n.fa-edit{\n  background-color: orange;\n}\n\n.fa-eye{\n  background-color: lightblue;\n}\n\n#actions{\n  text-align: center;\n}\n\ntr:hover {\n  background-color: lightgoldenrodyellow;\n}\n\n.list-group-item {\n\tfont-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;\n}\n\n.Topic{\n  background: blanchedalmond;\n}\n\n#arrowBack, #textVoltar{\n  color: rgb(67, 117, 211);\n}\n\nlabel {\n  color: blueviolet;\n  font-size: 15px;\n}\n\n#bodyForm {\n  background-color: gainsboro;\n}\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n::placeholder{\n  opacity: 0.5;\n}\n\np{\n  font-size: 12px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvbW1vZGF0aW9ucy9hZGQtYWNjb21tb2RhdGlvbi9hZGQtYWNjb21tb2RhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztDQUNaOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0UsNEJBQTRCO0NBQzdCOztBQUdEO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUdEO0VBQ0UsdUNBQXVDO0NBQ3hDOztBQU1EO0NBQ0MsK0VBQStFO0NBQy9FOztBQUVEO0VBQ0UsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UseUJBQXlCO0NBQzFCOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtDQUNqQjs7QUFLRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFHRDtFQUNFLGdCQUFnQjtDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb21tb2RhdGlvbnMvYWRkLWFjY29tbW9kYXRpb24vYWRkLWFjY29tbW9kYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLWVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLWV5ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG5cbiNhY3Rpb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuXG5cblxuXG4ubGlzdC1ncm91cC1pdGVtIHtcblx0Zm9udC1mYW1pbHk6IFJvY2t3ZWxsLENvdXJpZXIgQm9sZCxDb3VyaWVyLEdlb3JnaWEsVGltZXMsVGltZXMgTmV3IFJvbWFuLHNlcmlmO1xufVxuXG4uVG9waWN7XG4gIGJhY2tncm91bmQ6IGJsYW5jaGVkYWxtb25kO1xufVxuXG4jYXJyb3dCYWNrLCAjdGV4dFZvbHRhcntcbiAgY29sb3I6IHJnYig2NywgMTE3LCAyMTEpO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiBibHVldmlvbGV0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cblxuXG5cbiNib2R5Rm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn1cblxuOjpwbGFjZWhvbGRlcntcbiAgb3BhY2l0eTogMC41O1xufVxuXG5cbnB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/accommodations/add-accommodation/add-accommodation.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n\n\n  <div *ngIf=\"accommodation && modeView == false\"class=\"col-md-6\">\n  <h2 ><i class=\"fa fa-fort-awesome\"></i> Hospedagem</h2>\n\n\n    <h5 class=\"text-right text-secondary\">Total: {{ accommodations?.length }}</h5>\n\n<div id=\"bodyForm\" class=\"card card-body mb-3\" @fade>\n<form #accommodationForm=\"ngForm\" (ngSubmit)=\"onSubmit(accommodationForm)\">\n    <p>Os campos com * são obrigatórios</p>\n  <div class=\"form-group\">\n    <input type=\"text\"\n    #nameRef\n    name=\"name\"\n    [ngModel]=\"accommodation.name\"\n    (ngModelChange)=\"accommodation.name = $event\"\n    class=\"form-control\"\n    placeholder=\"*Hospedagem...\">\n  </div>\n  <div class=\"row\">\n\n      <div class=\"col-md-4\" >\n\n       <div id=\"cep\" class=\"form-group\">\n          <div class=\"input-group\">\n           <input\n           type=\"text\"\n           class=\"form-control\"\n           name=\"cep\"\n           #cepModel=\"ngModel\"\n           [ngClass]=\"{'is-invalid':cepModel.errors && cepModel.touched}\"\n           [(ngModel)]=\"accommodation.cep\"\n           placeholder=\"Cep\"\n           >\n\n           <span class=\"input-group-btn\">\n\n              <button id=\"cepButton\" type=\"button\" class=\"btn btn-info\" (click)=\"searchCep()\">\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n               </button>\n           </span>\n          </div>\n\n           <!-- <button id=\"cepButton\" type=\"button\" (click)=\"searchCep()\">\n              <i class=\"fa fa-search\" aria-hidden=\"true\"></i></button> -->\n\n\n\n\n         </div>\n\n\n      </div>\n\n\n\n         <div class=\"col-md-2\">\n              <div class=\"form-group\">\n\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"state\"\n                  #stateModel=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':stateModel.errors && stateModel.touched}\"\n                  [(ngModel)]=\"accommodation.state\"\n                  maxlength=\"2\"\n                  placeholder=\"*UF\"\n                  >\n\n                </div>\n             </div>\n\n             <div class=\"col-md-6\">\n                 <div class=\"form-group\">\n\n                     <input\n                     type=\"text\"\n                     class=\"form-control\"\n                     name=\"city\"\n                     #cityModel=\"ngModel\"\n                     [ngClass]=\"{'is-invalid':cityModel.errors && cityModel.touched}\"\n                     [(ngModel)]=\"accommodation.city\"\n                     placeholder=\"*Cidade\"\n                     >\n\n                   </div>\n                </div>\n\n                <div class=\"col-md-5\">\n                   <div class=\"form-group\">\n\n                       <input\n                       type=\"text\"\n                       class=\"form-control\"\n                       name=\"neighborhood\"\n                       #neighborhoodModel=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':neighborhoodModel.errors && neighborhoodModel.touched}\"\n                       [(ngModel)]=\"accommodation.neighborhood\"\n                       placeholder=\"*Bairro\"\n                       >\n\n                     </div>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                     <div class=\"form-group\">\n\n                         <input\n                         type=\"text\"\n                         class=\"form-control\"\n                         name=\"address\"\n                         #addressModel=\"ngModel\"\n                         [ngClass]=\"{'is-invalid':addressModel.errors && addressModel.touched}\"\n                         [(ngModel)]=\"accommodation.address\"\n                         placeholder=\"*Logradouro\"\n                         >\n\n                       </div>\n                    </div>\n\n                    <div class=\"col-md-3\">\n                     <div class=\"form-group\">\n\n                         <input\n                         type=\"number\"\n                         class=\"form-control\"\n                         name=\"numeral\"\n                         #numeralModel=\"ngModel\"\n                         [ngClass]=\"{'is-invalid':numeralModel.errors && numeralModel.touched}\"\n                         [(ngModel)]=\"accommodation.numeral\"\n                         placeholder=\"*Nº\"\n                         >\n\n                       </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                     <div class=\"form-group\">\n\n                         <input\n                         type=\"text\"\n                         class=\"form-control\"\n                         name=\"complement\"\n                         #complementModel=\"ngModel\"\n                         [ngClass]=\"{'is-invalid':\n                         complementModel.errors &&\n                         complementModel.touched}\"\n                         [(ngModel)]=\"accommodation.complement\"\n                         placeholder=\"Complemento\"\n                         >\n\n                       </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row mt-2\">\n                  <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                      <input type=\"text\"\n                      name=\"responsable\"\n                      [ngModel]=\"accommodation.responsable\"\n                      (ngModelChange)=\"accommodation.responsable = $event\"\n                      class=\"form-control\"\n                      placeholder=\"*Responsável...\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                          <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"mobilePhone\"\n                        #mobilePhoneModel=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':mobilePhoneModel.errors && mobilePhoneModel.touched}\"\n                        [(ngModel)]=\"accommodation.mobilePhone\"\n                        (keypress)=\"maskPhones.onKeyPressMobilePhone($event)\"\n                        minlength=\"15\"\n                        maxlength=\"15\"\n                        placeholder=\"*(00) 00000-0000 - celular\"\n                        >\n\n                        <div [hidden]=\"!mobilePhoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                            Formato incorreto\n                          </div>\n\n                      </div>\n                    </div>\n\n                      <div class=\"col-md-6\">\n\n\n                        <div class=\"form-group\">\n                            <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          name=\"phone\"\n                          #phoneModel=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':phoneModel.errors && phoneModel.touched}\"\n                          [(ngModel)]=\"accommodation.phone\"\n                          (keypress)=\"maskPhones.onKeyPressPhone($event)\"\n                          minlength=\"14\"\n                          maxlength=\"14\"\n                          placeholder=\"(00) 0000-0000 - fixo\"\n                          >\n\n                          <div [hidden]=\"!phoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                              Formato incorreto\n                            </div>\n\n                        </div>\n                      </div>\n                    </div>\n\n  <input type=\"submit\" [value]=\"textInput\" class=\"btn btn-light\"\n  [disabled]=\"!accommodation.name || !accommodation.state || !accommodation.city || !accommodation.neighborhood || !accommodation.address || !accommodation.numeral || !accommodation.responsable || !accommodation.mobilePhone\" >\n  <button id=\"resetButton\"(click)=\"clearState()\" type=\"button\" class=\"btn btn-info\" [hidden]=\"!accommodation.name && this.textInput != 'Atualizar'\">Reset</button>\n</form>\n</div>\n</div >\n\n<div *ngIf=\"accommodation && modeView == true\" class=\"col-md-6\" >\n\n  <a   [routerLink]=\"\" (click)=\"backMainView()\">\n      <i  class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n    </a>\n\n<div class=\"card\" @fade>\n  <h3 class=\"card-header\">{{ accommodation.name }}</h3>\n  <div class=\"card-body\" >\n\n\n        <h4  > ID: {{ accommodation.id }}</h4>\n\n\n    <hr>\n    <div class=\"row\">\n      <ul class=\"list-group col-md-6\">\n       <li class=\"list-group-item\"><strong class=\"Topic\">Estado:</strong> {{ accommodation.state }}</li>\n       <li class=\"list-group-item\"><strong class=\"Topic\">Cidade:</strong> {{ accommodation.city }}</li>\n       <li class=\"list-group-item\"><strong class=\"Topic\">Bairro:</strong> {{ accommodation.neighborhood }}</li>\n       <li class=\"list-group-item\"><strong class=\"Topic\">Logradouro:</strong> {{ accommodation.address }}</li>\n       <li class=\"list-group-item\"><strong class=\"Topic\">Número:</strong> {{ accommodation.numeral }}</li>\n       <li class=\"list-group-item\"><strong class=\"Topic\">Complemento:</strong> {{ accommodation.complement }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Cep:</strong> {{ accommodation.cep }}</li>\n      </ul>\n      <ul class=\"list-group col-md-6\">\n          <li class=\"list-group-item\"><strong class=\"Topic\">Responsável:</strong> {{ accommodation.responsable }}</li>\n          <li class=\"list-group-item\"><strong class=\"Topic\">Celular:</strong> {{ accommodation.mobilePhone }}</li>\n           <li class=\"list-group-item\"><strong class=\"Topic\">Telefone:</strong> {{ accommodation.phone }}</li>\n         </ul>\n  </div>\n  </div>\n</div>\n</div>\n<div class=\"col-md-6\">\n\n      <input type=\"text\" class=\"form-control\" name=\"filteredName\" [ngModel]=\"filteredName\" (ngModelChange)=\"filteredName = $event\"\n        placeholder=\"Filtrar por nome\">\n\n\n\n      <div class=\"mt-1\">\n      <table *ngIf=\"accommodations?.length > 0;else noAccommodations\" class=\"table\" >\n        <thead class=\"thead-dark\">\n          <tr>\n            <th>Nome</th>\n            <th id=\"actions\" colspan=\"3\">Ações</th>\n          </tr>\n        </thead>\n        <tbody @fade>\n          <tr *ngFor=\"let accommodation of  accommodations | filter: filteredName : 'name'\">\n            <td >{{ accommodation.name }}</td>\n            <td ><button (click)=\"onSelectedToView(accommodation)\" ><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td>\n         <td ><button (click)=\"onSelectedToChange(accommodation)\" ><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button></td>\n          <td ><button id=\"deleteButton\" (click)=\"onDeleteClick(accommodation.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n        </td>\n\n          </tr>\n        </tbody>\n\n      </table>\n\n\n\n<ng-template #noAccommodations>\n<hr><h5>Não existem hospedagens cadastradas no sistema</h5>\n</ng-template>\n\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/accommodations/add-accommodation/add-accommodation.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddAccommodationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccommodationComponent", function() { return AddAccommodationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _accommodations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accommodations.service */ "./src/app/components/accommodations/accommodations.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../info-modal/info-modal.component */ "./src/app/components/info-modal/info-modal.component.ts");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _mask_phone_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../../mask/phone-mask */ "./src/app/mask/phone-mask.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddAccommodationComponent = /** @class */ (function () {
    function AddAccommodationComponent(accommodationsService, dialog, viacep) {
        this.accommodationsService = accommodationsService;
        this.dialog = dialog;
        this.viacep = viacep;
        this.accommodations = [];
        this.loaded = false;
        this.isNew = true;
        this.textInput = "Criar";
        this.filteredName = "";
        this.modeView = false;
        this.accommodation = {
            id: "",
            name: "",
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            address: "",
            numeral: null,
            complement: "",
            responsable: "",
            mobilePhone: "",
            phone: ""
        };
    }
    AddAccommodationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accommodation = this.clearModel();
        this.accommodations = this.accommodationsService.Accommodations;
        this.maskPhones = new _mask_phone_mask__WEBPACK_IMPORTED_MODULE_7__["MaskPhones"](this.accommodation);
        if (this.accommodations.length <= 0)
            this.accommodationsService.getAccommodationsServer();
        this.accommodationsSub = this.accommodationsService
            .getAccommodationsUpdateListener()
            .subscribe(function (accommodationsData) {
            _this.accommodations = accommodationsData;
        });
    };
    AddAccommodationComponent.prototype.onSelectedToChange = function (accommodation) {
        this.accommodation = {
            id: accommodation.id,
            name: accommodation.name,
            cep: accommodation.cep,
            state: accommodation.state,
            city: accommodation.city,
            neighborhood: accommodation.neighborhood,
            address: accommodation.address,
            numeral: accommodation.numeral,
            complement: accommodation.complement,
            responsable: accommodation.responsable,
            mobilePhone: accommodation.mobilePhone,
            phone: accommodation.phone
        };
        this.maskPhones = new _mask_phone_mask__WEBPACK_IMPORTED_MODULE_7__["MaskPhones"](this.accommodation);
        this.modeView = false;
        this.isNew = false;
        this.textInput = "Atualizar";
        window.scrollTo(0, 0);
    };
    AddAccommodationComponent.prototype.onSelectedToView = function (accommodation) {
        this.accommodation = {
            id: accommodation.id,
            name: accommodation.name,
            cep: accommodation.cep,
            state: accommodation.state,
            city: accommodation.city,
            neighborhood: accommodation.neighborhood,
            address: accommodation.address,
            numeral: accommodation.numeral,
            complement: accommodation.complement,
            responsable: accommodation.responsable,
            mobilePhone: accommodation.mobilePhone,
            phone: accommodation.phone
        };
        this.modeView = true;
        window.scrollTo(0, 0);
    };
    AddAccommodationComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog
            .open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], dialogConfig)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this.accommodationsService.deleteAccommodation(id);
                _this.backMainView();
                window.scrollTo(0, 0);
            }
        });
    };
    AddAccommodationComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
        }
        else if (this.isNew) {
            this.accommodationsService.createAccommodation(value);
            this.accommodation = this.clearModel();
        }
        else {
            value.id = this.accommodation.id;
            this.accommodationsService.updateAccommodation(value.id, value);
            this.clearState();
        }
    };
    AddAccommodationComponent.prototype.searchCep = function () {
        var _this = this;
        if (!this.accommodation.cep)
            return;
        this.viacep
            .buscarPorCep(this.accommodation.cep)
            .then(function (endereco) {
            _this.accommodation.cep = endereco.cep;
            _this.accommodation.state = endereco.uf;
            _this.accommodation.city = endereco.localidade;
            _this.accommodation.neighborhood = endereco.bairro;
            _this.accommodation.address = endereco.logradouro;
        })
            .catch(function (error) {
            // Alguma coisa deu errado :/
            _this.dialog.open(_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_5__["InfoModalComponent"], {
                data: { title: "Erro", message: error.message }
            });
        });
    };
    AddAccommodationComponent.prototype.ngOnDestroy = function () {
        this.accommodationsSub.unsubscribe();
    };
    AddAccommodationComponent.prototype.backMainView = function () {
        this.modeView = false;
        this.clearState();
    };
    AddAccommodationComponent.prototype.clearModel = function () {
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
            complement: "",
            responsable: "",
            mobilePhone: "",
            phone: ""
        };
    };
    AddAccommodationComponent.prototype.clearState = function () {
        this.accommodation = this.clearModel();
        this.isNew = true;
        this.textInput = "Criar";
    };
    AddAccommodationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-accommodation",
            template: __webpack_require__(/*! ./add-accommodation.component.html */ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.html"),
            styles: [__webpack_require__(/*! ./add-accommodation.component.css */ "./src/app/components/accommodations/add-accommodation/add-accommodation.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_accommodations_service__WEBPACK_IMPORTED_MODULE_2__["AccommodationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__["NgxViacepService"]])
    ], AddAccommodationComponent);
    return AddAccommodationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-accommodations-accommodations-module.js.map