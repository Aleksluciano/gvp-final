(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-users-module"],{

/***/ "./src/app/components/users/add-user/add-user.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/add-user/add-user.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: steelblue;\n  font-size: 15px;\n}\n\n\n\n.radio-inline{\n  color: black;\n}\n\n\n\n.card-body{\n  background-color: gainsboro;\n}\n\n\n\n.btn-primary {\n  color: #ffffff;\n  background-color: steelblue;\n  border-color: #130269;\n}\n\n\n\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited,\n.btn-primary:focus {\n  color: #ffffff;\n  background-color: royalblue !important;\n  border-color: #130269;\n}\n\n\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::placeholder{\n  opacity: 0.5;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7OztBQUlEO0VBQ0UsYUFBYTtDQUNkOzs7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7Ozs7QUFHRDtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsc0JBQXNCO0NBQ3ZCOzs7O0FBR0Q7Ozs7RUFJRSxlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtDQUN2Qjs7OztBQUVEO0VBQ0UsYUFBYTtDQUNkOzs7O0FBRkQ7RUFDRSxhQUFhO0NBQ2Q7Ozs7QUFGRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG5cblxuLnJhZGlvLWlubGluZXtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uY2FyZC1ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XG59XG5cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiAjMTMwMjY5O1xufVxuXG5cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTphY3RpdmUsXG4uYnRuLXByaW1hcnk6dmlzaXRlZCxcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMTMwMjY5O1xufVxuXG46OnBsYWNlaG9sZGVye1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/users/add-user/add-user.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/add-user/add-user.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a [routerLink]=\"\" (click)=onBackClicked() routerLinkActive=\"router-link-active\" class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n    </a>\n  </div>\n</div>\n\n<div class=\"card\" @fade>\n  <div class=\"card-header\">\n    Adicionar Usuário\n  </div>\n  <div class=\"card-body\">\n      <br>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Dados pessoais</h6>\n\n    <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\n\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n\n          <div class=\"form-group\">\n            <label for=\"firstName\">Nome *</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            #firstNameRef\n            name=\"firstName\"\n            #firstNameModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':firstNameModel.errors && firstNameModel.touched}\"\n            [ngModel]=\"user.firstName\"\n            (ngModelChange)=\"user.firstName = $event\"\n            minlength=\"3\"\n            autofocus\n            required>\n\n            <div [hidden]=\"!firstNameModel.errors?.required\" class=\"invalid-feedback\">\n              Nome requerido\n            </div>\n\n            <div [hidden]=\"!firstNameModel.errors?.minlength\" class=\"invalid-feedback\">\n              Deve ter pelo menos 3 caracteres\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastName\">Sobrenome *</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"lastName\"\n            #lastNameModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':lastNameModel.errors && lastNameModel.touched}\"\n            [ngModel]=\"user.lastName\"\n            (ngModelChange)=\"user.lastName = $event\"\n            minlength=\"2\"\n            required>\n\n            <div [hidden]=\"!lastNameModel.errors?.required\" class=\"invalid-feedback\">\n              Sobrenome requerido\n            </div>\n\n            <div [hidden]=\"!lastNameModel.errors?.minlength\" class=\"invalid-feedback\">\n              Deve ter pelo menos 3 caracteres\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"row\">\n\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"mobilePhone\">Telefone celular</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"mobilePhone\"\n                  #mobilePhoneModel=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':mobilePhoneModel.errors && mobilePhoneModel.touched}\"\n                  [(ngModel)]=\"user.mobilePhone\"\n                  (keydown)=\"maskPhones.onKeyPressMobilePhone($event)\"\n                  minlength=\"15\"\n                  maxlength=\"15\"\n                  placeholder=\"Ex.: (00) 00000-0000\"\n                  >\n\n                  <div [hidden]=\"!mobilePhoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                      Formato incorreto\n                    </div>\n\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"phone\">Telefone Residencial</label>\n                    <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"phone\"\n                    #phoneModel=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':phoneModel.errors && phoneModel.touched}\"\n                    [(ngModel)]=\"user.phone\"\n                    (keydown)=\"maskPhones.onKeyPressPhone($event)\"\n                    minlength=\"14\"\n                    maxlength=\"14\"\n                    placeholder=\"Ex.: (00) 0000-0000\"\n                    >\n\n                    <div [hidden]=\"!phoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                        Formato incorreto\n                      </div>\n\n                  </div>\n                </div>\n      </div>\n\n      <div class=\"row\">\n\n<div class=\"col-md-2\">\n  <br><br>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Endereço</h6>\n\n</div>\n</div>\n\n      <div class=\"row\">\n\n       <div class=\"col-md-2\">\n          <div class=\"form-group\">\n\n              <label for=\"cep\">CEP</label>\n              <div class=\"input-group\">\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"cep\"\n              #cepModel=\"ngModel\"\n              [ngClass]=\"{'is-invalid':cepModel.errors && cepModel.touched}\"\n              [(ngModel)]=\"user.cep\"\n              >\n              <span class=\"input-group-btn\">\n\n                  <button id=\"cepButton\" type=\"button\" class=\"btn btn-info\" (click)=\"searchCep()\">\n                      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                   </button>\n               </span>\n              </div>\n            </div>\n\n          </div>\n\n            <div class=\"col-md-2\">\n                 <div class=\"form-group\">\n                     <label for=\"state\">Estado</label>\n                     <input\n                     type=\"text\"\n                     class=\"form-control\"\n                     name=\"state\"\n                     #stateModel=\"ngModel\"\n                     [ngClass]=\"{'is-invalid':stateModel.errors && stateModel.touched}\"\n                     [(ngModel)]=\"user.state\"\n                     maxlength=\"2\"\n\n                     >\n\n                   </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"city\">Cidade</label>\n                        <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"city\"\n                        #cityModel=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':cityModel.errors && cityModel.touched}\"\n                        [(ngModel)]=\"user.city\"\n\n                        >\n\n                      </div>\n                   </div>\n\n                   <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"neighborhood\">Bairro</label>\n                          <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          name=\"neighborhood\"\n                          #neighborhoodModel=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':neighborhoodModel.errors && neighborhoodModel.touched}\"\n                          [(ngModel)]=\"user.neighborhood\"\n                          >\n\n                        </div>\n                     </div>\n\n                     <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"address\">Logradouro (Rua, Avenida, etc)</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"address\"\n                            #addressModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':addressModel.errors && addressModel.touched}\"\n                            [(ngModel)]=\"user.address\"\n                            >\n\n                          </div>\n                       </div>\n\n                       <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                            <label for=\"numeral\">Número</label>\n                            <input\n                            type=\"number\"\n                            class=\"form-control\"\n                            name=\"numeral\"\n                            #numeralModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':numeralModel.errors && numeralModel.touched}\"\n                            [(ngModel)]=\"user.numeral\"\n                            >\n\n                          </div>\n                       </div>\n                       <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"numeral\">Complemento</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"complement\"\n                            #complementModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':\n                            complementModel.errors &&\n                            complementModel.touched}\"\n                            [(ngModel)]=\"user.complement\"\n                            >\n\n                          </div>\n                       </div>\n\n      </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"col-md-3\">\n              <br><br>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Informações Adicionais</h6>\n\n            </div>\n            </div>\n\n            <div class=\"row\">\n            <div class=\"form-group\" class=\"col-md-3\" id=\"sel\">\n\n                <label for=\"congregation\">Congregação *</label>\n                <select #userCongregation=\"ngModel\" type=\"text\" [(ngModel)]=\"congregation\" class=\"form-control\" name='congregation' [ngClass]=\"{'is-invalid':userCongregation.errors &&\n                  userCongregation.touched}\"\n                  required>\n                  <option> </option>\n                  <option *ngFor=\"let cong of congregations\" [ngValue]=\"cong\">{{ cong?.name }}</option>\n                </select>\n\n                <div [hidden]=\"!userCongregation.errors?.required\" class=\"invalid-feedback\">\n                  Congregação requerida\n                </div>\n\n              </div>\n\n            </div>\n            <br>\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n\n                     <label>Perfil</label><br>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\"  name=\"perfil\" value=\"Membro\" id=\"Membro\" [(ngModel)]=\"user.perfil\" > Membro\n                      </label>&nbsp;&nbsp;\n                      <label class=\"radio-inline\">\n                        <input type=\"radio\"  name=\"perfil\" value=\"Secretário\" id=\"Secretario\" [(ngModel)]=\"user.perfil\"> Secretário\n                      </label>&nbsp;&nbsp;\n                      <label class=\"radio-inline\">\n                          <input type=\"radio\" name=\"perfil\" value=\"Coordenador\" id=\"Coordenador\" [(ngModel)]=\"user.perfil\"> Coordenador\n                        </label>\n                      </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                   <label>Região de atuação</label><br>\n                  <label class=\"radio-inline\">\n                      <input type=\"radio\"  name=\"region\" value=\"Leste\" [(ngModel)]=\"user.region\"> Leste\n                    </label>&nbsp;&nbsp;\n                    <label class=\"radio-inline\">\n                      <input type=\"radio\"  name=\"region\" value=\"Oeste\" [(ngModel)]=\"user.region\"> Oeste\n                    </label>&nbsp;&nbsp;\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"region\" value=\"Norte\" [(ngModel)]=\"user.region\"> Norte\n                      </label>&nbsp;&nbsp;\n                      <label class=\"radio-inline\">\n                          <input type=\"radio\" name=\"region\" value=\"Sul\" [(ngModel)]=\"user.region\"> Sul\n                        </label>&nbsp;&nbsp;\n                        <label class=\"radio-inline\">\n                            <input type=\"radio\" name=\"region\" value=\"Sudeste\" [(ngModel)]=\"user.region\"> Sudeste\n                          </label>&nbsp;&nbsp;\n                    </div>\n            </div>\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <br><br>\n                  <h6 class=\"card-subtitle mb-2 text-muted\">Dados para Login</h6>\n\n                </div>\n                </div>\n\n\n<div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email *</label>\n          <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          #emailModel=\"ngModel\"\n          [ngClass]=\"{'is-invalid':emailModel.errors && emailModel.touched}\"\n          [(ngModel)]=\"user.email\"\n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          placeholder=\"Ex.: usuario@dominio.com\"\n          required>\n\n          <div [hidden]=\"!emailModel.errors?.required\" class=\"invalid-feedback\">\n            Email requerido\n          </div>\n\n          <div [hidden]=\"!emailModel.errors?.pattern\" class=\"invalid-feedback\">\n            Formato incorreto\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"password\">Senha *</label>\n            <input\n            type=\"password\"\n            class=\"form-control\"\n            name=\"password\"\n            #passwordModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':passwordModel.errors && passwordModel.touched}\"\n            [(ngModel)]=\"user.password\"\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n            placeholder=\"Tamanho mínimo de 6 caracteres\"\n            pattern=\".{6,}\"\n            autocomplete=\"false\"\n            required>\n\n            <div [hidden]=\"!passwordModel.errors?.required\" class=\"invalid-feedback\">\n              Senha requerida\n            </div>\n\n            <div [hidden]=\"!passwordModel.errors?.pattern\" class=\"invalid-feedback\">\n              Formato incorreto\n            </div>\n          </div>\n        </div>\n    </div>\n\n<br><br>\n\n      <input type=\"submit\" value=\"Criar\" class=\"btn btn-primary btn-block\">\n\n    </form>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/users/add-user/add-user.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/add-user/add-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users.service */ "./src/app/components/users/users.service.ts");
/* harmony import */ var _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../congregations/congregations.service */ "./src/app/components/congregations/congregations.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../info-modal/info-modal.component */ "./src/app/components/info-modal/info-modal.component.ts");
/* harmony import */ var _mask_phone_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mask/phone-mask */ "./src/app/mask/phone-mask.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(flashMessage, usersService, congregationsService, viacep, dialog, location) {
        this.flashMessage = flashMessage;
        this.usersService = usersService;
        this.congregationsService = congregationsService;
        this.viacep = viacep;
        this.dialog = dialog;
        this.location = location;
        this.congregations = [];
        this.congregation = { id: "", name: "" };
        this.users = [];
        this.user = {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            mobilePhone: "",
            phone: "",
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            address: "",
            numeral: null,
            complement: "",
            congregation: "",
            perfil: "Membro",
            region: "Leste",
            password: ""
        };
        this.maskPhones = new _mask_phone_mask__WEBPACK_IMPORTED_MODULE_9__["MaskPhones"](this.user);
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.usersService.Users;
        if (this.users.length <= 0)
            this.usersService.getUsersServer();
        this.usersSub = this.usersService
            .getUsersUpdateListener()
            .subscribe(function () {
            _this.resetForm();
        });
        this.congregations = this.congregationsService.Congregations;
        if (this.congregations.length <= 0)
            this.congregationsService.getCongregationsServer();
        this.congregationsSub = this.congregationsService
            .getCongregationsUpdateListener()
            .subscribe(function (congregationsData) {
            _this.congregations = congregationsData;
        });
    };
    AddUserComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // Show Error
            this.flashMessage.show("Preencha o formulário corretamente", {
                cssClass: "alert-danger",
                timeout: 4000
            });
            window.scrollTo(0, 0);
        }
        else {
            // Add new client
            value.congregation = this.congregation.name;
            this.usersService.createUser(value);
        }
    };
    AddUserComponent.prototype.searchCep = function () {
        var _this = this;
        if (!this.user.cep)
            return;
        this.viacep.buscarPorCep(this.user.cep).then(function (endereco) {
            _this.user.cep = endereco.cep;
            _this.user.state = endereco.uf;
            _this.user.city = endereco.localidade;
            _this.user.neighborhood = endereco.bairro;
            _this.user.address = endereco.logradouro;
        }).catch(function (error) {
            //outro teste
            _this.dialog.open(_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_8__["InfoModalComponent"], {
                data: { title: "Erro", message: error.message }
            });
        });
    };
    AddUserComponent.prototype.resetForm = function () {
        window.scrollTo(0, 0);
        this.form.resetForm();
        //Reset form and focus
        this.form.setValue({
            firstName: "",
            lastName: "",
            email: "",
            mobilePhone: "",
            phone: "",
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            address: "",
            numeral: null,
            complement: "",
            congregation: "",
            perfil: "Membro",
            region: "Leste",
            password: ""
        });
    };
    AddUserComponent.prototype.ngOnDestroy = function () {
        this.congregationsSub.unsubscribe();
        this.usersSub.unsubscribe();
    };
    AddUserComponent.prototype.onBackClicked = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("userForm"),
        __metadata("design:type", Object)
    ], AddUserComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("firstNameRef"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddUserComponent.prototype, "firstNameRef", void 0);
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-user",
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/components/users/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/components/users/add-user/add-user.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
            _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_6__["CongregationsService"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__["NgxViacepService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/components/users/edit-user/edit-user.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/edit-user/edit-user.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: steelblue;\n  font-size: 15px;\n}\n\n\n\n.radio-inline{\n  color: black;\n}\n\n\n\n.card-body{\n  background-color: gainsboro;\n}\n\n\n\n.btn-primary {\n  color: #ffffff;\n  background-color: steelblue;\n  border-color: #130269;\n}\n\n\n\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited,\n.btn-primary:focus {\n  color: #ffffff;\n  background-color: royalblue !important;\n  border-color: #130269;\n}\n\n\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::placeholder{\n  opacity: 0.5;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOzs7O0FBSUQ7RUFDRSxhQUFhO0NBQ2Q7Ozs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7OztBQUdEO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7Ozs7QUFHRDs7OztFQUlFLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsc0JBQXNCO0NBQ3ZCOzs7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7Ozs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7OztBQUZEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9lZGl0LXVzZXIvZWRpdC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuXG5cbi5yYWRpby1pbmxpbmV7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gIGJvcmRlci1jb2xvcjogIzEzMDI2OTtcbn1cblxuXG4uYnRuLXByaW1hcnk6aG92ZXIsXG4uYnRuLXByaW1hcnk6YWN0aXZlLFxuLmJ0bi1wcmltYXJ5OnZpc2l0ZWQsXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzEzMDI2OTtcbn1cblxuOjpwbGFjZWhvbGRlcntcbiAgb3BhY2l0eTogMC41O1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/users/edit-user/edit-user.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/edit-user/edit-user.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a [routerLink]=\"\" (click)=onBackClicked() class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n    </a>\n  </div>\n</div>\n\n<div class=\"card\" @fade>\n  <div class=\"card-header\">\n    Atualizar Usuário\n  </div>\n  <div class=\"card-body\">\n      <br>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Dados pessoais</h6>\n\n    <form #userForm=\"ngForm\" (ngSubmit)=\"onSubmit(userForm)\">\n\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n\n          <div class=\"form-group\">\n            <label for=\"firstName\">Nome *</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"firstName\"\n            #firstNameModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':firstNameModel.errors && firstNameModel.touched}\"\n            [ngModel]=\"user.firstName\"\n            (ngModelChange)=\"user.firstName = $event\"\n            minlength=\"3\"\n            required>\n\n            <div [hidden]=\"!firstNameModel.errors?.required\" class=\"invalid-feedback\">\n              Nome requerido\n            </div>\n\n            <div [hidden]=\"!firstNameModel.errors?.minlength\" class=\"invalid-feedback\">\n              Deve ter pelo menos 3 caracteres\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastName\">Sobrenome *</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"lastName\"\n            #lastNameModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':lastNameModel.errors && lastNameModel.touched}\"\n            [ngModel]=\"user.lastName\"\n            (ngModelChange)=\"user.lastName = $event\"\n            minlength=\"2\"\n            required>\n\n            <div [hidden]=\"!lastNameModel.errors?.required\" class=\"invalid-feedback\">\n              Sobrenome requerido\n            </div>\n\n            <div [hidden]=\"!lastNameModel.errors?.minlength\" class=\"invalid-feedback\">\n              Deve ter pelo menos 3 caracteres\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"row\">\n\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"mobilePhone\">Telefone celular</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"mobilePhone\"\n                  #mobilePhoneModel=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':mobilePhoneModel.errors && mobilePhoneModel.touched}\"\n                  [(ngModel)]=\"user.mobilePhone\"\n                  (keypress)=\"maskPhones.onKeyPressMobilePhone($event)\"\n                  minlength=\"15\"\n                  maxlength=\"15\"\n                  placeholder=\"Ex.: (00) 00000-0000\"\n                  >\n\n                  <div [hidden]=\"!mobilePhoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                      Formato incorreto\n                    </div>\n\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"phone\">Telefone Residencial</label>\n                    <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"phone\"\n                    #phoneModel=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':phoneModel.errors && phoneModel.touched}\"\n                    [(ngModel)]=\"user.phone\"\n                    (keypress)=\"maskPhones.onKeyPressPhone($event)\"\n                    minlength=\"14\"\n                    maxlength=\"14\"\n                    placeholder=\"Ex.: (00) 0000-0000\"\n                    >\n\n                    <div [hidden]=\"!phoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                        Formato incorreto\n                      </div>\n\n                  </div>\n                </div>\n      </div>\n\n      <div class=\"row\">\n\n<div class=\"col-md-2\">\n  <br><br>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Endereço</h6>\n\n</div>\n</div>\n\n      <div class=\"row\">\n\n       <div class=\"col-md-2\">\n          <div class=\"form-group\">\n              <label for=\"cep\">CEP</label>\n              <div class=\"input-group\">\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"cep\"\n              #cepModel=\"ngModel\"\n              [ngClass]=\"{'is-invalid':cepModel.errors && cepModel.touched}\"\n              [(ngModel)]=\"user.cep\"\n              >\n              <span class=\"input-group-btn\">\n\n                  <button id=\"cepButton\" type=\"button\" class=\"btn btn-info\" (click)=\"searchCep()\">\n                      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                   </button>\n               </span>\n              </div>\n            </div>\n\n          </div>\n\n            <div class=\"col-md-2\">\n                 <div class=\"form-group\">\n                     <label for=\"state\">Estado</label>\n                     <input\n                     type=\"text\"\n                     class=\"form-control\"\n                     name=\"state\"\n                     #stateModel=\"ngModel\"\n                     [ngClass]=\"{'is-invalid':stateModel.errors && stateModel.touched}\"\n                     [(ngModel)]=\"user.state\"\n                     maxlength=\"2\"\n\n                     >\n\n                   </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"city\">Cidade</label>\n                        <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"city\"\n                        #cityModel=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':cityModel.errors && cityModel.touched}\"\n                        [(ngModel)]=\"user.city\"\n\n                        >\n\n                      </div>\n                   </div>\n\n                   <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"neighborhood\">Bairro</label>\n                          <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          name=\"neighborhood\"\n                          #neighborhoodModel=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':neighborhoodModel.errors && neighborhoodModel.touched}\"\n                          [(ngModel)]=\"user.neighborhood\"\n                          >\n\n                        </div>\n                     </div>\n\n                     <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"address\">Logradouro (Rua, Avenida, etc)</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"address\"\n                            #addressModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':addressModel.errors && addressModel.touched}\"\n                            [(ngModel)]=\"user.address\"\n                            >\n\n                          </div>\n                       </div>\n\n                       <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                            <label for=\"numeral\">Número</label>\n                            <input\n                            type=\"number\"\n                            class=\"form-control\"\n                            name=\"numeral\"\n                            #numeralModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':numeralModel.errors && numeralModel.touched}\"\n                            [(ngModel)]=\"user.numeral\"\n                            >\n\n                          </div>\n                       </div>\n                       <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"numeral\">Complemento</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"complement\"\n                            #complementModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':\n                            complementModel.errors &&\n                            complementModel.touched}\"\n                            [(ngModel)]=\"user.complement\"\n                            >\n\n                          </div>\n                       </div>\n\n      </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"col-md-3\">\n              <br><br>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Informações Adicionais</h6>\n\n            </div>\n            </div>\n\n            <div class=\"row\">\n            <div class=\"form-group\" class=\"col-md-3\" id=\"sel\">\n\n                <label for=\"congregation\">Congregação *</label>\n                <select #userCongregation=\"ngModel\" type=\"text\" [(ngModel)]=\"congregation\" class=\"form-control\" name='congregation' [ngClass]=\"{'is-invalid':userCongregation.errors &&\n                  userCongregation.touched}\"\n                  required>\n                  <option> </option>\n                  <option *ngFor=\"let cong of congregations\" [ngValue]=\"cong\">{{ cong?.name }}</option>\n                </select>\n\n                <div [hidden]=\"!userCongregation.errors?.required\" class=\"invalid-feedback\">\n                  Congregação requerida\n                </div>\n\n              </div>\n            </div>\n            <br>\n            <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                     <label>Perfil</label><br>\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\"  name=\"perfil\" value=\"Membro\" id=\"Membro\" [(ngModel)]=\"user.perfil\" > Membro\n                      </label>&nbsp;&nbsp;\n                      <label class=\"radio-inline\">\n                        <input type=\"radio\"  name=\"perfil\" value=\"Secretário\" id=\"Secretario\" [(ngModel)]=\"user.perfil\"> Secretário\n                      </label>&nbsp;&nbsp;\n                      <label class=\"radio-inline\">\n                          <input type=\"radio\" name=\"perfil\" value=\"Coordenador\" id=\"Coordenador\" [(ngModel)]=\"user.perfil\"> Coordenador\n                        </label>\n                      </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                   <label>Região de atuação</label><br>\n                  <label class=\"radio-inline\">\n                      <input type=\"radio\"  name=\"region\" value=\"Leste\" [(ngModel)]=\"user.region\"> Leste\n                    </label>&nbsp;&nbsp;\n                    <label class=\"radio-inline\">\n                      <input type=\"radio\"  name=\"region\" value=\"Oeste\" [(ngModel)]=\"user.region\"> Oeste\n                    </label>&nbsp;&nbsp;\n                    <label class=\"radio-inline\">\n                        <input type=\"radio\" name=\"region\" value=\"Norte\" [(ngModel)]=\"user.region\"> Norte\n                      </label>&nbsp;&nbsp;\n                      <label class=\"radio-inline\">\n                          <input type=\"radio\" name=\"region\" value=\"Sul\" [(ngModel)]=\"user.region\"> Sul\n                        </label>&nbsp;&nbsp;\n                        <label class=\"radio-inline\">\n                            <input type=\"radio\" name=\"region\" value=\"Sudeste\" [(ngModel)]=\"user.region\"> Sudeste\n                          </label>&nbsp;&nbsp;\n                    </div>\n            </div>\n            </div>\n\n            <div class=\"row\">\n\n                <div class=\"col-md-3\">\n                  <br><br>\n                  <h6 class=\"card-subtitle mb-2 text-muted\">Dados para Login</h6>\n\n                </div>\n                </div>\n\n\n<div class=\"row\">\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email *</label>\n          <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          #emailModel=\"ngModel\"\n          [ngClass]=\"{'is-invalid':emailModel.errors && emailModel.touched}\"\n          [(ngModel)]=\"user.email\"\n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          placeholder=\"Ex.: usuario@dominio.com\"\n          required>\n\n          <div [hidden]=\"!emailModel.errors?.required\" class=\"invalid-feedback\">\n            Email requerido\n          </div>\n\n          <div [hidden]=\"!emailModel.errors?.pattern\" class=\"invalid-feedback\">\n            Formato incorreto\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n<br><br>\n\n      <input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary btn-block\">\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/edit-user/edit-user.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/edit-user/edit-user.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../users.service */ "./src/app/components/users/users.service.ts");
/* harmony import */ var _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../congregations/congregations.service */ "./src/app/components/congregations/congregations.service.ts");
/* harmony import */ var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../info-modal/info-modal.component */ "./src/app/components/info-modal/info-modal.component.ts");
/* harmony import */ var src_app_mask_phone_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/mask/phone-mask */ "./src/app/mask/phone-mask.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(flashMessage, usersService, congregationsService, viacep, route, dialog, location) {
        this.flashMessage = flashMessage;
        this.usersService = usersService;
        this.congregationsService = congregationsService;
        this.viacep = viacep;
        this.route = route;
        this.dialog = dialog;
        this.location = location;
        this.user = {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            mobilePhone: "",
            phone: "",
            cep: "",
            state: "",
            city: "",
            neighborhood: "",
            address: "",
            numeral: null,
            complement: "",
            congregation: "",
            perfil: "Membro",
            region: "Leste",
            password: ""
        };
        this.congregations = [];
        this.congregation = { id: "", name: "" };
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params["id"];
        // Get client
        var user = this.usersService.getUser(this.id);
        if (user)
            this.user = user;
        else {
            this.usersService.getOneUserServer(this.id);
        }
        this.userSub = this.usersService.getOneUserUpdateListener().subscribe(function (user) { return _this.user = user; });
        this.maskPhones = new src_app_mask_phone_mask__WEBPACK_IMPORTED_MODULE_10__["MaskPhones"](this.user);
        this.congregations = this.congregationsService.Congregations;
        if (this.congregations.length <= 0)
            this.congregationsService.getCongregationsServer();
        else {
            this.congregation = this.searchCongregation();
        }
        this.congregationsSub = this.congregationsService
            .getCongregationsUpdateListener()
            .subscribe(function (congregationsData) {
            _this.congregations = congregationsData;
            _this.congregation = _this.searchCongregation();
        });
    };
    EditUserComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // Show Error
            this.flashMessage.show("Preencha o formulário corretamente", {
                cssClass: "alert-danger",
                timeout: 4000
            });
        }
        else {
            // Update User
            value.congregation = this.congregation.name;
            value.id = this.id;
            this.usersService.updateUser(this.id, value);
        }
    };
    EditUserComponent.prototype.searchCep = function () {
        var _this = this;
        if (!this.user.cep)
            return;
        this.viacep
            .buscarPorCep(this.user.cep)
            .then(function (endereco) {
            _this.user.cep = endereco.cep;
            _this.user.state = endereco.uf;
            _this.user.city = endereco.localidade;
            _this.user.neighborhood = endereco.bairro;
            _this.user.address = endereco.logradouro;
        })
            .catch(function (error) {
            // Alguma coisa deu errado :/
            _this.dialog.open(_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_9__["InfoModalComponent"], {
                data: { title: "Erro", message: error.message }
            });
        });
    };
    EditUserComponent.prototype.ngOnDestroy = function () {
        this.congregationsSub.unsubscribe();
        this.userSub.unsubscribe();
    };
    EditUserComponent.prototype.searchCongregation = function () {
        var _this = this;
        var congs = this.congregations.filter(function (c) { return c.name == _this.user.congregation; });
        return congs[0];
    };
    EditUserComponent.prototype.onBackClicked = function () {
        this.location.back();
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-user",
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/components/users/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/components/users/edit-user/edit-user.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"],
            _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_8__["CongregationsService"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__["NgxViacepService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/components/users/list-users/list-users.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/users/list-users/list-users.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash{\n  color: red;\n}\n\n.fa-edit{\n  background-color: orange;\n}\n\n.fa-eye{\n  background-color: lightblue;\n}\n\n#actions{\n  text-align: center;\n}\n\ntr:hover {\n  background-color: lightgoldenrodyellow;\n}\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n::placeholder{\n  opacity: 0.5;\n}\n\nthead{\n  background-color: rgb(35, 196, 236);\n\n}\n\ntd{\n  word-break:break-all\n}\n\n@media screen and (max-width: 480px) {\n  .colhide{\n    display: none;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFHRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFHRDtFQUNFLHVDQUF1QztDQUN4Qzs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG9DQUFvQzs7Q0FFckM7O0FBRUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBR0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9saXN0LXVzZXJzL2xpc3QtdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLWVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLWV5ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG5cbiNhY3Rpb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuOjpwbGFjZWhvbGRlcntcbiAgb3BhY2l0eTogMC41O1xufVxuXG50aGVhZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM1LCAxOTYsIDIzNik7XG5cbn1cblxudGR7XG4gIHdvcmQtYnJlYWs6YnJlYWstYWxsXG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbGhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/users/list-users/list-users.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/users/list-users/list-users.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-10\">\n    <h2><i class=\"fa fa-users\"></i> GVP's</h2>\n  </div>\n  <div class=\"col-md-2\">\n    <h5 class=\"text-right text-secondary\">Total: {{ users?.length }}</h5>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-10\">\n    <div @fade>\n      <!-- <label for=\"filter\" ><strong>Filtro</strong></label> -->\n      <div class=\"row\">\n      <div class=\"col-md-3\">\n      <input type=\"text\" class=\"form-control\" name=\"filteredName\" [ngModel]=\"filteredName | titlecase\" (ngModelChange)=\"filteredName = $event\"\n        placeholder=\"Filtrar por nome\">\n      </div>\n      <div class=\"col-md-3\">\n        <input type=\"text\" class=\"form-control\" name=\"filteredEmail\" [ngModel]=\"filteredEmail\" (ngModelChange)=\"filteredEmail = $event\"\n        placeholder=\"Filtrar por email\">\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"col-md-2 mt-1\">\n      <a routerLink=\"add\" class=\"btn btn-success btn-block\">\n        <i class=\"fa fa-plus\"> Novo</i>\n      </a>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-10\">\n    <table *ngIf=\"users?.length > 0;else noUsers\" class=\"table\">\n      <thead class=\"thead\">\n        <tr>\n          <th>Nome</th>\n          <th class=\"colhide\">Email</th>\n          <th class=\"colhide\">Celular</th>\n          <th class=\"colhide\">Congregação</th>\n          <th colspan=\"3\" id=\"actions\">Ações</th>\n        </tr>\n      </thead>\n      <tbody @fade>\n        <tr *ngFor=\"let user of  users | filter: filteredName : 'firstName' : 'lastName' | filter: filteredEmail: 'email'\">\n          <td><a routerLink=\"{{ user.id }}\">{{ user.firstName }} {{ user.lastName }}</a></td>\n          <td class=\"colhide\">{{ user.email }}</td>\n          <td class=\"colhide\">{{ user.mobilePhone }}</td>\n          <td class=\"colhide\">{{ user.congregation }}</td>\n        <td><button id=\"eyeButton\" routerLink=\"{{ user.id }}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td>\n        <td><button id=\"editButton\" routerLink=\"edit/{{ user.id }}\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button></td>\n        <td><button id=\"deleteButton\" (click)=\"onDeleteClick(user.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n      </td>\n\n        </tr>\n      </tbody>\n\n    </table>\n\n  </div>\n</div>\n\n\n<ng-template #noUsers>\n  <hr>\n  <h5>Não existem irmãos cadastrados no sistema</h5>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/users/list-users/list-users.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/list-users/list-users.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUsersComponent", function() { return ListUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/components/users/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//
var ListUsersComponent = /** @class */ (function () {
    function ListUsersComponent(usersService, router, dialog) {
        this.usersService = usersService;
        this.router = router;
        this.dialog = dialog;
        this.users = [];
        this.filteredName = '';
        this.filteredEmail = '';
    }
    ListUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.usersService.Users;
        if (this.users.length <= 0)
            this.usersService.getUsersServer();
        this.usersSub = this.usersService
            .getUsersUpdateListener()
            .subscribe(function (usersData) {
            _this.users = usersData;
        });
    };
    ListUsersComponent.prototype.ngOnDestroy = function () {
        this.usersSub.unsubscribe();
    };
    ListUsersComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            if (result)
                _this.usersService.deleteUser(id);
        });
    };
    ListUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-users',
            template: __webpack_require__(/*! ./list-users.component.html */ "./src/app/components/users/list-users/list-users.component.html"),
            styles: [__webpack_require__(/*! ./list-users.component.css */ "./src/app/components/users/list-users/list-users.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ListUsersComponent);
    return ListUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-details/user-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/users/user-details/user-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item {\n\tfont-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;\n}\n\n.Topic{\n  background: blanchedalmond;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2VyLWRldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywrRUFBK0U7Q0FDL0U7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xuXHRmb250LWZhbWlseTogUm9ja3dlbGwsQ291cmllciBCb2xkLENvdXJpZXIsR2VvcmdpYSxUaW1lcyxUaW1lcyBOZXcgUm9tYW4sc2VyaWY7XG59XG5cbi5Ub3BpY3tcbiAgYmFja2dyb3VuZDogYmxhbmNoZWRhbG1vbmQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/users/user-details/user-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/users/user-details/user-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a [routerLink]=\"\" (click)=onBackClicked() class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n      </a>\n    </div>\n    <div class=\"col md-6\">\n      <div class=\"btn-group pull-right\">\n        <a routerLink=\"/users/edit/{{ id }}\" class=\"btn btn-warning\">\n          Editar\n        </a>\n        <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">Deletar</button>\n      </div>\n    </div>\n  </div>\n  <hr>\n  <div *ngIf=\"user\" class=\"card\" @fade>\n    <h3 class=\"card-header\">{{ user.firstName }} {{ user.lastName }}</h3>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-sm-6\">\n          <h4> ID: {{ user.id }}</h4>\n        </div>\n    </div>\n      <hr>\n      <div class=\"row\">\n      <ul class=\"list-group col-md-4\">\n         <li class=\"list-group-item\"><strong class=\"Topic\">Email:</strong> {{ user.email }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Celular:</strong> {{ user.mobilePhone }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Telefone:</strong> {{ user.phone }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Congregação:</strong> {{ user.congregation }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Perfil:</strong> {{ user.perfil }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Região:</strong> {{ user.region }}</li>\n        </ul>\n      <ul class=\"list-group col-md-4\">\n         <li class=\"list-group-item\"><strong class=\"Topic\">Endereço:</strong> {{ user.address }}, {{ user.numeral }}\n          {{ user.complement }} - {{ user.neighborhood }} - {{ user.city }} - {{ user.state }}</li>\n      </ul>\n        <!-- <ul class=\"list-group col-md-4\">\n         <li class=\"list-group-item\"><strong class=\"Topic\">Estado:</strong> {{ user.state }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Cidade:</strong> {{ user.city }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Bairro:</strong> {{ user.neighborhood }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Logradouro:</strong> {{ user.address }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Número:</strong> {{ user.numeral }}</li>\n         <li class=\"list-group-item\"><strong class=\"Topic\">Complemento:</strong> {{ user.complement }}</li>\n      </ul>\n      <ul class=\"list-group col-md-4\">\n          <li class=\"list-group-item\"><strong class=\"Topic\">Cep:</strong> {{ user.cep }}</li>\n        </ul> -->\n    </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/users/user-details/user-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/user-details/user-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../users.service */ "./src/app/components/users/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(usersService, router, route, dialog, location) {
        this.usersService = usersService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.location = location;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get client
        var user = this.usersService.getUser(this.id);
        if (user)
            this.user = user;
        else {
            this.usersService.getOneUserServer(this.id);
        }
        this.userSub = this.usersService.getOneUserUpdateListener().subscribe(function (user) { return _this.user = user; });
        //When delete return to list screen
        this.usersSub = this.usersService
            .getUsersUpdateListener()
            .subscribe(function () {
            _this.router.navigate(["/users"]);
        });
    };
    UserDetailsComponent.prototype.onDeleteClick = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            if (result)
                _this.usersService.deleteUser(_this.id);
        });
    };
    UserDetailsComponent.prototype.ngOnDestroy = function () {
        this.usersSub.unsubscribe();
        this.userSub.unsubscribe();
    };
    UserDetailsComponent.prototype.onBackClicked = function () {
        this.location.back();
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/users/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/users/user-details/user-details.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/users/users-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/components/users/add-user/add-user.component.ts");
/* harmony import */ var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-users/list-users.component */ "./src/app/components/users/list-users/list-users.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/components/users/edit-user/edit-user.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/components/users/user-details/user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", component: _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_3__["ListUsersComponent"] },
    { path: "add", component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
    { path: "edit/:id", component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_4__["EditUserComponent"] },
    { path: ":id", component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailsComponent"] },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-users/list-users.component */ "./src/app/components/users/list-users/list-users.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/components/users/add-user/add-user.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/components/users/edit-user/edit-user.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/components/users/user-details/user-details.component.ts");
/* harmony import */ var _pipes_filter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../pipes/filter.module */ "./src/app/pipes/filter.module.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/components/users/users-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _list_users_list_users_component__WEBPACK_IMPORTED_MODULE_5__["ListUsersComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_7__["EditUserComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__["NgxViacepModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _pipes_filter_module__WEBPACK_IMPORTED_MODULE_9__["FilterModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_10__["UsersRoutingModule"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-users-users-module.js.map