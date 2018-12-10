import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostBinding
} from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { FlashMessagesService } from "angular2-flash-messages";
import { Subscription } from "rxjs";
import { Location } from "@angular/common";

import { NgxViacepService } from "@brunoc/ngx-viacep";
import { AngularEditorConfig } from "@kolkov/angular-editor";

import { Report } from "../report.model";
import { ReportsService } from "../reports.service";
import { Congregation } from "../../congregations/congregation.model";
import { CongregationsService } from "../../congregations/congregations.service";
import { MatDialog } from "@angular/material";
import { InfoModalComponent } from "../../info-modal/info-modal.component";
import { Accommodation } from "../../accommodations/accommodation.model";
import { Hospital } from "../../hospitals/hospital.model";
import { HospitalsService } from "../../hospitals/hospitals.service";
import { AccommodationsService } from "../../accommodations/accommodations.service";
import { User } from "../../users/user.model";
import { Patient } from "../../patients/patient.model";
import { PatientsService } from "../../patients/patients.service";
import { UsersService } from "../../users/users.service";

@Component({
  selector: "app-add-report",
  templateUrl: "./add-report.component.html",
  styleUrls: ["./add-report.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class AddReportComponent implements OnInit, OnDestroy {
  @ViewChild("reportForm")
  form: any;
  @ViewChild("firstNameRef")
  firstNameRef: ElementRef;

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

  newdate = new Date();

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
    description: ""
  };

  patients: Patient[] = [];
  patientsSub: Subscription;
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

  constructor(
    private flashMessage: FlashMessagesService,
    private reportsService: ReportsService,
    private congregationsService: CongregationsService,
    private dialog: MatDialog,
    private hospitalsService: HospitalsService,
    private accommodationsService: AccommodationsService,
    private location: Location,
    private patientsService: PatientsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.users = this.usersService.Users;
    if (this.users.length <= 0) this.usersService.getUsersServer();
    else{
      this.gvps1 = [...this.users];
      this.gvps2 = [...this.users];
    }

    this.usersSub = this.usersService
      .getUsersUpdateListener()
      .subscribe(usersData => {
        this.users = usersData;
        this.gvps1 = [...this.users];
        this.gvps2 = [...this.users];
      });

    this.patients = this.patientsService.Patients;
    if (this.patients.length <= 0) this.patientsService.getPatientsServer();
    else this.patients = [...this.patients];


    this.patientsSub = this.patientsService
      .getPatientsUpdateListener()
      .subscribe(patientsData => {
        this.patients = patientsData;
      });

    this.reports = this.reportsService.Reports;
    if (this.reports.length <= 0) this.reportsService.getReportsServer();

    this.reportsSub = this.reportsService
      .getReportsUpdateListener()
      .subscribe(() => {
        this.resetForm();
      });

    //get Congregation
    this.congregations = this.congregationsService.Congregations;
    if (this.congregations.length <= 0)
      this.congregationsService.getCongregationsServer();

    this.congregationsSub = this.congregationsService
      .getCongregationsUpdateListener()
      .subscribe(congregationsData => {
        this.congregations = congregationsData;
      });

    //get Hospital
    this.hospitals = this.hospitalsService.Hospitals;

    if (this.hospitals.length <= 0) this.hospitalsService.getHospitalsServer();

    this.hospitalsSub = this.hospitalsService
      .getHospitalsUpdateListener()
      .subscribe(hospitalsData => {
        this.hospitals = hospitalsData;
      });

    //get Accommodation
    this.accommodations = this.accommodationsService.Accommodations;

    if (this.accommodations.length <= 0)
      this.accommodationsService.getAccommodationsServer();

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
      // Add new client
      value.typeReport = 'patient';
      value.gvpId1 = this.gvp1.id;
      value.gvpName1 = this.gvp1.firstName + ' ' + this.gvp1.lastName;
      value.gvpId2 = this.gvp2.id;
      value.gvpName2 = this.gvp2.firstName + ' ' + this.gvp2.lastName;
      value.patientId = this.patient.id;
      value.patientName = this.patient.firstName + ' ' + this.patient.lastName;
      this.reportsService.createReport(value);
      this.hasError = false;
    }
  }

  resetForm() {
    window.scrollTo(0, 0);
    this.form.resetForm();
  }

  ngOnDestroy() {
    this.patientsSub.unsubscribe();
    this.usersSub.unsubscribe();
    this.congregationsSub.unsubscribe();
    this.reportsSub.unsubscribe();
    this.hospitalsSub.unsubscribe();
    this.accommodationsSub.unsubscribe();
  }

  onBackClicked() {
    this.location.back();
  }
}
