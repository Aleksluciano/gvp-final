(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/accommodations/accommodations.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/accommodations/accommodations.service.ts ***!
  \*********************************************************************/
/*! exports provided: AccommodationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccommodationsService", function() { return AccommodationsService; });
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







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/accommodations/";
var AccommodationsService = /** @class */ (function () {
    function AccommodationsService(_flashMessagesService, http, router) {
        this._flashMessagesService = _flashMessagesService;
        this.http = http;
        this.router = router;
        this.accommodations = [];
        this.accommodationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.warnFlashMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AccommodationsService.prototype.createAccommodation = function (accommodation) {
        var _this = this;
        this.http
            .post(BACKEND_URL, accommodation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return ({
                id: responseData.accommodation._id,
                name: responseData.accommodation.name,
                cep: responseData.accommodation.cep,
                state: responseData.accommodation.state,
                city: responseData.accommodation.city,
                neighborhood: responseData.accommodation.neighborhood,
                address: responseData.accommodation.address,
                numeral: responseData.accommodation.numeral,
                complement: responseData.accommodation.complement,
                responsable: responseData.accommodation.responsable,
                mobilePhone: responseData.accommodation.mobilePhone,
                phone: responseData.accommodation.phone
            });
        }))
            .subscribe(function (newAccommodation) {
            _this.accommodations.unshift(newAccommodation);
            _this.accommodationsUpdated.next(_this.accommodations.slice());
            _this._flashMessagesService.show("Nova hospedagem adicionada", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    AccommodationsService.prototype.getAccommodationsServer = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return {
                accommodations: responseData.accommodations.map(function (accommodation) {
                    return ({
                        id: accommodation._id,
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
                    });
                })
            };
        }))
            .subscribe(function (responseData) {
            _this.accommodations = responseData.accommodations;
            _this.accommodations.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.accommodationsUpdated.next(_this.accommodations.slice());
        });
    };
    Object.defineProperty(AccommodationsService.prototype, "Accommodations", {
        get: function () {
            return this.accommodations || [];
        },
        enumerable: true,
        configurable: true
    });
    AccommodationsService.prototype.getAccommodationsUpdateListener = function () {
        return this.accommodationsUpdated.asObservable();
    };
    AccommodationsService.prototype.deleteAccommodation = function (id) {
        var _this = this;
        return this.http.delete(BACKEND_URL + id).subscribe(function () {
            _this.accommodations.forEach(function (u, index) {
                if (u.id == id)
                    _this.accommodations.splice(index, 1);
            });
            _this.accommodationsUpdated.next(_this.accommodations.slice());
            _this._flashMessagesService.show("Hospedagem removida", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    AccommodationsService.prototype.getAccommodation = function (id) {
        var accommodation = this.accommodations.filter(function (u) { return u.id == id; });
        return accommodation[0];
    };
    AccommodationsService.prototype.updateAccommodation = function (id, accommodation) {
        var _this = this;
        this.http.put(BACKEND_URL + id, accommodation).subscribe(function (responseData) {
            _this.accommodations = _this.accommodations.map(function (u) {
                if (u.id == id)
                    u = accommodation;
                return u;
            });
            _this.accommodationsUpdated.next(_this.accommodations.slice());
            _this._flashMessagesService.show("Hospedagem atualizada", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    AccommodationsService.prototype.warnFlashMessageListener = function () {
        return this.warnFlashMessage.asObservable();
    };
    AccommodationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AccommodationsService);
    return AccommodationsService;
}());



/***/ }),

/***/ "./src/app/components/congregations/congregations.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/congregations/congregations.service.ts ***!
  \*******************************************************************/
/*! exports provided: CongregationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongregationsService", function() { return CongregationsService; });
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







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/congregations/";
var CongregationsService = /** @class */ (function () {
    function CongregationsService(_flashMessagesService, http, router) {
        this._flashMessagesService = _flashMessagesService;
        this.http = http;
        this.router = router;
        this.congregations = [];
        this.congregationsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.warnFlashMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    CongregationsService.prototype.createCongregation = function (congregation) {
        var _this = this;
        this.http
            .post(BACKEND_URL, congregation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return ({
                id: responseData.congregation._id,
                name: responseData.congregation.name
            });
        }))
            .subscribe(function (newCongregation) {
            _this.congregations.unshift(newCongregation);
            _this.congregationsUpdated.next(_this.congregations.slice());
            _this._flashMessagesService.show("Nova congregação adicionada", {
                cssClass: "alert-success",
                timeout: 4000
            });
        });
    };
    CongregationsService.prototype.getCongregationsServer = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return {
                congregations: responseData.congregations.map(function (congregation) {
                    return ({
                        id: congregation._id,
                        name: congregation.name
                    });
                })
            };
        }))
            .subscribe(function (responseData) {
            _this.congregations = responseData.congregations;
            _this.congregations.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.congregationsUpdated.next(_this.congregations.slice());
        });
    };
    Object.defineProperty(CongregationsService.prototype, "Congregations", {
        get: function () {
            return this.congregations || [];
        },
        enumerable: true,
        configurable: true
    });
    CongregationsService.prototype.getCongregationsUpdateListener = function () {
        return this.congregationsUpdated.asObservable();
    };
    CongregationsService.prototype.deleteCongregation = function (id) {
        var _this = this;
        return this.http.delete(BACKEND_URL + id).subscribe(function () {
            _this.congregations.forEach(function (u, index) {
                if (u.id == id)
                    _this.congregations.splice(index, 1);
            });
            _this.congregationsUpdated.next(_this.congregations.slice());
            _this._flashMessagesService.show("Congregação removida", {
                cssClass: "alert-success",
                timeout: 4000
            });
        });
    };
    CongregationsService.prototype.getCongregation = function (id) {
        var congregation = this.congregations.filter(function (u) { return u.id == id; });
        return congregation[0];
    };
    CongregationsService.prototype.updateCongregation = function (id, congregation) {
        var _this = this;
        this.http.put(BACKEND_URL + id, congregation).subscribe(function (responseData) {
            _this.congregations = _this.congregations.map(function (u) {
                if (u.id == id)
                    u = congregation;
                return u;
            });
            _this.congregationsUpdated.next(_this.congregations.slice());
            _this._flashMessagesService.show("Congregação atualizada", {
                cssClass: "alert-success",
                timeout: 4000
            });
        });
    };
    CongregationsService.prototype.warnFlashMessageListener = function () {
        return this.warnFlashMessage.asObservable();
    };
    CongregationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CongregationsService);
    return CongregationsService;
}());



