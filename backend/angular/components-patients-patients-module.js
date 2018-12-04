(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-patients-patients-module"],{

/***/ "./src/app/components/patients/add-patient/add-patient.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/patients/add-patient/add-patient.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: steelblue;\n  font-size: 15px;\n}\n\n\n\n.radio-inline{\n  color: black;\n}\n\n\n\n.card-body{\n  background-color: gainsboro;\n}\n\n\n\n.btn-primary {\n  color: #ffffff;\n  background-color: steelblue;\n  border-color: #130269;\n}\n\n\n\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited,\n.btn-primary:focus {\n  color: #ffffff;\n  background-color: royalblue !important;\n  border-color: #130269;\n}\n\n\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::placeholder{\n  opacity: 0.5;\n}\n\n\n\n.header {\n  margin-top: 100px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n\n\n.html-header {\n  margin: 15px 0 5px;\n}\n\n\n\n.html {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.5rem;\n  background-color: #f1f1f1;\n  min-height: 20px;\n  max-height: 10rem;\n  overflow: auto;\n}\n\n\n\n#divEditor{\n  background-color: white;\n}\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"Insert Image\"]{\ndisplay: none\n}\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"Unlink\"]{\ndisplay: none\n}\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"Insert Link\"]{\ndisplay: none\n}\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"HTML Code\"]{\ndisplay: none\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9hZGQtcGF0aWVudC9hZGQtcGF0aWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjs7OztBQUlEO0VBQ0UsYUFBYTtDQUNkOzs7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7Ozs7QUFJRDtFQUNFLGVBQWU7RUFDZiw0QkFBNEI7RUFDNUIsc0JBQXNCO0NBQ3ZCOzs7O0FBR0Q7Ozs7RUFJRSxlQUFlO0VBQ2YsdUNBQXVDO0VBQ3ZDLHNCQUFzQjtDQUN2Qjs7OztBQUVEO0VBQ0UsYUFBYTtDQUNkOzs7O0FBRkQ7RUFDRSxhQUFhO0NBQ2Q7Ozs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7OztBQUdEO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7Q0FDckI7Ozs7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjs7OztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjs7OztBQUdEO0VBQ0Usd0JBQXdCO0NBQ3pCOzs7O0FBRUQ7QUFDQSxhQUFhO0NBQ1o7Ozs7QUFFRDtBQUNBLGFBQWE7Q0FDWjs7OztBQUVEO0FBQ0EsYUFBYTtDQUNaOzs7O0FBRUQ7QUFDQSxhQUFhO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhdGllbnRzL2FkZC1wYXRpZW50L2FkZC1wYXRpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuXG5cbi5yYWRpby1pbmxpbmV7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmNhcmQtYm9keXtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuXG5cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgYm9yZGVyLWNvbG9yOiAjMTMwMjY5O1xufVxuXG5cbi5idG4tcHJpbWFyeTpob3Zlcixcbi5idG4tcHJpbWFyeTphY3RpdmUsXG4uYnRuLXByaW1hcnk6dmlzaXRlZCxcbi5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMTMwMjY5O1xufVxuXG46OnBsYWNlaG9sZGVye1xuICBvcGFjaXR5OiAwLjU7XG59XG5cblxuLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4uaHRtbC1oZWFkZXIge1xuICBtYXJnaW46IDE1cHggMCA1cHg7XG59XG5cbi5odG1sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDEwcmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4jZGl2RWRpdG9ye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3QgL2RlZXAvIGFuZ3VsYXItZWRpdG9yI215RWRpdG9yIC5hbmd1bGFyLWVkaXRvci1idXR0b25bdGl0bGU9XCJJbnNlcnQgSW1hZ2VcIl17XG5kaXNwbGF5OiBub25lXG59XG5cbjpob3N0IC9kZWVwLyBhbmd1bGFyLWVkaXRvciNteUVkaXRvciAuYW5ndWxhci1lZGl0b3ItYnV0dG9uW3RpdGxlPVwiVW5saW5rXCJde1xuZGlzcGxheTogbm9uZVxufVxuXG46aG9zdCAvZGVlcC8gYW5ndWxhci1lZGl0b3IjbXlFZGl0b3IgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvblt0aXRsZT1cIkluc2VydCBMaW5rXCJde1xuZGlzcGxheTogbm9uZVxufVxuXG46aG9zdCAvZGVlcC8gYW5ndWxhci1lZGl0b3IjbXlFZGl0b3IgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvblt0aXRsZT1cIkhUTUwgQ29kZVwiXXtcbmRpc3BsYXk6IG5vbmVcbn1cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/patients/add-patient/add-patient.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/patients/add-patient/add-patient.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6\">\n      <a [routerLink]=\"\" (click)=onBackClicked() class=\"btn btn-link\">\n        <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n      </a>\n    </div>\n  </div>\n\n  <div class=\"card\" @fade>\n    <div class=\"card-header\">\n      Adicionar Paciente\n    </div>\n    <div class=\"card-body\">\n        <br>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Dados pessoais</h6>\n\n      <form #patientForm=\"ngForm\" (ngSubmit)=\"onSubmit(patientForm)\">\n\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n\n            <div class=\"form-group\">\n              <label for=\"firstName\">Nome *</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              #firstNameRef\n              name=\"firstName\"\n              #firstNameModel=\"ngModel\"\n              [ngClass]=\"{'is-invalid':firstNameModel.errors && firstNameModel.touched}\"\n              [ngModel]=\"patient.firstName\"\n              (ngModelChange)=\"patient.firstName = $event\"\n              minlength=\"3\"\n              autofocus\n              required>\n\n              <div [hidden]=\"!firstNameModel.errors?.required\" class=\"invalid-feedback\">\n                Nome requerido\n              </div>\n\n              <div [hidden]=\"!firstNameModel.errors?.minlength\" class=\"invalid-feedback\">\n                Deve ter pelo menos 3 caracteres\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"lastName\">Sobrenome *</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"lastName\"\n              #lastNameModel=\"ngModel\"\n              [ngClass]=\"{'is-invalid':lastNameModel.errors && lastNameModel.touched}\"\n              [ngModel]=\"patient.lastName\"\n              (ngModelChange)=\"patient.lastName = $event\"\n              minlength=\"2\"\n              required>\n\n              <div [hidden]=\"!lastNameModel.errors?.required\" class=\"invalid-feedback\">\n                Sobrenome requerido\n              </div>\n\n              <div [hidden]=\"!lastNameModel.errors?.minlength\" class=\"invalid-feedback\">\n                Deve ter pelo menos 3 caracteres\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n        <div class=\"row\">\n\n\n              <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"mobilePhone\">Telefone celular</label>\n                    <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"mobilePhone\"\n                    #mobilePhoneModel=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':mobilePhoneModel.errors && mobilePhoneModel.touched}\"\n                    [(ngModel)]=\"patient.mobilePhone\"\n                    (keypress)=\"maskPhones.onKeyPressMobilePhone($event)\"\n                    minlength=\"15\"\n                    maxlength=\"15\"\n                    placeholder=\"Ex.: (00) 00000-0000\"\n                    >\n\n                    <div [hidden]=\"!mobilePhoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                        Formato incorreto\n                      </div>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                      <label for=\"phone\">Telefone Residencial</label>\n                      <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"phone\"\n                      #phoneModel=\"ngModel\"\n                      [ngClass]=\"{'is-invalid':phoneModel.errors && phoneModel.touched}\"\n                      [(ngModel)]=\"patient.phone\"\n                      (keypress)=\"maskPhones.onKeyPressPhone($event)\"\n                      minlength=\"14\"\n                      maxlength=\"14\"\n                      placeholder=\"Ex.: (00) 0000-0000\"\n                      >\n\n                      <div [hidden]=\"!phoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                          Formato incorreto\n                        </div>\n\n                    </div>\n                  </div>\n        </div>\n\n        <div class=\"row\">\n\n  <div class=\"col-md-2\">\n    <br><br>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Endereço</h6>\n\n  </div>\n  </div>\n\n        <div class=\"row\">\n\n         <div class=\"col-md-2\">\n            <div class=\"form-group\">\n\n                <label for=\"cep\">CEP</label>\n                <div class=\"input-group\">\n                <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"cep\"\n                #cepModel=\"ngModel\"\n                [ngClass]=\"{'is-invalid':cepModel.errors && cepModel.touched}\"\n                [(ngModel)]=\"patient.cep\"\n                >\n                <span class=\"input-group-btn\">\n\n                    <button id=\"cepButton\" type=\"button\" class=\"btn btn-info\" (click)=\"searchCep()\">\n                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                     </button>\n                 </span>\n                </div>\n              </div>\n\n            </div>\n\n              <div class=\"col-md-2\">\n                   <div class=\"form-group\">\n                       <label for=\"state\">Estado</label>\n                       <input\n                       type=\"text\"\n                       class=\"form-control\"\n                       name=\"state\"\n                       #stateModel=\"ngModel\"\n                       [ngClass]=\"{'is-invalid':stateModel.errors && stateModel.touched}\"\n                       [(ngModel)]=\"patient.state\"\n                       maxlength=\"2\"\n\n                       >\n\n                     </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"city\">Cidade</label>\n                          <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          name=\"city\"\n                          #cityModel=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':cityModel.errors && cityModel.touched}\"\n                          [(ngModel)]=\"patient.city\"\n\n                          >\n\n                        </div>\n                     </div>\n\n                     <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"neighborhood\">Bairro</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"neighborhood\"\n                            #neighborhoodModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':neighborhoodModel.errors && neighborhoodModel.touched}\"\n                            [(ngModel)]=\"patient.neighborhood\"\n                            >\n\n                          </div>\n                       </div>\n\n                       <div class=\"col-md-4\">\n                          <div class=\"form-group\">\n                              <label for=\"address\">Logradouro (Rua, Avenida, etc)</label>\n                              <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              name=\"address\"\n                              #addressModel=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':addressModel.errors && addressModel.touched}\"\n                              [(ngModel)]=\"patient.address\"\n                              >\n\n                            </div>\n                         </div>\n\n                         <div class=\"col-md-2\">\n                          <div class=\"form-group\">\n                              <label for=\"numeral\">Número</label>\n                              <input\n                              type=\"number\"\n                              class=\"form-control\"\n                              name=\"numeral\"\n                              #numeralModel=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':numeralModel.errors && numeralModel.touched}\"\n                              [(ngModel)]=\"patient.numeral\"\n                              >\n\n                            </div>\n                         </div>\n                         <div class=\"col-md-3\">\n                          <div class=\"form-group\">\n                              <label for=\"numeral\">Complemento</label>\n                              <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              name=\"complement\"\n                              #complementModel=\"ngModel\"\n                              [ngClass]=\"{'is-invalid':\n                              complementModel.errors &&\n                              complementModel.touched}\"\n                              [(ngModel)]=\"patient.complement\"\n                              >\n\n                            </div>\n                         </div>\n\n        </div>\n\n\n          <div class=\"row\">\n\n              <div class=\"col-md-3\">\n                <br><br>\n                <h6 class=\"card-subtitle mb-2 text-muted\">Informações Adicionais</h6>\n\n              </div>\n              </div>\n\n              <div class=\"row\">\n              <div class=\"form-group\" class=\"col-md-3\" id=\"sel\">\n\n                  <label for=\"congregation\">Congregação *</label>\n                  <select #patientCongregationModel=\"ngModel\" type=\"text\" [(ngModel)]=\"congregation\" class=\"form-control\" name='congregation' [ngClass]=\"{'is-invalid':patientCongregationModel.errors &&\n                    patientCongregationModel.touched}\"\n                    required>\n                    <option> </option>\n                    <option *ngFor=\"let cong of congregations\" [ngValue]=\"cong\">{{ cong?.name }}</option>\n                  </select>\n\n                  <div [hidden]=\"!patientCongregationModel.errors?.required\" class=\"invalid-feedback\">\n                    Congregação requerida\n                  </div>\n\n                </div>\n\n\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"email\">Email </label>\n            <input\n            type=\"email\"\n            class=\"form-control\"\n            name=\"email\"\n            #emailModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':emailModel.errors && emailModel.touched}\"\n            [(ngModel)]=\"patient.email\"\n            pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n            placeholder=\"Ex.: paciente@dominio.com\"\n            >\n\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-md-3\">\n          <br><br>\n          <h6 class=\"card-subtitle mb-2 text-muted\">Contato dos Anciãos locais</h6>\n\n        </div>\n        </div>\n\n      <div class=\"row\">\n\n\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"mobileElder1\">Celular Ancião 1</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"mobileElder1\"\n              #mobileElder1Model=\"ngModel\"\n              [ngClass]=\"{'is-invalid':mobileElder1Model.errors && mobileElder1Model.touched}\"\n              [(ngModel)]=\"patient.mobileElder1\"\n              (keypress)=\"maskPhones.onKeyPressMobilePhone($event,'mobileElder1')\"\n              minlength=\"15\"\n              maxlength=\"15\"\n              placeholder=\"(00) 00000-0000\"\n              >\n\n              <div [hidden]=\"!mobileElder1Model.errors?.minlength\" class=\"invalid-feedback\">\n                  Formato incorreto\n                </div>\n\n            </div>\n          </div>\n\n          <div class=\"col-md-2\">\n              <div class=\"form-group\">\n                <label for=\"phoneElder1\">Telefone Ancião 1</label>\n                <input\n                type=\"text\"\n                class=\"form-control\"\n                name=\"phoneElder1\"\n                #phoneElder1Model=\"ngModel\"\n                [ngClass]=\"{'is-invalid':phoneElder1Model.errors && phoneElder1Model.touched}\"\n                [(ngModel)]=\"patient.phoneElder1\"\n                (keypress)=\"maskPhones.onKeyPressPhone($event, 'phoneElder1')\"\n                minlength=\"14\"\n                maxlength=\"14\"\n                placeholder=\"(00) 0000-0000\"\n                >\n\n                <div [hidden]=\"!phoneElder1Model.errors?.minlength\" class=\"invalid-feedback\">\n                    Formato incorreto\n                  </div>\n\n              </div>\n            </div>\n\n\n\n\n\n    <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label for=\"mobileElder2\">Celular Ancião 2</label>\n          <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"mobileElder2\"\n          #mobileElder2Model=\"ngModel\"\n          [ngClass]=\"{'is-invalid':mobileElder2Model.errors && mobileElder2Model.touched}\"\n          [(ngModel)]=\"patient.mobileElder2\"\n          (keypress)=\"maskPhones.onKeyPressMobilePhone($event, 'mobileElder2')\"\n          minlength=\"15\"\n          maxlength=\"15\"\n          placeholder=\"(00) 00000-0000\"\n          >\n\n          <div [hidden]=\"!mobileElder2Model.errors?.minlength\" class=\"invalid-feedback\">\n              Formato incorreto\n            </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"phoneElder2\">Telefone Ancião 2</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"phoneElder2\"\n            #phoneElder2Model=\"ngModel\"\n            [ngClass]=\"{'is-invalid':phoneElder2Model.errors && phoneElder2Model.touched}\"\n            [(ngModel)]=\"patient.phoneElder2\"\n            (keypress)=\"maskPhones.onKeyPressPhone($event, 'phoneElder2')\"\n            minlength=\"14\"\n            maxlength=\"14\"\n            placeholder=\"(00) 0000-0000\"\n            >\n\n            <div [hidden]=\"!phoneElder2Model.errors?.minlength\" class=\"invalid-feedback\">\n                Formato incorreto\n              </div>\n\n          </div>\n        </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <br><br>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Dados de internação</h6>\n\n  </div>\n  </div>\n\n<div class=\"row\">\n  <div class=\"form-group\" class=\"col-md-3\" >\n\n      <label for=\"hospital\">Hospital internado *</label>\n      <select #patientHospitalModel=\"ngModel\" type=\"text\" [(ngModel)]=\"hospital\" class=\"form-control\" name=\"hospital\" [ngClass]=\"{'is-invalid':patientHospitalModel.errors &&\n        patientHospitalModel.touched}\"\n        required>\n        <option> </option>\n        <option *ngFor=\"let hosp of hospitals\" [ngValue]=\"hosp\">{{ hosp?.name }}</option>\n      </select>\n\n      <div [hidden]=\"!patientHospitalModel.errors?.required\" class=\"invalid-feedback\">\n        Hospital requerido\n      </div>\n\n    </div>\n\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label for=\"hospitalizationDate\">Data de internação</label>\n        <input\n        type=\"date\"\n        class=\"form-control\"\n        name=\"hospitalizationDate\"\n        #hospitalizationDateModel=\"ngModel\"\n        [ngClass]=\"{'is-invalid':hospitalizationDateModel.errors && hospitalizationDateModel.touched}\"\n        [(ngModel)]=\"patient.hospitalizationDate\"\n        required\n        >\n\n        <div [hidden]=\"!hospitalizationDateModel.errors?.required\" class=\"invalid-feedback\">\n            Formato incorreto\n          </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <div class=\"form-group\">\n        <label for=\"medicalRelease\">Data de alta médica</label>\n        <input\n        type=\"date\"\n        class=\"form-control\"\n        name=\"medicalRelease\"\n        #medicalReleaseModel=\"ngModel\"\n        [ngClass]=\"{'is-invalid':medicalReleaseModel.errors && medicalReleaseModel.touched}\"\n        [(ngModel)]=\"patient.medicalRelease\"\n        required\n        >\n\n        <div [hidden]=\"!medicalReleaseModel.errors?.required\" class=\"invalid-feedback\">\n            Formato incorreto\n          </div>\n\n      </div>\n    </div>\n\n\n    <div class=\"form-group\" class=\"col-md-3\" >\n\n      <label for=\"accommodation\">Hospedagem *</label>\n      <select #patientAccommodationModel=\"ngModel\" type=\"text\" [(ngModel)]=\"accommodation\" class=\"form-control\" name='accommodation' [ngClass]=\"{'is-invalid':patientAccommodationModel.errors &&\n        patientAccommodationModel.touched}\"\n        required>\n        <option> </option>\n        <option *ngFor=\"let accom of accommodations\" [ngValue]=\"accom\">{{ accom?.name }}</option>\n      </select>\n\n      <div [hidden]=\"!patientAccommodationModel.errors?.required\" class=\"invalid-feedback\">\n        Hospedagem requerida\n      </div>\n\n    </div>\n\n  </div>\n\n<div class=\"row\">\n<br>\n  <div class=\"col-md-6\">\n      <div class=\"form-group\">\n\n       <label>Quem informou?</label><br>\n      <label class=\"radio-inline\">\n          <input type=\"radio\"  name=\"infoWho\" value=\"Gvp\" id=\"Gvp\" [(ngModel)]=\"patient.infoWho\" > Gvp\n        </label>&nbsp;&nbsp;\n        <label class=\"radio-inline\">\n          <input type=\"radio\"  name=\"infoWho\" value=\"Colih\" id=\"Colih\" [(ngModel)]=\"patient.infoWho\"> Colih\n        </label>&nbsp;&nbsp;\n        <label class=\"radio-inline\">\n            <input type=\"radio\" name=\"infoWho\" value=\"Outros\" id=\"Outros\" [(ngModel)]=\"patient.infoWho\"> Outros\n          </label>\n        </div>\n</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <br><br>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Descrição do caso</h6>\n\n  </div>\n  </div>\n\n  <div class=\"container\" id=\"divEditor\">\n  <br>\n  <angular-editor\n  id=\"myEditor\" name=\"caseDescription\"  [(ngModel)]=\"patient.caseDescription\"   [config]=\"config\"></angular-editor>\n  <br>\n  </div>\n\n\n\n<br><br>\n\n        <input type=\"submit\" value=\"Criar\" class=\"btn btn-primary btn-block\">\n\n      </form>\n\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/patients/add-patient/add-patient.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/patients/add-patient/add-patient.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPatientComponent", function() { return AddPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _patients_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patients.service */ "./src/app/components/patients/patients.service.ts");
/* harmony import */ var _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../congregations/congregations.service */ "./src/app/components/congregations/congregations.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../info-modal/info-modal.component */ "./src/app/components/info-modal/info-modal.component.ts");
/* harmony import */ var _mask_phone_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mask/phone-mask */ "./src/app/mask/phone-mask.ts");
/* harmony import */ var _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hospitals/hospitals.service */ "./src/app/components/hospitals/hospitals.service.ts");
/* harmony import */ var _accommodations_accommodations_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../accommodations/accommodations.service */ "./src/app/components/accommodations/accommodations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddPatientComponent = /** @class */ (function () {
    function AddPatientComponent(flashMessage, patientsService, congregationsService, viacep, dialog, hospitalsService, accommodationsService, location) {
        this.flashMessage = flashMessage;
        this.patientsService = patientsService;
        this.congregationsService = congregationsService;
        this.viacep = viacep;
        this.dialog = dialog;
        this.hospitalsService = hospitalsService;
        this.accommodationsService = accommodationsService;
        this.location = location;
        this.congregations = [];
        this.congregation = { id: "", name: "" };
        this.accommodations = [];
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
        this.patients = [];
        this.patient = {
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
            mobileElder1: "",
            mobileElder2: "",
            phoneElder1: "",
            phoneElder2: "",
            caseDescription: "",
            hospital: "",
            hospitalizationDate: null,
            medicalRelease: null,
            accommodation: "",
            infoWho: "Gvp",
        };
        this.maskPhones = new _mask_phone_mask__WEBPACK_IMPORTED_MODULE_9__["MaskPhones"](this.patient);
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Digite aqui',
            translate: 'no',
            uploadUrl: 'http://localhost:3000/images',
            customClasses: [
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
    }
    AddPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patients = this.patientsService.Patients;
        if (this.patients.length <= 0)
            this.patientsService.getPatientsServer();
        this.patientsSub = this.patientsService
            .getPatientsUpdateListener()
            .subscribe(function () {
            _this.resetForm();
        });
        //get Congregation
        this.congregations = this.congregationsService.Congregations;
        if (this.congregations.length <= 0)
            this.congregationsService.getCongregationsServer();
        this.congregationsSub = this.congregationsService
            .getCongregationsUpdateListener()
            .subscribe(function (congregationsData) {
            _this.congregations = congregationsData;
        });
        //get Hospital
        this.hospitals = this.hospitalsService.Hospitals;
        if (this.hospitals.length <= 0)
            this.hospitalsService.getHospitalsServer();
        this.hospitalsSub = this.hospitalsService
            .getHospitalsUpdateListener()
            .subscribe(function (hospitalsData) {
            _this.hospitals = hospitalsData;
        });
        //get Accommodation
        this.accommodations = this.accommodationsService.Accommodations;
        if (this.accommodations.length <= 0)
            this.accommodationsService.getAccommodationsServer();
        this.accommodationsSub = this.accommodationsService
            .getAccommodationsUpdateListener()
            .subscribe(function (accommodationsData) {
            _this.accommodations = accommodationsData;
        });
    };
    AddPatientComponent.prototype.onSubmit = function (_a) {
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
            value.accommodation = this.accommodation.id;
            value.hospital = this.hospital.id;
            this.patientsService.createPatient(value);
        }
    };
    AddPatientComponent.prototype.searchCep = function () {
        var _this = this;
        if (!this.patient.cep)
            return;
        this.viacep.buscarPorCep(this.patient.cep).then(function (endereco) {
            _this.patient.cep = endereco.cep;
            _this.patient.state = endereco.uf;
            _this.patient.city = endereco.localidade;
            _this.patient.neighborhood = endereco.bairro;
            _this.patient.address = endereco.logradouro;
        }).catch(function (error) {
            //outro teste
            _this.dialog.open(_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_8__["InfoModalComponent"], {
                data: { title: "Erro", message: error.message }
            });
        });
    };
    AddPatientComponent.prototype.resetForm = function () {
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
            mobileElder1: "",
            mobileElder2: "",
            phoneElder1: "",
            phoneElder2: "",
            caseDescription: "",
            hospital: "",
            hospitalizationDate: null,
            medicalRelease: null,
            accommodation: "",
            infoWho: "Gvp",
        });
    };
    AddPatientComponent.prototype.ngOnDestroy = function () {
        this.congregationsSub.unsubscribe();
        this.patientsSub.unsubscribe();
        this.hospitalsSub.unsubscribe();
        this.accommodationsSub.unsubscribe();
    };
    AddPatientComponent.prototype.onBackClicked = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("patientForm"),
        __metadata("design:type", Object)
    ], AddPatientComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("firstNameRef"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddPatientComponent.prototype, "firstNameRef", void 0);
    AddPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-add-patient",
            template: __webpack_require__(/*! ./add-patient.component.html */ "./src/app/components/patients/add-patient/add-patient.component.html"),
            styles: [__webpack_require__(/*! ./add-patient.component.css */ "./src/app/components/patients/add-patient/add-patient.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _patients_service__WEBPACK_IMPORTED_MODULE_5__["PatientsService"],
            _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_6__["CongregationsService"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__["NgxViacepService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
            _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_10__["HospitalsService"],
            _accommodations_accommodations_service__WEBPACK_IMPORTED_MODULE_11__["AccommodationsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AddPatientComponent);
    return AddPatientComponent;
}());



/***/ }),

/***/ "./src/app/components/patients/edit-patient/edit-patient.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/patients/edit-patient/edit-patient.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  color: steelblue;\n  font-size: 15px;\n}\n\n\n\n.radio-inline{\n  color: black;\n}\n\n\n\n.card-body{\n  background-color: gainsboro;\n}\n\n\n\n.btn-primary {\n  color: #ffffff;\n  background-color: steelblue;\n  border-color: #130269;\n}\n\n\n\n.btn-primary:hover,\n.btn-primary:active,\n.btn-primary:visited,\n.btn-primary:focus {\n  color: #ffffff;\n  background-color: royalblue !important;\n  border-color: #130269;\n}\n\n\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n\n\n::placeholder{\n  opacity: 0.5;\n}\n\n\n\n.header {\n  margin-top: 100px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n\n\n.html-header {\n  margin: 15px 0 5px;\n}\n\n\n\n.html {\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.5rem;\n  background-color: #f1f1f1;\n  min-height: 20px;\n  max-height: 10rem;\n  overflow: auto;\n}\n\n\n\n#divEditor{\n  background-color: white;\n}\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"Insert Image\"]{\n  display: none\n  }\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"Unlink\"]{\n  display: none\n  }\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"Insert Link\"]{\n  display: none\n  }\n\n\n\n:host /deep/ angular-editor#myEditor .angular-editor-button[title=\"HTML Code\"]{\n  display: none\n  }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9lZGl0LXBhdGllbnQvZWRpdC1wYXRpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCOzs7O0FBSUQ7RUFDRSxhQUFhO0NBQ2Q7Ozs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7OztBQUdEO0VBQ0UsZUFBZTtFQUNmLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7Ozs7QUFHRDs7OztFQUlFLGVBQWU7RUFDZix1Q0FBdUM7RUFDdkMsc0JBQXNCO0NBQ3ZCOzs7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7Ozs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7OztBQUZEO0VBQ0UsYUFBYTtDQUNkOzs7O0FBR0Q7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtDQUNyQjs7OztBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCOzs7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0NBQ2hCOzs7O0FBR0Q7RUFDRSx3QkFBd0I7Q0FDekI7Ozs7QUFFRDtFQUNFLGFBQWE7R0FDWjs7OztBQUVEO0VBQ0EsYUFBYTtHQUNaOzs7O0FBRUQ7RUFDQSxhQUFhO0dBQ1o7Ozs7QUFFRDtFQUNBLGFBQWE7R0FDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvZWRpdC1wYXRpZW50L2VkaXQtcGF0aWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xuICBjb2xvcjogc3RlZWxibHVlO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cblxuXG4ucmFkaW8taW5saW5le1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jYXJkLWJvZHl7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbn1cblxuXG4uYnRuLXByaW1hcnkge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICBib3JkZXItY29sb3I6ICMxMzAyNjk7XG59XG5cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLFxuLmJ0bi1wcmltYXJ5OmFjdGl2ZSxcbi5idG4tcHJpbWFyeTp2aXNpdGVkLFxuLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMxMzAyNjk7XG59XG5cbjo6cGxhY2Vob2xkZXJ7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5odG1sLWhlYWRlciB7XG4gIG1hcmdpbjogMTVweCAwIDVweDtcbn1cblxuLmh0bWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWF4LWhlaWdodDogMTByZW07XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5cbiNkaXZFZGl0b3J7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdCAvZGVlcC8gYW5ndWxhci1lZGl0b3IjbXlFZGl0b3IgLmFuZ3VsYXItZWRpdG9yLWJ1dHRvblt0aXRsZT1cIkluc2VydCBJbWFnZVwiXXtcbiAgZGlzcGxheTogbm9uZVxuICB9XG5cbiAgOmhvc3QgL2RlZXAvIGFuZ3VsYXItZWRpdG9yI215RWRpdG9yIC5hbmd1bGFyLWVkaXRvci1idXR0b25bdGl0bGU9XCJVbmxpbmtcIl17XG4gIGRpc3BsYXk6IG5vbmVcbiAgfVxuXG4gIDpob3N0IC9kZWVwLyBhbmd1bGFyLWVkaXRvciNteUVkaXRvciAuYW5ndWxhci1lZGl0b3ItYnV0dG9uW3RpdGxlPVwiSW5zZXJ0IExpbmtcIl17XG4gIGRpc3BsYXk6IG5vbmVcbiAgfVxuXG4gIDpob3N0IC9kZWVwLyBhbmd1bGFyLWVkaXRvciNteUVkaXRvciAuYW5ndWxhci1lZGl0b3ItYnV0dG9uW3RpdGxlPVwiSFRNTCBDb2RlXCJde1xuICBkaXNwbGF5OiBub25lXG4gIH1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/patients/edit-patient/edit-patient.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/patients/edit-patient/edit-patient.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a [routerLink]=\"\" (click)=onBackClicked() class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n    </a>\n  </div>\n</div>\n\n<div class=\"card\" @fade>\n  <div class=\"card-header\">\n    Atualizar Paciente\n  </div>\n  <div class=\"card-body\">\n      <br>\n      <h6 class=\"card-subtitle mb-2 text-muted\">Dados pessoais</h6>\n\n    <form #patientForm=\"ngForm\" (ngSubmit)=\"onSubmit(patientForm)\">\n\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n\n          <div class=\"form-group\">\n            <label for=\"firstName\">Nome *</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            #firstNameRef\n            name=\"firstName\"\n            #firstNameModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':firstNameModel.errors && firstNameModel.touched}\"\n            [ngModel]=\"patient?.firstName\"\n            (ngModelChange)=\"patient.firstName = $event\"\n            minlength=\"3\"\n            autofocus\n            required>\n\n            <div [hidden]=\"!firstNameModel.errors?.required\" class=\"invalid-feedback\">\n              Nome requerido\n            </div>\n\n            <div [hidden]=\"!firstNameModel.errors?.minlength\" class=\"invalid-feedback\">\n              Deve ter pelo menos 3 caracteres\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastName\">Sobrenome *</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"lastName\"\n            #lastNameModel=\"ngModel\"\n            [ngClass]=\"{'is-invalid':lastNameModel.errors && lastNameModel.touched}\"\n            [ngModel]=\"patient.lastName\"\n            (ngModelChange)=\"patient.lastName = $event\"\n            minlength=\"2\"\n            required>\n\n            <div [hidden]=\"!lastNameModel.errors?.required\" class=\"invalid-feedback\">\n              Sobrenome requerido\n            </div>\n\n            <div [hidden]=\"!lastNameModel.errors?.minlength\" class=\"invalid-feedback\">\n              Deve ter pelo menos 3 caracteres\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"row\">\n\n\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"mobilePhone\">Telefone celular</label>\n                  <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  name=\"mobilePhone\"\n                  #mobilePhoneModel=\"ngModel\"\n                  [ngClass]=\"{'is-invalid':mobilePhoneModel.errors && mobilePhoneModel.touched}\"\n                  [(ngModel)]=\"patient.mobilePhone\"\n                  (keypress)=\"maskPhones.onKeyPressMobilePhone($event)\"\n                  minlength=\"15\"\n                  maxlength=\"15\"\n                  placeholder=\"Ex.: (00) 00000-0000\"\n                  >\n\n                  <div [hidden]=\"!mobilePhoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                      Formato incorreto\n                    </div>\n\n                </div>\n              </div>\n\n              <div class=\"col-md-4\">\n                  <div class=\"form-group\">\n                    <label for=\"phone\">Telefone Residencial</label>\n                    <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"phone\"\n                    #phoneModel=\"ngModel\"\n                    [ngClass]=\"{'is-invalid':phoneModel.errors && phoneModel.touched}\"\n                    [(ngModel)]=\"patient.phone\"\n                    (keypress)=\"maskPhones.onKeyPressPhone($event)\"\n                    minlength=\"14\"\n                    maxlength=\"14\"\n                    placeholder=\"Ex.: (00) 0000-0000\"\n                    >\n\n                    <div [hidden]=\"!phoneModel.errors?.minlength\" class=\"invalid-feedback\">\n                        Formato incorreto\n                      </div>\n\n                  </div>\n                </div>\n      </div>\n\n      <div class=\"row\">\n\n<div class=\"col-md-2\">\n  <br><br>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Endereço</h6>\n\n</div>\n</div>\n\n      <div class=\"row\">\n\n       <div class=\"col-md-2\">\n          <div class=\"form-group\">\n\n              <label for=\"cep\">CEP</label>\n              <div class=\"input-group\">\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"cep\"\n              #cepModel=\"ngModel\"\n              [ngClass]=\"{'is-invalid':cepModel.errors && cepModel.touched}\"\n              [(ngModel)]=\"patient.cep\"\n              >\n              <span class=\"input-group-btn\">\n\n                  <button id=\"cepButton\" type=\"button\" class=\"btn btn-info\" (click)=\"searchCep()\">\n                      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                   </button>\n               </span>\n              </div>\n            </div>\n\n          </div>\n\n            <div class=\"col-md-2\">\n                 <div class=\"form-group\">\n                     <label for=\"state\">Estado</label>\n                     <input\n                     type=\"text\"\n                     class=\"form-control\"\n                     name=\"state\"\n                     #stateModel=\"ngModel\"\n                     [ngClass]=\"{'is-invalid':stateModel.errors && stateModel.touched}\"\n                     [(ngModel)]=\"patient.state\"\n                     maxlength=\"2\"\n\n                     >\n\n                   </div>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div class=\"form-group\">\n                        <label for=\"city\">Cidade</label>\n                        <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        name=\"city\"\n                        #cityModel=\"ngModel\"\n                        [ngClass]=\"{'is-invalid':cityModel.errors && cityModel.touched}\"\n                        [(ngModel)]=\"patient.city\"\n\n                        >\n\n                      </div>\n                   </div>\n\n                   <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                          <label for=\"neighborhood\">Bairro</label>\n                          <input\n                          type=\"text\"\n                          class=\"form-control\"\n                          name=\"neighborhood\"\n                          #neighborhoodModel=\"ngModel\"\n                          [ngClass]=\"{'is-invalid':neighborhoodModel.errors && neighborhoodModel.touched}\"\n                          [(ngModel)]=\"patient.neighborhood\"\n                          >\n\n                        </div>\n                     </div>\n\n                     <div class=\"col-md-4\">\n                        <div class=\"form-group\">\n                            <label for=\"address\">Logradouro (Rua, Avenida, etc)</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"address\"\n                            #addressModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':addressModel.errors && addressModel.touched}\"\n                            [(ngModel)]=\"patient.address\"\n                            >\n\n                          </div>\n                       </div>\n\n                       <div class=\"col-md-2\">\n                        <div class=\"form-group\">\n                            <label for=\"numeral\">Número</label>\n                            <input\n                            type=\"number\"\n                            class=\"form-control\"\n                            name=\"numeral\"\n                            #numeralModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':numeralModel.errors && numeralModel.touched}\"\n                            [(ngModel)]=\"patient.numeral\"\n                            >\n\n                          </div>\n                       </div>\n                       <div class=\"col-md-3\">\n                        <div class=\"form-group\">\n                            <label for=\"numeral\">Complemento</label>\n                            <input\n                            type=\"text\"\n                            class=\"form-control\"\n                            name=\"complement\"\n                            #complementModel=\"ngModel\"\n                            [ngClass]=\"{'is-invalid':\n                            complementModel.errors &&\n                            complementModel.touched}\"\n                            [(ngModel)]=\"patient.complement\"\n                            >\n\n                          </div>\n                       </div>\n\n      </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"col-md-3\">\n              <br><br>\n              <h6 class=\"card-subtitle mb-2 text-muted\">Informações Adicionais</h6>\n\n            </div>\n            </div>\n\n            <div class=\"row\">\n            <div class=\"form-group\" class=\"col-md-3\" id=\"sel\">\n\n                <label for=\"congregation\">Congregação *</label>\n                <select #patientCongregationModel=\"ngModel\" type=\"text\" [(ngModel)]=\"congregation\" class=\"form-control\" name='congregation' [ngClass]=\"{'is-invalid':patientCongregationModel.errors &&\n                  patientCongregationModel.touched}\"\n                  required>\n                  <option> </option>\n                  <option *ngFor=\"let cong of congregations\" [ngValue]=\"cong\">{{ cong?.name }}</option>\n                </select>\n\n                <div [hidden]=\"!patientCongregationModel.errors?.required\" class=\"invalid-feedback\">\n                  Congregação requerida\n                </div>\n\n              </div>\n\n\n      <div class=\"col-md-4\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email </label>\n          <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          #emailModel=\"ngModel\"\n          [ngClass]=\"{'is-invalid':emailModel.errors && emailModel.touched}\"\n          [(ngModel)]=\"patient.email\"\n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\n          placeholder=\"Ex.: paciente@dominio.com\"\n          >\n\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"row\">\n\n      <div class=\"col-md-3\">\n        <br><br>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Contato dos Anciãos locais</h6>\n\n      </div>\n      </div>\n\n    <div class=\"row\">\n\n\n      <div class=\"col-md-2\">\n          <div class=\"form-group\">\n            <label for=\"mobileElder1\">Celular Ancião 1</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            name=\"mobileElder1\"\n            #mobileElder1Model=\"ngModel\"\n            [ngClass]=\"{'is-invalid':mobileElder1Model.errors && mobileElder1Model.touched}\"\n            [(ngModel)]=\"patient.mobileElder1\"\n            (keypress)=\"maskPhones.onKeyPressMobilePhone($event,'mobileElder1')\"\n            minlength=\"15\"\n            maxlength=\"15\"\n            placeholder=\"(00) 00000-0000\"\n            >\n\n            <div [hidden]=\"!mobileElder1Model.errors?.minlength\" class=\"invalid-feedback\">\n                Formato incorreto\n              </div>\n\n          </div>\n        </div>\n\n        <div class=\"col-md-2\">\n            <div class=\"form-group\">\n              <label for=\"phoneElder1\">Telefone Ancião 1</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"phoneElder1\"\n              #phoneElder1Model=\"ngModel\"\n              [ngClass]=\"{'is-invalid':phoneElder1Model.errors && phoneElder1Model.touched}\"\n              [(ngModel)]=\"patient.phoneElder1\"\n              (keypress)=\"maskPhones.onKeyPressPhone($event, 'phoneElder1')\"\n              minlength=\"14\"\n              maxlength=\"14\"\n              placeholder=\"(00) 0000-0000\"\n              >\n\n              <div [hidden]=\"!phoneElder1Model.errors?.minlength\" class=\"invalid-feedback\">\n                  Formato incorreto\n                </div>\n\n            </div>\n          </div>\n\n\n\n\n\n  <div class=\"col-md-2\">\n      <div class=\"form-group\">\n        <label for=\"mobileElder2\">Celular Ancião 2</label>\n        <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"mobileElder2\"\n        #mobileElder2Model=\"ngModel\"\n        [ngClass]=\"{'is-invalid':mobileElder2Model.errors && mobileElder2Model.touched}\"\n        [(ngModel)]=\"patient.mobileElder2\"\n        (keypress)=\"maskPhones.onKeyPressMobilePhone($event, 'mobileElder2')\"\n        minlength=\"15\"\n        maxlength=\"15\"\n        placeholder=\"(00) 00000-0000\"\n        >\n\n        <div [hidden]=\"!mobileElder2Model.errors?.minlength\" class=\"invalid-feedback\">\n            Formato incorreto\n          </div>\n\n      </div>\n    </div>\n\n    <div class=\"col-md-2\">\n        <div class=\"form-group\">\n          <label for=\"phoneElder2\">Telefone Ancião 2</label>\n          <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"phoneElder2\"\n          #phoneElder2Model=\"ngModel\"\n          [ngClass]=\"{'is-invalid':phoneElder2Model.errors && phoneElder2Model.touched}\"\n          [(ngModel)]=\"patient.phoneElder2\"\n          (keypress)=\"maskPhones.onKeyPressPhone($event, 'phoneElder2')\"\n          minlength=\"14\"\n          maxlength=\"14\"\n          placeholder=\"(00) 0000-0000\"\n          >\n\n          <div [hidden]=\"!phoneElder2Model.errors?.minlength\" class=\"invalid-feedback\">\n              Formato incorreto\n            </div>\n\n        </div>\n      </div>\n</div>\n\n<div class=\"row\">\n<div class=\"col-md-3\">\n  <br><br>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Dados de internação</h6>\n\n</div>\n</div>\n\n<div class=\"row\">\n<div class=\"form-group\" class=\"col-md-3\" >\n\n    <label for=\"hospital\">Hospital internado *</label>\n    <select #patientHospitalModel=\"ngModel\" type=\"text\" [(ngModel)]=\"hospital\" class=\"form-control\" name=\"hospital\" [ngClass]=\"{'is-invalid':patientHospitalModel.errors &&\n      patientHospitalModel.touched}\"\n      required>\n      <option> </option>\n      <option *ngFor=\"let hosp of hospitals\" [ngValue]=\"hosp\">{{ hosp?.name }}</option>\n    </select>\n\n    <div [hidden]=\"!patientHospitalModel.errors?.required\" class=\"invalid-feedback\">\n      Hospital requerido\n    </div>\n\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"hospitalizationDate\">Data de internação</label>\n      <input\n      type=\"date\"\n      class=\"form-control\"\n      name=\"hospitalizationDate\"\n      #hospitalizationDateModel=\"ngModel\"\n      [ngClass]=\"{'is-invalid':hospitalizationDateModel.errors && hospitalizationDateModel.touched}\"\n      [ngModel]=\"patient.hospitalizationDate | date:'yyyy-MM-dd'\"\n      (ngMoelChange)=\"patient.hospitalizationDate = $event\"\n      required\n      >\n\n      <div [hidden]=\"!hospitalizationDateModel.errors?.required\" class=\"invalid-feedback\">\n          Formato incorreto\n        </div>\n\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"medicalRelease\">Data de alta médica</label>\n      <input\n      type=\"date\"\n      class=\"form-control\"\n      name=\"medicalRelease\"\n      #medicalReleaseModel=\"ngModel\"\n      [ngClass]=\"{'is-invalid':medicalReleaseModel.errors && medicalReleaseModel.touched}\"\n      [ngModel]=\"patient.medicalRelease | date:'yyyy-MM-dd'\"\n      (ngMoelChange)=\"patient.medicalRelease = $event\"\n      required\n      >\n\n      <div [hidden]=\"!medicalReleaseModel.errors?.required\" class=\"invalid-feedback\">\n          Formato incorreto\n        </div>\n\n    </div>\n  </div>\n\n\n  <div class=\"form-group\" class=\"col-md-3\" >\n\n    <label for=\"accommodation\">Hospedagem *</label>\n    <select #patientAccommodationModel=\"ngModel\" type=\"text\" [(ngModel)]=\"accommodation\" class=\"form-control\" name='accommodation' [ngClass]=\"{'is-invalid':patientAccommodationModel.errors &&\n      patientAccommodationModel.touched}\"\n      required>\n      <option> </option>\n      <option *ngFor=\"let accom of accommodations\" [ngValue]=\"accom\">{{ accom?.name }}</option>\n    </select>\n\n    <div [hidden]=\"!patientAccommodationModel.errors?.required\" class=\"invalid-feedback\">\n      Hospedagem requerida\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n<br>\n<div class=\"col-md-6\">\n    <div class=\"form-group\">\n\n     <label>Quem informou?</label><br>\n    <label class=\"radio-inline\">\n        <input type=\"radio\"  name=\"infoWho\" value=\"Gvp\" id=\"Gvp\" [(ngModel)]=\"patient.infoWho\" > Gvp\n      </label>&nbsp;&nbsp;\n      <label class=\"radio-inline\">\n        <input type=\"radio\"  name=\"infoWho\" value=\"Colih\" id=\"Colih\" [(ngModel)]=\"patient.infoWho\"> Colih\n      </label>&nbsp;&nbsp;\n      <label class=\"radio-inline\">\n          <input type=\"radio\" name=\"infoWho\" value=\"Outros\" id=\"Outros\" [(ngModel)]=\"patient.infoWho\"> Outros\n        </label>\n      </div>\n</div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n  <br><br>\n  <h6 class=\"card-subtitle mb-2 text-muted\">Descrição do caso</h6>\n\n  </div>\n  </div>\n\n  <div class=\"container\" id=\"divEditor\">\n  <br>\n  <angular-editor\n  id=\"myEditor\" name=\"caseDescription\"  [(ngModel)]=\"patient.caseDescription\"   [config]=\"config\"></angular-editor>\n  <br>\n  </div>\n\n\n<br><br>\n\n      <input type=\"submit\" value=\"Salvar\" class=\"btn btn-primary btn-block\">\n\n    </form>\n\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/patients/edit-patient/edit-patient.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/patients/edit-patient/edit-patient.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPatientComponent", function() { return EditPatientComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _patients_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../patients.service */ "./src/app/components/patients/patients.service.ts");
/* harmony import */ var _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../congregations/congregations.service */ "./src/app/components/congregations/congregations.service.ts");
/* harmony import */ var _info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../info-modal/info-modal.component */ "./src/app/components/info-modal/info-modal.component.ts");
/* harmony import */ var src_app_mask_phone_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/mask/phone-mask */ "./src/app/mask/phone-mask.ts");
/* harmony import */ var _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hospitals/hospitals.service */ "./src/app/components/hospitals/hospitals.service.ts");
/* harmony import */ var _accommodations_accommodations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../accommodations/accommodations.service */ "./src/app/components/accommodations/accommodations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var EditPatientComponent = /** @class */ (function () {
    function EditPatientComponent(flashMessage, patientsService, congregationsService, viacep, route, dialog, hospitalsService, accommodationsService, location) {
        this.flashMessage = flashMessage;
        this.patientsService = patientsService;
        this.congregationsService = congregationsService;
        this.viacep = viacep;
        this.route = route;
        this.dialog = dialog;
        this.hospitalsService = hospitalsService;
        this.accommodationsService = accommodationsService;
        this.location = location;
        this.congregations = [];
        this.congregation = { id: "", name: "" };
        this.accommodations = [];
        this.hospitals = [];
        this.patient = {
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
            mobileElder1: "",
            mobileElder2: "",
            phoneElder1: "",
            phoneElder2: "",
            caseDescription: "",
            hospital: "",
            hospitalizationDate: null,
            medicalRelease: null,
            accommodation: "",
            infoWho: "",
        };
        this.config = {
            editable: true,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            placeholder: "Digite aqui",
            translate: "no",
            uploadUrl: "http://localhost:3000/images",
            customClasses: [
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1"
                }
            ]
        };
    }
    EditPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params["id"];
        // Get client
        var patient = this.patientsService.getPatient(this.id);
        if (patient)
            this.patient = patient;
        else {
            this.patientsService.getOnePatientServer(this.id);
        }
        this.patientSub = this.patientsService.getOnePatientUpdateListener().subscribe(function (patient) { return _this.patient = patient; });
        this.maskPhones = new src_app_mask_phone_mask__WEBPACK_IMPORTED_MODULE_10__["MaskPhones"](this.patient);
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
        //get Hospital
        this.hospitals = this.hospitalsService.Hospitals;
        if (this.hospitals.length <= 0)
            this.hospitalsService.getHospitalsServer();
        else {
            this.hospital = this.searchById(this.hospitals, this.patient.hospital);
        }
        this.hospitalsSub = this.hospitalsService
            .getHospitalsUpdateListener()
            .subscribe(function (hospitalsData) {
            _this.hospitals = hospitalsData;
            _this.hospital = _this.searchById(_this.hospitals, _this.patient.hospital);
        });
        //get Accommodation
        this.accommodations = this.accommodationsService.Accommodations;
        if (this.accommodations.length <= 0)
            this.accommodationsService.getAccommodationsServer();
        else {
            this.accommodation = this.searchById(this.accommodations, this.patient.accommodation);
        }
        this.accommodationsSub = this.accommodationsService
            .getAccommodationsUpdateListener()
            .subscribe(function (accommodationsData) {
            _this.accommodations = accommodationsData;
            _this.accommodation = _this.searchById(_this.accommodations, _this.patient.accommodation);
        });
    };
    EditPatientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            // Show Error
            this.flashMessage.show("Preencha o formulário corretamente", {
                cssClass: "alert-danger",
                timeout: 4000
            });
        }
        else {
            // Update Patient
            value.congregation = this.congregation.name;
            value.accommodation = this.accommodation.id;
            value.hospital = this.hospital.id;
            value.id = this.id;
            this.patientsService.updatePatient(this.id, value);
        }
    };
    EditPatientComponent.prototype.searchCep = function () {
        var _this = this;
        if (!this.patient.cep)
            return;
        this.viacep
            .buscarPorCep(this.patient.cep)
            .then(function (endereco) {
            _this.patient.cep = endereco.cep;
            _this.patient.state = endereco.uf;
            _this.patient.city = endereco.localidade;
            _this.patient.neighborhood = endereco.bairro;
            _this.patient.address = endereco.logradouro;
        })
            .catch(function (error) {
            // Alguma coisa deu errado :/
            _this.dialog.open(_info_modal_info_modal_component__WEBPACK_IMPORTED_MODULE_9__["InfoModalComponent"], {
                data: { title: "Erro", message: error.message }
            });
        });
    };
    EditPatientComponent.prototype.ngOnDestroy = function () {
        this.congregationsSub.unsubscribe();
        this.hospitalsSub.unsubscribe();
        this.accommodationsSub.unsubscribe();
        this.patientSub.unsubscribe();
    };
    EditPatientComponent.prototype.searchCongregation = function () {
        var _this = this;
        var congs = this.congregations.filter(function (c) { return c.name == _this.patient.congregation; });
        return congs[0];
    };
    EditPatientComponent.prototype.searchById = function (elements, id) {
        var el = elements.filter(function (c) { return c.id == id; });
        return el[0];
    };
    EditPatientComponent.prototype.onBackClicked = function () {
        this.location.back();
    };
    EditPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-edit-patient",
            template: __webpack_require__(/*! ./edit-patient.component.html */ "./src/app/components/patients/edit-patient/edit-patient.component.html"),
            styles: [__webpack_require__(/*! ./edit-patient.component.css */ "./src/app/components/patients/edit-patient/edit-patient.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("fade", [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("void => *", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(500)])
                ])
            ]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _patients_service__WEBPACK_IMPORTED_MODULE_7__["PatientsService"],
            _congregations_congregations_service__WEBPACK_IMPORTED_MODULE_8__["CongregationsService"],
            _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_6__["NgxViacepService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"],
            _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_11__["HospitalsService"],
            _accommodations_accommodations_service__WEBPACK_IMPORTED_MODULE_12__["AccommodationsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], EditPatientComponent);
    return EditPatientComponent;
}());



