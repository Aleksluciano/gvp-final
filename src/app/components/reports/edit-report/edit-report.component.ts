import { MatDialog } from "@angular/material";
import { Congregation } from "./../../congregations/congregation.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { NgxViacepService } from "@brunoc/ngx-viacep";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { Subscription } from "rxjs";
import { CongregationsService } from "../../congregations/congregations.service";
import { InfoModalComponent } from "../../info-modal/info-modal.component";
import { Hospital } from "../../hospitals/hospital.model";
import { Accommodation } from "../../accommodations/accommodation.model";
import { HospitalsService } from "../../hospitals/hospitals.service";
import { AccommodationsService } from "../../accommodations/accommodations.service";
import { User } from "../../users/user.model";
import { Report } from "../report.model";
import { ReportsService } from "../reports.service";
import { UsersService } from "../../users/users.service";
import { Patient } from "../../patients/patient.model";
import { PatientsService } from "../../patients/patients.service";

@Component({
  selector: "app-edit-report",
  templateUrl: "./edit-report.component.html",
  styleUrls: ["./edit-report.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class EditReportComponent implements OnInit, OnDestroy {
  id: string;
  reportSub: Subscription;
  hasError = false;

  congregations: Congregation[] = [];
  congregationsSub: Subscription;
  congregation: Congregation = { id: "", name: "" };

  accommodations: Accommodation[] = [];
  accommodationsSub: Subscription;
  accommodation: Accommodation = {
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

  hospitals: Hospital[] = [];
  hospitalsSub: Subscription;
  hospital: Hospital;

  reports: Report[] = [];
  reportsSub: Subscription;
  report: Report = {
    id: "",
    typeReport: "patient",
    patientId: "",
    patientName: "",
    assistantId: "",
    visitDate: null,
    gvpId1: "",
    gvpName1: "",
    gvpId2: "",
    gvpName2: "",
    description: "",
    code: ""
  };

  patients: Patient[] = [];
  patientsSub: Subscription;
  patientSub: Subscription;
  patient: Patient = {
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
    hospitalId: "",
    hospitalizationDate: null,
    medicalRelease: null,
    accommodationId: "",
    infoWho: "Gvp",
    report: null
  };

  usersSub: Subscription;
  users: User[] = [];
  gvps1: User[] = [];
  gvps2: User[] = [];
  user: User = {
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

  gvp1: User = {
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

  gvp2: User = {
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

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "30rem",
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

  constructor(
    private flashMessage: FlashMessagesService,
    private patientsService: PatientsService,
    private reportsService: ReportsService,
    private usersService: UsersService,
    private hospitalsService: HospitalsService,
    private accommodationsService: AccommodationsService,
    private congregationsService: CongregationsService,
    private viacep: NgxViacepService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params["id"];
    // Get client


    let report = this.reportsService.getReport(this.id);
    if (report) {

      this.report = report;

      this.users = this.usersService.Users;
      if (this.users.length > 0) {
        this.gvps1 = [...this.users];
        this.gvps2 = [...this.users];
        this.gvp1 = this.searchById(this.users, this.report.gvpId1);
        this.gvp2 = this.searchById(this.users, this.report.gvpId2);
      } else this.usersService.getUsersServer();

      this.patients = this.patientsService.Patients;
      if (this.patients.length > 0)
        this.patient = this.searchById(this.patients, this.report.patientId);
      else this.patientsService.getPatientsServer();

      this.hospitals = this.hospitalsService.Hospitals;
      if (this.hospitals.length <= 0)
        this.hospitalsService.getHospitalsServer();

      this.accommodations = this.accommodationsService.Accommodations;
      if (this.accommodations.length <= 0)
        this.accommodationsService.getAccommodationsServer();

      this.congregations = this.congregationsService.Congregations;
      if (this.congregations.length <= 0)
        this.congregationsService.getCongregationsServer();
    } else {
      this.reportsService.getOneReportServer(this.id);
    }

    this.reportSub = this.reportsService
      .getOneReportUpdateListener()
      .subscribe(report => {
        this.report = report;
        this.hospitalsService.getHospitalsServer();
        this.accommodationsService.getAccommodationsServer();
        this.congregationsService.getCongregationsServer();
        this.patientsService.getPatientsServer();
        this.usersService.getUsersServer();
      });

    this.usersSub = this.usersService
      .getUsersUpdateListener()
      .subscribe(usersData => {
        this.users = usersData;
        this.gvps1 = [...this.users];
        this.gvps2 = [...this.users];
        this.gvp1 = this.searchById(this.users, this.report.gvpId1);
        this.gvp2 = this.searchById(this.users, this.report.gvpId2);

      });

    this.patientsSub = this.patientsService
      .getPatientsUpdateListener()
      .subscribe(patientsData => {
        this.patients = patientsData;
        this.patient = this.searchById(this.patients, this.report.patientId);
      });

    this.congregationsSub = this.congregationsService
      .getCongregationsUpdateListener()
      .subscribe(congregationsData => {
        this.congregations = congregationsData;
      });

    //get Hospital

    this.hospitalsSub = this.hospitalsService
      .getHospitalsUpdateListener()
      .subscribe(hospitalsData => {
        this.hospitals = hospitalsData;
      });

    //get Accommodation

    this.accommodationsSub = this.accommodationsService
      .getAccommodationsUpdateListener()
      .subscribe(accommodationsData => {
        this.accommodations = accommodationsData;
      });
  }

  onSubmit({ value, valid }: { value: Report; valid: boolean }) {
    if (!valid) {
      // Show Error
      this.flashMessage.show("Preencha o formulário corretamente", {
        cssClass: "alert-danger",
        timeout: 4000
      });

      this.hasError = true;
      window.scrollTo(0, 0);
    } else {
      // Update Patient
      value.gvpId1 = this.gvp1.id;
      value.gvpName1 = this.gvp1.firstName + ' ' + this.gvp1.lastName;
      value.gvpId2 = this.gvp2.id;
      value.gvpName2 = this.gvp2.firstName + ' ' + this.gvp2.lastName;
      value.patientId = this.patient.id;
      value.patientName = this.patient.firstName + ' ' + this.patient.lastName;
      value.id = this.id;
      value.code = this.report.code;
      this.reportsService.updateReport(this.id, value);

      this.hasError = false;
    }
  }

  searchCep() {
    if (!this.patient.cep) return;
    this.viacep
      .buscarPorCep(this.patient.cep)
      .then(endereco => {
        this.patient.cep = endereco.cep;
        this.patient.state = endereco.uf;
        this.patient.city = endereco.localidade;
        this.patient.neighborhood = endereco.bairro;
        this.patient.address = endereco.logradouro;
      })
      .catch(error => {
        // Alguma coisa deu errado :/

        this.dialog.open(InfoModalComponent, {
          data: { title: "Erro", message: error.message }
        });
      });
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
    this.patientsSub.unsubscribe();
    this.reportSub.unsubscribe();
    this.congregationsSub.unsubscribe();
    this.hospitalsSub.unsubscribe();
    this.accommodationsSub.unsubscribe();
  }

  searchCongregation() {
    let congs = this.congregations.filter(
      c => c.name == this.patient.congregation
    );
    return congs[0];
  }

  searchById(elements, id) {
    let el = elements.filter(c => c.id == id);
    return el[0];
  }

  onBackClicked() {
    this.location.back();
  }
}
