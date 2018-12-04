(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-social-assistants-assistants-module"],{

/***/ "./src/app/components/social-assistants/add-assistant/add-assistant.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/social-assistants/add-assistant/add-assistant.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash{\n  color: red;\n}\n\n.fa-edit{\n  background-color: orange;\n}\n\n.fa-eye{\n  background-color: lightblue;\n}\n\n#actions{\n  text-align: center;\n}\n\ntr:hover {\n  background-color: lightgoldenrodyellow;\n}\n\n.list-group-item {\n\tfont-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;\n}\n\n.Topic{\n  background: blanchedalmond;\n}\n\n#arrowBack, #textVoltar{\n  color: rgb(67, 117, 211);\n}\n\nlabel {\n  color: blueviolet;\n  font-size: 15px;\n}\n\n#bodyForm {\n  background-color: gainsboro;\n}\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n::placeholder{\n  opacity: 0.5;\n}\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2NpYWwtYXNzaXN0YW50cy9hZGQtYXNzaXN0YW50L2FkZC1hc3Npc3RhbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFHRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFHRDtFQUNFLHVDQUF1QztDQUN4Qzs7QUFNRDtDQUNDLCtFQUErRTtDQUMvRTs7QUFFRDtFQUNFLDJCQUEyQjtDQUM1Qjs7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7O0FBS0Q7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRkQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRkQ7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvY2lhbC1hc3Npc3RhbnRzL2FkZC1hc3Npc3RhbnQvYWRkLWFzc2lzdGFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLXRyYXNoe1xuICBjb2xvcjogcmVkO1xufVxuXG4uZmEtZWRpdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xufVxuXG4uZmEtZXlle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cblxuI2FjdGlvbnN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuXG50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xufVxuXG5cblxuXG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuXHRmb250LWZhbWlseTogUm9ja3dlbGwsQ291cmllciBCb2xkLENvdXJpZXIsR2VvcmdpYSxUaW1lcyxUaW1lcyBOZXcgUm9tYW4sc2VyaWY7XG59XG5cbi5Ub3BpY3tcbiAgYmFja2dyb3VuZDogYmxhbmNoZWRhbG1vbmQ7XG59XG5cbiNhcnJvd0JhY2ssICN0ZXh0Vm9sdGFye1xuICBjb2xvcjogcmdiKDY3LCAxMTcsIDIxMSk7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IGJsdWV2aW9sZXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuXG5cblxuI2JvZHlGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG46OnBsYWNlaG9sZGVye1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuXG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/social-assistants/add-assistant/add-assistant.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/social-assistants/add-assistant/add-assistant.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n\n\n    <div *ngIf=\"assistant && modeView == false\"class=\"col-md-6\">\n    <h2 ><i class=\"fa fa-vcard\"></i> Assistentes Sociais</h2>\n\n\n      <h5 class=\"text-right text-secondary\">Total: {{ assistants?.length }}</h5>\n\n  <div id=\"bodyForm\" class=\"card card-body mb-3\" @fade>\n  <form #assistantForm=\"ngForm\" (ngSubmit)=\"onSubmit(assistantForm)\">\n    <div class=\"form-group\">\n      <input type=\"text\"\n      #nameRef\n      name=\"name\"\n      [ngModel]=\"assistant.name\"\n      (ngModelChange)=\"assistant.name = $event\"\n      class=\"form-control\"\n      placeholder=\"Assistente Social...\">\n    </div>\n    <div class=\"mt-2\">\n        Adicionar hospitais:\n      </div>\n\n    <div class=\"row\">\n\n        <div class=\"form-group\" class=\"col-md-6\" id=\"sel\">\n             <div class=\"input-group\">\n            <select  #userHospital=\"ngModel\" type=\"text\" [(ngModel)]=\"hospital\" class=\"form-control\" name='hospital' [ngClass]=\"{'is-invalid':userHospital.errors &&\n              userHospital.touched}\">\n              <option></option>\n              <option *ngFor=\"let hosp of hospitals\" [ngValue]=\"hosp\" >{{ hosp?.name }}</option>\n            </select>\n            <span class=\"input-group-btn\" >\n\n                <button  id=\"addHospital\" type=\"button\" class=\"btn btn-info\" (click)=\"addHospital(hospital?.name)\">\n                    <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                 </button>\n             </span>\n            </div>\n\n          </div>\n        </div>\n        <div *ngIf=\"assistant.hospitals?.length > 0\" class=\"mt-2\">\n          Hospitais que tabalha:\n        </div>\n        <div>\n            <ul class=\"list-group\" *ngIf=\"assistant.hospitals?.length > 0\" @fade>\n                <li *ngFor=\"let hosp of assistant.hospitals\" class=\"list-group-item d-flex justify-content-between\n                align-items-center\">\n                    <a >{{ hosp }}</a>\n                  <i (click)=\"removeHospital(hosp)\" class=\"fa fa-remove\"></i>\n                </li>\n\n              </ul>\n        </div>\n    <div class=\"row mt-3\">\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          name=\"mobilePhone\"\n                          #mobilePhoneModel=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':mobilePhoneModel.errors && mobilePhoneModel.touched}\"\n                          [(ngModel)]=\"assistant.mobilePhone\"\n                          (keypress)=\"maskPhones.onKeyPressMobilePhone($event)\"\n                          minlength=\"15\"\n                          maxlength=\"15\"\n                          placeholder=\"(00) 00000-0000 - celular\"\n                          >\n\n                          <div [hidden]=\"!mobilePhoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                              Formato incorreto\n                            </div>\n\n                        </div>\n                      </div>\n\n\n                        <div class=\"col-md-6\">\n\n\n                          <div class=\"form-group\">\n                              <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"phone\"\n                            #phoneModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':phoneModel.errors && phoneModel.touched}\"\n                            [(ngModel)]=\"assistant.phone\"\n                            (keypress)=\"maskPhones.onKeyPressPhone($event)\"\n                            minlength=\"14\"\n                            maxlength=\"14\"\n                            placeholder=\"(00) 0000-0000 - fixo\"\n                            >\n\n                            <div [hidden]=\"!phoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                                Formato incorreto\n                              </div>\n\n                          </div>\n                        </div>\n                      </div>\n\n    <input type=\"submit\" [value]=\"textInput\" class=\"btn btn-light\" [disabled]=\"!assistant.name\">\n    <button id=\"resetButton\"(click)=\"clearState()\" type=\"button\" class=\"btn btn-info\" [hidden]=\"!assistant.name && this.textInput != 'Atualizar'\">Reset</button>\n  </form>\n  </div>\n  </div >\n\n  <div *ngIf=\"assistant && modeView == true\" class=\"col-md-6\" >\n\n    <a   [routerLink]=\"\" (click)=\"backMainView()\">\n        <i  class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n      </a>\n\n  <div class=\"card\" @fade>\n    <h3 class=\"card-header\">{{ assistant.name }}</h3>\n    <div class=\"card-body\" >\n\n\n          <h4  > ID: {{ assistant.id }}</h4>\n\n\n      <hr>\n      <div class=\"row\">\n        <ul class=\"list-group col-md-6\">\n            <li class=\"list-group-item\"><strong class=\"Topic\">Hospitais que trabalha:</strong> {{ assistant.hospitals.join(', ')}} </li>\n            <li class=\"list-group-item\"><strong class=\"Topic\">Celular:</strong> {{ assistant.mobilePhone }}</li>\n             <li class=\"list-group-item\"><strong class=\"Topic\">Telefone:</strong> {{ assistant.phone }}</li>\n           </ul>\n    </div>\n    </div>\n  </div>\n  </div>\n  <div class=\"col-md-6\">\n\n        <input type=\"text\" class=\"form-control\" name=\"filteredName\" [ngModel]=\"filteredName\" (ngModelChange)=\"filteredName = $event\"\n          placeholder=\"Filtrar por nome\">\n\n\n\n        <div class=\"mt-1\">\n        <table *ngIf=\"assistants?.length > 0;else noAssistants\" class=\"table\" >\n          <thead class=\"thead-dark\">\n            <tr>\n              <th>Nome</th>\n              <th id=\"actions\" colspan=\"3\">Ações</th>\n            </tr>\n          </thead>\n          <tbody @fade>\n            <tr *ngFor=\"let assistant of  assistants | filter: filteredName : 'name'\">\n              <td >{{ assistant.name }}</td>\n              <td ><button (click)=\"onSelectedToView(assistant)\" ><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td>\n           <td ><button (click)=\"onSelectedToChange(assistant)\" ><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button></td>\n            <td ><button id=\"deleteButton\" (click)=\"onDeleteClick(assistant.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n          </td>\n\n            </tr>\n          </tbody>\n\n        </table>\n\n\n\n  <ng-template #noAssistants>\n  <hr><h5>Não existem assistentes sociais cadastrados no sistema</h5>\n  </ng-template>\n\n  </div>\n  </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/social-assistants/add-assistant/add-assistant.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/social-assistants/add-assistant/add-assistant.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddAssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssistantComponent", function() { return AddAssistantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _assistants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assistants.service */ "./src/app/components/social-assistants/assistants.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _mask_phone_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../mask/phone-mask */ "./src/app/mask/phone-mask.ts");
/* harmony import */ var _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../hospitals/hospitals.service */ "./src/app/components/hospitals/hospitals.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddAssistantComponent = /** @class */ (function () {
    function AddAssistantComponent(assistantsService, dialog, hospitalsService) {
        this.assistantsService = assistantsService;
        this.dialog = dialog;
        this.hospitalsService = hospitalsService;
        this.assistants = [];
        this.loaded = false;
        this.isNew = true;
        this.textInput = "Criar";
        this.filteredName = "";
        this.hospitals = [];
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
        this.modeView = false;
        this.assistant = {
            id: "",
            name: "",
            hospitals: [],
            mobilePhone: "",
            phone: ""
        };
    }
    AddAssistantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assistant = this.clearModel();
        this.maskPhones = new _mask_phone_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPhones"](this.assistant);
        this.assistants = this.assistantsService.Assistants;
        if (this.assistants.length <= 0)
            this.assistantsService.getAssistantsServer();
        this.assistantsSub = this.assistantsService
            .getAssistantsUpdateListener()
            .subscribe(function (assistantsData) {
            _this.assistants = assistantsData;
        });
        this.hospitals = this.hospitalsService.Hospitals;
        if (this.hospitals.length <= 0)
            this.hospitalsService.getHospitalsServer();
        this.hospitalsSub = this.hospitalsService
            .getHospitalsUpdateListener()
            .subscribe(function (hospitalsData) {
            _this.hospitals = hospitalsData;
        });
    };
    AddAssistantComponent.prototype.onSelectedToChange = function (assistant) {
        this.assistant = {
            id: assistant.id,
            name: assistant.name,
            hospitals: assistant.hospitals.slice(),
            mobilePhone: assistant.mobilePhone,
            phone: assistant.phone
        };
        this.modeView = false;
        this.isNew = false;
        this.textInput = "Atualizar";
        window.scrollTo(0, 0);
    };
    AddAssistantComponent.prototype.onSelectedToView = function (assistant) {
        this.assistant = {
            id: assistant.id,
            name: assistant.name,
            hospitals: assistant.hospitals,
            mobilePhone: assistant.mobilePhone,
            phone: assistant.phone
        };
        this.modeView = true;
        window.scrollTo(0, 0);
    };
    AddAssistantComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog
            .open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], dialogConfig)
            .afterClosed()
            .subscribe(function (result) {
            if (result) {
                _this.assistantsService.deleteAssistant(id);
                _this.backMainView();
                window.scrollTo(0, 0);
            }
        });
    };
    AddAssistantComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
        }
        else if (this.isNew) {
            value.hospitals = this.assistant.hospitals;
            this.assistantsService.createAssistant(value);
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
            this.assistant = this.clearModel();
        }
        else {
            value.id = this.assistant.id;
            value.hospitals = this.assistant.hospitals;
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
            this.assistantsService.updateAssistant(value.id, value);
            this.clearState();
        }
    };
    AddAssistantComponent.prototype.ngOnDestroy = function () {
        this.assistantsSub.unsubscribe();
    };
    AddAssistantComponent.prototype.backMainView = function () {
        this.modeView = false;
        this.clearState();
    };
    AddAssistantComponent.prototype.clearModel = function () {
        var model;
        return model = {
            id: "",
            name: "",
            hospitals: [],
            mobilePhone: "",
            phone: ""
        };
    };
    AddAssistantComponent.prototype.clearState = function () {
        this.assistant = this.clearModel();
        this.isNew = true;
        this.textInput = "Criar";
    };
    AddAssistantComponent.prototype.addHospital = function (hospital) {
        if (hospital != "" && hospital) {
            if (!this.assistant.hospitals.includes(hospital))
                this.assistant.hospitals.push(hospital);
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
    };
    AddAssistantComponent.prototype.removeHospital = function (hospital) {
        this.assistant.hospitals.splice(this.assistant.hospitals.indexOf(hospital), 1);
    };
    AddAssistantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-assistant",
            template: __webpack_require__(/*! ./add-assistant.component.html */ "./src/app/components/social-assistants/add-assistant/add-assistant.component.html"),
            styles: [__webpack_require__(/*! ./add-assistant.component.css */ "./src/app/components/social-assistants/add-assistant/add-assistant.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_assistants_service__WEBPACK_IMPORTED_MODULE_2__["AssistantsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_6__["HospitalsService"]])
    ], AddAssistantComponent);
    return AddAssistantComponent;
}());