/***/ }),

/***/ "./src/app/components/patients/list-patients/list-patients.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/patients/list-patients/list-patients.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-trash{\n  color: red;\n}\n\n.fa-edit{\n  background-color: orange;\n}\n\n.fa-eye{\n  background-color: lightblue;\n}\n\n#actions{\n  text-align: center;\n}\n\ntr:hover {\n  background-color: lightgoldenrodyellow;\n}\n\n::-webkit-input-placeholder{\n  opacity: 0.5;\n}\n\n::-ms-input-placeholder{\n  opacity: 0.5;\n}\n\n::placeholder{\n  opacity: 0.5;\n}\n\nthead{\n  background-color: rgb(252, 249, 97);\n\n}\n\ntd{\n  word-break:break-all\n}\n\n@media screen and (max-width: 480px) {\n  .colhide{\n    display: none;\n  }\n}\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9saXN0LXBhdGllbnRzL2xpc3QtcGF0aWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFHRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFHRDtFQUNFLHVDQUF1QztDQUN4Qzs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFGRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG9DQUFvQzs7Q0FFckM7O0FBSUQ7RUFDRSxvQkFBb0I7Q0FDckI7O0FBR0Q7RUFDRTtJQUNFLGNBQWM7R0FDZjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9saXN0LXBhdGllbnRzL2xpc3QtcGF0aWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmZhLWVkaXR7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLmZhLWV5ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG5cbiNhY3Rpb25ze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxudHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcbn1cblxuOjpwbGFjZWhvbGRlcntcbiAgb3BhY2l0eTogMC41O1xufVxuXG50aGVhZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQ5LCA5Nyk7XG5cbn1cblxuXG5cbnRke1xuICB3b3JkLWJyZWFrOmJyZWFrLWFsbFxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb2xoaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cblxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/patients/list-patients/list-patients.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/patients/list-patients/list-patients.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-10\">\n      <h2><i class=\"fa fa-bed\"></i> Pacientes</h2>\n    </div>\n    <div class=\"col-md-2\">\n      <h5 class=\"text-right text-secondary\">Total: {{ patients?.length }}</h5>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-10\">\n      <div @fade>\n        <!-- <label for=\"filter\" ><strong>Filtro</strong></label> -->\n        <div class=\"row\">\n        <div class=\"col-md-3\">\n        <input type=\"text\" class=\"form-control\" name=\"filteredName\" [ngModel]=\"filteredName | titlecase\" (ngModelChange)=\"filteredName = $event\"\n          placeholder=\"Filtrar por nome\">\n        </div>\n        <div class=\"col-md-3\">\n          <input type=\"text\" class=\"form-control\" name=\"filteredEmail\" [ngModel]=\"filteredEmail\" (ngModelChange)=\"filteredEmail = $event\"\n          placeholder=\"Filtrar por email\">\n        </div>\n      </div>\n      </div>\n    </div>\n    <div class=\"col-md-2 mt-1\">\n        <a routerLink=\"add\" class=\"btn btn-success btn-block\">\n          <i class=\"fa fa-plus\"> Novo</i>\n        </a>\n      </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-md-10\">\n      <table *ngIf=\"patients?.length > 0;else noPatients\" class=\"table\" id=\"patientTable\">\n        <thead class=\"thead\">\n          <tr>\n            <th >Nome</th>\n            <th class=\"colhide\">Email</th>\n            <th class=\"colhide\">Celular</th>\n            <th class=\"colhide\">Congregação</th>\n            <th  colspan=\"3\" id=\"actions\">Ações</th>\n          </tr>\n        </thead>\n        <tbody @fade>\n          <tr  *ngFor=\"let patient of  patients | filter: filteredName : 'firstName' : 'lastName' | filter: filteredEmail: 'email'\">\n            <td ><a routerLink=\"{{ patient.id }}\">{{ patient.firstName }} {{ patient.lastName }}</a></td>\n            <td class=\"colhide\">{{ patient.email }}</td>\n            <td class=\"colhide\">{{ patient.mobilePhone }}</td>\n            <td class=\"colhide\">{{ patient.congregation }}</td>\n          <td ><button id=\"eyeButton\" routerLink=\"{{ patient.id }}\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td>\n          <td ><button id=\"editButton\" routerLink=\"edit/{{ patient.id }}\"><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></button></td>\n          <td ><button id=\"deleteButton\" (click)=\"onDeleteClick(patient.id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>\n        </td>\n\n          </tr>\n        </tbody>\n\n      </table>\n\n    </div>\n  </div>\n\n\n  <ng-template #noPatients>\n    <hr>\n    <h5>Não existem pacientes cadastrados no sistema</h5>\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/components/patients/list-patients/list-patients.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/patients/list-patients/list-patients.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListPatientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPatientsComponent", function() { return ListPatientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patients.service */ "./src/app/components/patients/patients.service.ts");
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
var ListPatientsComponent = /** @class */ (function () {
    function ListPatientsComponent(patientsService, router, dialog) {
        this.patientsService = patientsService;
        this.router = router;
        this.dialog = dialog;
        this.patients = [];
        this.filteredName = '';
        this.filteredEmail = '';
    }
    ListPatientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patients = this.patientsService.Patients;
        if (this.patients.length <= 0)
            this.patientsService.getPatientsServer();
        this.patientsSub = this.patientsService
            .getPatientsUpdateListener()
            .subscribe(function (patientsData) {
            _this.patients = patientsData;
        });
    };
    ListPatientsComponent.prototype.ngOnDestroy = function () {
        this.patientsSub.unsubscribe();
    };
    ListPatientsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            if (result)
                _this.patientsService.deletePatient(id);
        });
    };
    ListPatientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-patients',
            template: __webpack_require__(/*! ./list-patients.component.html */ "./src/app/components/patients/list-patients/list-patients.component.html"),
            styles: [__webpack_require__(/*! ./list-patients.component.css */ "./src/app/components/patients/list-patients/list-patients.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_patients_service__WEBPACK_IMPORTED_MODULE_3__["PatientsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ListPatientsComponent);
    return ListPatientsComponent;
}());