/***/ }),

/***/ "./src/app/components/hospitals/hospitals.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/hospitals/hospitals.service.ts ***!
  \***********************************************************/
/*! exports provided: HospitalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalsService", function() { return HospitalsService; });
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







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/hospitals/";
var HospitalsService = /** @class */ (function () {
    function HospitalsService(_flashMessagesService, http, router) {
        this._flashMessagesService = _flashMessagesService;
        this.http = http;
        this.router = router;
        this.hospitals = [];
        this.hospitalsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.warnFlashMessage = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    HospitalsService.prototype.createHospital = function (hospital) {
        var _this = this;
        this.http
            .post(BACKEND_URL, hospital)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return ({
                id: responseData.hospital._id,
                name: responseData.hospital.name,
                cep: responseData.hospital.cep,
                state: responseData.hospital.state,
                city: responseData.hospital.city,
                neighborhood: responseData.hospital.neighborhood,
                address: responseData.hospital.address,
                numeral: responseData.hospital.numeral,
                complement: responseData.hospital.complement
            });
        }))
            .subscribe(function (newHospital) {
            _this.hospitals.unshift(newHospital);
            _this.hospitalsUpdated.next(_this.hospitals.slice());
            _this._flashMessagesService.show("Novo hospital adicionado", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    HospitalsService.prototype.getHospitalsServer = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (responseData) {
            return {
                hospitals: responseData.hospitals.map(function (hospital) {
                    return ({
                        id: hospital._id,
                        name: hospital.name,
                        cep: hospital.cep,
                        state: hospital.state,
                        city: hospital.city,
                        neighborhood: hospital.neighborhood,
                        address: hospital.address,
                        numeral: hospital.numeral,
                        complement: hospital.complement
                    });
                })
            };
        }))
            .subscribe(function (responseData) {
            _this.hospitals = responseData.hospitals;
            _this.hospitals.sort(function (a, b) {
                if (a.name < b.name)
                    return -1;
                if (a.name > b.name)
                    return 1;
                return 0;
            });
            _this.hospitalsUpdated.next(_this.hospitals.slice());
        });
    };
    Object.defineProperty(HospitalsService.prototype, "Hospitals", {
        get: function () {
            return this.hospitals || [];
        },
        enumerable: true,
        configurable: true
    });
    HospitalsService.prototype.getHospitalsUpdateListener = function () {
        return this.hospitalsUpdated.asObservable();
    };
    HospitalsService.prototype.deleteHospital = function (id) {
        var _this = this;
        return this.http.delete(BACKEND_URL + id).subscribe(function () {
            _this.hospitals.forEach(function (u, index) {
                if (u.id == id)
                    _this.hospitals.splice(index, 1);
            });
            _this.hospitalsUpdated.next(_this.hospitals.slice());
            _this._flashMessagesService.show("Hospital removido", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    HospitalsService.prototype.getHospital = function (id) {
        var hospital = this.hospitals.filter(function (u) { return u.id == id; });
        return hospital[0];
    };
    HospitalsService.prototype.updateHospital = function (id, hospital) {
        var _this = this;
        this.http.put(BACKEND_URL + id, hospital).subscribe(function (responseData) {
            _this.hospitals = _this.hospitals.map(function (u) {
                if (u.id == id)
                    u = hospital;
                return u;
            });
            _this.hospitalsUpdated.next(_this.hospitals.slice());
            _this._flashMessagesService.show("Hospital atualizado", {
                cssClass: "alert-success",
                timeout: 2000
            });
        });
    };
    HospitalsService.prototype.warnFlashMessageListener = function () {
        return this.warnFlashMessage.asObservable();
    };
    HospitalsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_6__["FlashMessagesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HospitalsService);
    return HospitalsService;
}());



/***/ }),

/***/ "./src/app/mask/phone-mask.ts":
/*!************************************!*\
  !*** ./src/app/mask/phone-mask.ts ***!
  \************************************/
/*! exports provided: MaskPhones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskPhones", function() { return MaskPhones; });
var MaskPhones = /** @class */ (function () {
    function MaskPhones(obj) {
        this.obj = obj;
    }
    MaskPhones.prototype.onKeyPressMobilePhone = function (event, property) {
        if (property === void 0) { property = 'mobilePhone'; }
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if ((event.keyCode != 8 && !pattern.test(inputChar)) ||
            event.keyCode == 32) {
            event.preventDefault();
        }
        var substr = this.obj[property].substring(0, 1);
        var oldString = this.obj[property];
        var lengthString = this.obj[property].length;
        if (substr == "(" && lengthString == 3)
            this.obj[property] = oldString + ") ";
        else if (substr != "(" && lengthString == 2) {
            this.obj[property] = "(" + oldString + ") ";
        }
        if (lengthString == 10) {
            this.obj[property] = this.obj[property] + "-";
        }
    };
    MaskPhones.prototype.onKeyPressPhone = function (event, property) {
        if (property === void 0) { property = 'phone'; }
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if ((event.keyCode != 8 && !pattern.test(inputChar)) ||
            event.keyCode == 32) {
            event.preventDefault();
        }
        var substr = this.obj[property].substring(0, 1);
        var oldString = this.obj[property];
        var lengthString = this.obj[property].length;
        if (substr == "(" && lengthString == 3)
            this.obj[property] = oldString + ") ";
        else if (substr != "(" && lengthString == 2) {
            this.obj[property] = "(" + oldString + ") ";
        }
        if (lengthString == 9) {
            this.obj[property] = this.obj[property] + "-";
        }
    };
    return MaskPhones;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map