/***/ }),

/***/ "./src/app/components/social-assistants/assistants-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/social-assistants/assistants-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AssistantsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantsRoutingModule", function() { return AssistantsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_assistant_add_assistant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-assistant/add-assistant.component */ "./src/app/components/social-assistants/add-assistant/add-assistant.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: "", component: _add_assistant_add_assistant_component__WEBPACK_IMPORTED_MODULE_2__["AddAssistantComponent"] }
];
var AssistantsRoutingModule = /** @class */ (function () {
    function AssistantsRoutingModule() {
    }
    AssistantsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AssistantsRoutingModule);
    return AssistantsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/social-assistants/assistants.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/social-assistants/assistants.module.ts ***!
  \*******************************************************************/
/*! exports provided: AssistantsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantsModule", function() { return AssistantsModule; });
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_assistant_add_assistant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-assistant/add-assistant.component */ "./src/app/components/social-assistants/add-assistant/add-assistant.component.ts");
/* harmony import */ var src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pipes/filter.module */ "./src/app/pipes/filter.module.ts");
/* harmony import */ var _assistants_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assistants-routing.module */ "./src/app/components/social-assistants/assistants-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AssistantsModule = /** @class */ (function () {
    function AssistantsModule() {
    }
    AssistantsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_assistant_add_assistant_component__WEBPACK_IMPORTED_MODULE_4__["AddAssistantComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _assistants_routing_module__WEBPACK_IMPORTED_MODULE_6__["AssistantsRoutingModule"],
                src_app_pipes_filter_module__WEBPACK_IMPORTED_MODULE_5__["FilterModule"],
                _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_0__["NgxViacepModule"]
            ]
        })
    ], AssistantsModule);
    return AssistantsModule;
}());



