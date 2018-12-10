import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { trigger, transition, style, animate } from "@angular/animations";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { switchMap } from "rxjs/operators";


import { MatDialogConfig, MatDialog } from "@angular/material";
import { ConfirmModalComponent } from "../../confirm-modal/confirm-modal.component";
import { Accommodation } from "../../accommodations/accommodation.model";
import { Hospital } from "../../hospitals/hospital.model";
import { HospitalsService } from "../../hospitals/hospitals.service";
import { AccommodationsService } from "../../accommodations/accommodations.service";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { Congregation } from "../../congregations/congregation.model";
import { Report } from "../report.model";
import { Patient } from "../../patients/patient.model";
import { User } from "../../users/user.model";
import { ReportsService } from "../reports.service";
import { UsersService } from "../../users/users.service";
import { PatientsService } from "../../patients/patients.service";
import { CongregationsService } from "../../congregations/congregations.service";

@Component({
  selector: "app-Report-details",
  templateUrl: "./Report-details.component.html",
  styleUrls: ["./Report-details.component.css"],
  animations: [
    trigger("fade", [
      transition("void => *", [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class ReportDetailsComponent implements OnInit, OnDestroy {
  id: string;
  showDetailsHospital = false;
  showDetailsAccommodation = false;
  // Report: Report;
  reportSub: Subscription;

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
    description: ""
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
    showToolbar: false,
    editable: false,
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
    private patientsService: PatientsService,
    private reportsService: ReportsService,
    private usersService: UsersService,
    private hospitalsService: HospitalsService,
    private accommodationsService: AccommodationsService,
    private congregationsService: CongregationsService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params["id"];
    // Get client

    let report = this.reportsService.getReport(this.id);

    if(this.reportsService.Reports.length <= 0)
    this.reportsService.getReportsServer();


    if (report) {

      this.report = report;

      this.users = this.usersService.Users;
      if (this.users.length > 0) {
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

      if(this.patient && this.hospitals.length > 0)
      this.hospital = this.searchById(this.hospitals, this.patient.hospitalId);



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
        this.accommodationsService.getAccommodationsServer();
        this.congregationsService.getCongregationsServer();
        this.patientsService.getPatientsServer();
        this.usersService.getUsersServer();
      });

      this.reportsSub = this.reportsService
      .getReportsUpdateListener()
      .subscribe(() => {
        this.router.navigate(["/reports"]);
      });

    this.usersSub = this.usersService
      .getUsersUpdateListener()
      .subscribe(usersData => {
        this.users = usersData;
        this.gvp1 = this.searchById(this.users, this.report.gvpId1);
        this.gvp2 = this.searchById(this.users, this.report.gvpId2);
      });

    this.patientsSub = this.patientsService
      .getPatientsUpdateListener()
      .subscribe(patientsData => {
        this.patients = patientsData;
        this.patient = this.searchById(this.patients, this.report.patientId);
        this.hospitalsService.getHospitalsServer();
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

        if(this.patient)
        this.hospital = this.searchById(this.hospitals, this.patient.hospitalId);
      });

    //get Accommodation

    this.accommodationsSub = this.accommodationsService
      .getAccommodationsUpdateListener()
      .subscribe(accommodationsData => {
        this.accommodations = accommodationsData;
      });
  }

  onDeleteClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog
      .open(ConfirmModalComponent, dialogConfig)
      .afterClosed()
      .subscribe(result => {
        if (result) this.reportsService.deleteReport(this.id, this.report.patientId);
      });
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe();
    this.patientsSub.unsubscribe();
    this.reportSub.unsubscribe();
    this.reportsSub.unsubscribe();
    this.congregationsSub.unsubscribe();
    this.hospitalsSub.unsubscribe();
    this.accommodationsSub.unsubscribe();
  }

  searchById(elements, id) {
    let el = elements.filter(c => c.id == id);
    return el[0];
  }

  onBackClicked() {
    this.location.back();
  }
}