/***/ }),

/***/ "./src/app/components/patients/patient-details/patient-details.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/patients/patient-details/patient-details.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item {\n\tfont-family: Rockwell,Courier Bold,Courier,Georgia,Times,Times New Roman,serif;\n}\n\n.Topic{\n  background: blanchedalmond;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50LWRldGFpbHMvcGF0aWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywrRUFBK0U7Q0FDL0U7O0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnQtZGV0YWlscy9wYXRpZW50LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xuXHRmb250LWZhbWlseTogUm9ja3dlbGwsQ291cmllciBCb2xkLENvdXJpZXIsR2VvcmdpYSxUaW1lcyxUaW1lcyBOZXcgUm9tYW4sc2VyaWY7XG59XG5cbi5Ub3BpY3tcbiAgYmFja2dyb3VuZDogYmxhbmNoZWRhbG1vbmQ7XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/patients/patient-details/patient-details.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/patients/patient-details/patient-details.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <a [routerLink]=\"\" (click)=onBackClicked() class=\"btn btn-link\">\n      <i class=\"fa fa-arrow-circle-o-left\"></i> Voltar\n    </a>\n  </div>\n  <div class=\"col md-6\">\n    <div class=\"btn-group pull-right\">\n      <a routerLink=\"/patients/edit/{{ id }}\" class=\"btn btn-warning\">\n        Editar\n      </a>\n      <button (click)=\"onDeleteClick()\" class=\"btn btn-danger\">Deletar</button>\n    </div>\n  </div>\n</div>\n<hr>\n<div *ngIf=\"patient\" class=\"card\" @fade>\n  <h3 class=\"card-header\">Paciente: {{ patient.firstName }} {{ patient.lastName }}</h3>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"col-md-12 col-sm-6\">\n        <h4> ID: {{ patient.id }}</h4>\n      </div>\n    </div>\n    <hr>\n    <div class=\"row\">\n      <ul class=\"list-group col-md-4\">\n        <li class=\"list-group-item\"><strong class=\"Topic\">Email:</strong> {{ patient.email }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Celular:</strong> {{ patient.mobilePhone }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Telefone:</strong> {{ patient.phone }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Congregação:</strong> {{ patient.congregation }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Endereço:</strong> {{ patient.address }}, {{ patient.numeral }}\n          {{ patient.complement }} - {{ patient.neighborhood }} - {{ patient.city }} - {{ patient.state }}</li>\n        <li class=\"list-group-item\">\n        <a [routerLink]=\"\" (click)=\"showDetailsHospital = !showDetailsHospital\">\n        <strong class=\"Topic\">Hospital:</strong></a> {{ hospital?.name }}\n        <div *ngIf=\"showDetailsHospital\"> Endereço: {{ hospital.address }}, {{ hospital.numeral }}\n          {{ hospital.complement }} - {{ hospital.neighborhood }} - {{ hospital.city }} - {{ hospital.state }}\n        </div>\n        </li>\n      </ul>\n      <ul class=\"list-group col-md-4\">\n        <li class=\"list-group-item\"><strong class=\"Topic\">Data de internação:</strong> {{ patient.hospitalizationDate |\n          date:'dd-MM-yyyy'}}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Data de alta médica:</strong> {{ patient.medicalRelease |\n          date:'dd-MM-yyyy' }}</li>\n        <li class=\"list-group-item\">\n            <a [routerLink]=\"\" (click)=\"showDetailsAccommodation = !showDetailsAccommodation \">\n              <strong class=\"Topic\">Hospedagem:</strong></a> {{ accommodation?.name }}\n              <div *ngIf=\"showDetailsAccommodation\"> Endereço: {{ accommodation.address }}, {{ accommodation.numeral }}\n                {{ accommodation.complement }} - {{ accommodation.neighborhood }} - {{ accommodation.city }} - {{ accommodation.state }}\n              </div>\n            </li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Celular Ancião 1:</strong> {{ patient.mobileElder1 }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Celular Ancião 2:</strong> {{ patient.mobileElder2 }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Telefone Ancião 1:</strong> {{ patient.phoneElder1 }}</li>\n      </ul>\n    <ul class=\"list-group col-md-4\">\n      <li class=\"list-group-item\"><strong class=\"Topic\">Telefone Ancião 2:</strong> {{ patient.phoneElder2 }}</li>\n    </ul>\n      <!-- <ul class=\"list-group col-md-4\">\n        <li class=\"list-group-item\"><strong class=\"Topic\">Bairro:</strong> {{ patient.neighborhood }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Logradouro:</strong> {{ patient.address }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Número:</strong> {{ patient.numeral }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Complemento:</strong> {{ patient.complement }}</li>\n        <li class=\"list-group-item\"><strong class=\"Topic\">Cep:</strong> {{ patient.cep }}</li>\n      </ul> -->\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"patient\" class=\"card\" @fade>\n  <h4 class=\"card-header\">Descrição do caso</h4>\n  <div class=\"card-body\">\n    <div class=\"row\">\n      <div class=\"container\" id=\"divEditor\">\n\n        <angular-editor id=\"myEditor\" name=\"caseDescription\" [(ngModel)]=\"patient.caseDescription\" [config]=\"config\"></angular-editor>\n        <br>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/patients/patient-details/patient-details.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/patients/patient-details/patient-details.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PatientDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientDetailsComponent", function() { return PatientDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _patients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../patients.service */ "./src/app/components/patients/patients.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../confirm-modal/confirm-modal.component */ "./src/app/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hospitals/hospitals.service */ "./src/app/components/hospitals/hospitals.service.ts");
/* harmony import */ var _accommodations_accommodations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../accommodations/accommodations.service */ "./src/app/components/accommodations/accommodations.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PatientDetailsComponent = /** @class */ (function () {
    function PatientDetailsComponent(patientsService, router, route, dialog, hospitalsService, accommodationsService, location) {
        this.patientsService = patientsService;
        this.router = router;
        this.route = route;
        this.dialog = dialog;
        this.hospitalsService = hospitalsService;
        this.accommodationsService = accommodationsService;
        this.location = location;
        this.showDetailsHospital = false;
        this.showDetailsAccommodation = false;
        this.accommodations = [];
        this.hospitals = [];
        this.patient = {
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
            mobileElder1: "",
            mobileElder2: "",
            phoneElder1: "",
            phoneElder2: "",
            caseDescription: "",
            hospital: "",
            hospitalizationDate: null,
            medicalRelease: null,
            accommodation: "",
            infoWho: "",
        };
        this.config = {
            showToolbar: false,
            editable: false,
            spellcheck: true,
            height: "15rem",
            minHeight: "5rem",
            placeholder: "Digite aqui",
            translate: "no",
            uploadUrl: "http://localhost:3000/images",
            customClasses: [
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1"
                }
            ]
        };
    }
    PatientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get id from url
        this.id = this.route.snapshot.params['id'];
        // Get client
        var patient = this.patientsService.getPatient(this.id);
        if (patient)
            this.patient = patient;
        else {
            this.patientsService.getOnePatientServer(this.id);
        }
        this.patientSub = this.patientsService.getOnePatientUpdateListener().subscribe(function (patient) { return _this.patient = patient; });
        //When delete return to list screen
        this.patientsSub = this.patientsService
            .getPatientsUpdateListener()
            .subscribe(function () {
            _this.router.navigate(["/patients"]);
        });
        //get Hospital
        this.hospitals = this.hospitalsService.Hospitals;
        if (this.hospitals.length <= 0)
            this.hospitalsService.getHospitalsServer();
        else {
            this.hospital = this.searchById(this.hospitals, this.patient.hospital);
        }
        this.hospitalsSub = this.hospitalsService
            .getHospitalsUpdateListener()
            .subscribe(function (hospitalsData) {
            _this.hospitals = hospitalsData;
            _this.hospital = _this.searchById(_this.hospitals, _this.patient.hospital);
        });
        //get Accommodation
        this.accommodations = this.accommodationsService.Accommodations;
        if (this.accommodations.length <= 0)
            this.accommodationsService.getAccommodationsServer();
        else {
            this.accommodation = this.searchById(this.accommodations, this.patient.accommodation);
        }
        this.accommodationsSub = this.accommodationsService
            .getAccommodationsUpdateListener()
            .subscribe(function (accommodationsData) {
            _this.accommodations = accommodationsData;
            _this.accommodation = _this.searchById(_this.accommodations, _this.patient.accommodation);
        });
    };
    PatientDetailsComponent.prototype.onDeleteClick = function () {
        var _this = this;
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogConfig"]();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        this.dialog.open(_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], dialogConfig)
            .afterClosed().subscribe(function (result) {
            if (result)
                _this.patientsService.deletePatient(_this.id);
        });
    };
    PatientDetailsComponent.prototype.ngOnDestroy = function () {
        this.patientsSub.unsubscribe();
        this.patientSub.unsubscribe();
        this.accommodationsSub.unsubscribe();
        this.hospitalsSub.unsubscribe();
    };
    PatientDetailsComponent.prototype.searchById = function (elements, id) {
        var el = elements.filter(function (c) { return c.id == id; });
        return el[0];
    };
    PatientDetailsComponent.prototype.onBackClicked = function () {
        this.location.back();
    };
    PatientDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-details',
            template: __webpack_require__(/*! ./patient-details.component.html */ "./src/app/components/patients/patient-details/patient-details.component.html"),
            styles: [__webpack_require__(/*! ./patient-details.component.css */ "./src/app/components/patients/patient-details/patient-details.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_patients_service__WEBPACK_IMPORTED_MODULE_4__["PatientsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _hospitals_hospitals_service__WEBPACK_IMPORTED_MODULE_7__["HospitalsService"],
            _accommodations_accommodations_service__WEBPACK_IMPORTED_MODULE_8__["AccommodationsService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], PatientDetailsComponent);
    return PatientDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/patients/patients-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/patients/patients-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: PatientsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsRoutingModule", function() { return PatientsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./src/app/components/patients/add-patient/add-patient.component.ts");
/* harmony import */ var _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-patients/list-patients.component */ "./src/app/components/patients/list-patients/list-patients.component.ts");
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "./src/app/components/patients/edit-patient/edit-patient.component.ts");
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-details/patient-details.component */ "./src/app/components/patients/patient-details/patient-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "", component: _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_3__["ListPatientsComponent"] },
    { path: "add", component: _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_2__["AddPatientComponent"] },
    { path: "edit/:id", component: _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_4__["EditPatientComponent"] },
    { path: ":id", component: _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_5__["PatientDetailsComponent"] },
];
var PatientsRoutingModule = /** @class */ (function () {
    function PatientsRoutingModule() {
    }
    PatientsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PatientsRoutingModule);
    return PatientsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/patients/patients.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/patients/patients.module.ts ***!
  \********************************************************/
/*! exports provided: PatientsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsModule", function() { return PatientsModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brunoc/ngx-viacep */ "./node_modules/@brunoc/ngx-viacep/fesm5/brunoc-ngx-viacep.js");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-patients/list-patients.component */ "./src/app/components/patients/list-patients/list-patients.component.ts");
/* harmony import */ var _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-patient/add-patient.component */ "./src/app/components/patients/add-patient/add-patient.component.ts");
/* harmony import */ var _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-patient/edit-patient.component */ "./src/app/components/patients/edit-patient/edit-patient.component.ts");
/* harmony import */ var _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patient-details/patient-details.component */ "./src/app/components/patients/patient-details/patient-details.component.ts");
/* harmony import */ var _pipes_filter_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../pipes/filter.module */ "./src/app/pipes/filter.module.ts");
/* harmony import */ var _patients_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./patients-routing.module */ "./src/app/components/patients/patients-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PatientsModule = /** @class */ (function () {
    function PatientsModule() {
    }
    PatientsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _list_patients_list_patients_component__WEBPACK_IMPORTED_MODULE_6__["ListPatientsComponent"],
                _add_patient_add_patient_component__WEBPACK_IMPORTED_MODULE_7__["AddPatientComponent"],
                _edit_patient_edit_patient_component__WEBPACK_IMPORTED_MODULE_8__["EditPatientComponent"],
                _patient_details_patient_details_component__WEBPACK_IMPORTED_MODULE_9__["PatientDetailsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _patients_routing_module__WEBPACK_IMPORTED_MODULE_11__["PatientsRoutingModule"],
                _brunoc_ngx_viacep__WEBPACK_IMPORTED_MODULE_4__["NgxViacepModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"],
                _pipes_filter_module__WEBPACK_IMPORTED_MODULE_10__["FilterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_5__["AngularEditorModule"]
            ]
        })
    ], PatientsModule);
    return PatientsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-patients-patients-module.js.map