/***/ }),

/***/ "./src/app/components/social-assistants/assistants.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/social-assistants/assistants.service.ts ***!
  \********************************************************************/
/*! exports provided: AssistantsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssistantsService", function() { return AssistantsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/assistants/";
var AssistantsService = /** @class */ (function () {
    function AssistantsService(_flashMessagesService, http, router) {
        this._flashMessagesService = _flashMessagesService;
        this.http = http;
        this.router = router;
        this.assistants = [];
        this.assistantsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.warnFlashMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AssistantsService.prototype.createAssistant = function (assistant) {
        var _this = this;
        this.http
            .post(BACKEND_URL, assistant)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return ({
                id: responseData.assistant._id,
                name: responseData.assistant.name,
                hospitals: responseData.assistant.hospitals.slice(),
                mobilePhone: responseData.assistant.mobilePhone,
                phone: responseData.assistant.phone
            });
        }))
            .subscribe(function (newAssistant) {
            _this.assistants.unshift(newAssistant);
            _this.assistantsUpdated.next(_this.assistants.slice());
            _this._flashMessagesService.show("Nova assistente social adicionada", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    AssistantsService.prototype.getAssistantsServer = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return {
                assistants: responseData.assistants.map(function (assistant) {
                    return ({
                        id: assistant._id,
                        name: assistant.name,
                        hospitals: assistant.hospitals.slice(),
                        mobilePhone: assistant.mobilePhone,
                        phone: assistant.phone
                    });
                })
            };
        }))
            .subscribe(function (responseData) {
            _this.assistants = responseData.assistants;
            _this.assistants.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.assistantsUpdated.next(_this.assistants.slice());
        });
    };
    Object.defineProperty(AssistantsService.prototype, "Assistants", {
        get: function () {
            return this.assistants || [];
        },
        enumerable: true,
        configurable: true
    });
    AssistantsService.prototype.getAssistantsUpdateListener = function () {
        return this.assistantsUpdated.asObservable();
    };
    AssistantsService.prototype.deleteAssistant = function (id) {
        var _this = this;
        return this.http.delete(BACKEND_URL + id).subscribe(function () {
            _this.assistants.forEach(function (u, index) {
                if (u.id == id)
                    _this.assistants.splice(index, 1);
            });
            _this.assistantsUpdated.next(_this.assistants.slice());
            _this._flashMessagesService.show("Assistente social removido", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    AssistantsService.prototype.getAssistant = function (id) {
        var assistant = this.assistants.filter(function (u) { return u.id == id; });
        return assistant[0];
    };
    AssistantsService.prototype.updateAssistant = function (id, assistant) {
        var _this = this;
        this.http.put(BACKEND_URL + id, assistant).subscribe(function (responseData) {
            _this.assistants = _this.assistants.map(function (u) {
                if (u.id == id)
                    u = assistant;
                return u;
            });
            _this.assistantsUpdated.next(_this.assistants.slice());
            _this._flashMessagesService.show("Assistente social atualizado", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    AssistantsService.prototype.warnFlashMessageListener = function () {
        return this.warnFlashMessage.asObservable();
    };
    AssistantsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AssistantsService);
    return AssistantsService;
}());



/***/ })

}]);
//# sourceMappingURL=components-social-assistants-assistants-module.js.map