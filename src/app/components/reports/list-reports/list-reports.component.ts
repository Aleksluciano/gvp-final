import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


import { ReportsService } from '../reports.service';
import { Report } from '../report.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmModalComponent } from '../../confirm-modal/confirm-modal.component';
import { UsersService } from '../../users/users.service';
import { User } from '../../users/user.model';
import { Patient } from '../../patients/patient.model';
import { PatientsService } from '../../patients/patients.service';

//
@Component({
  selector: 'app-list-reports',
  templateUrl: './list-reports.component.html',
  styleUrls: ["./list-reports.component.css"],
  animations: [
    trigger('fade',[
      transition('void => *',[
        style({ opacity: 0}),
        animate(1000)
      ]),
    ]),
      ]
})
export class ListReportsComponent implements OnInit, OnDestroy {
  reportsSub: Subscription;
  reports: Report[] = [];
  filteredPatient: string = '';
  filteredMember: string = '';

  isLoaded: boolean = false;

  usersSub: Subscription;
  users: User[] = [];

  patientsSub: Subscription;
  patients: Patient[] = [];

  constructor(
    private reportsService: ReportsService,
    private usersService: UsersService,
    private patientsService: PatientsService,
    public router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit() {

    this.users = this.usersService.Users;
    if (this.users.length <= 0) this.usersService.getUsersServer();

    this.patients = this.patientsService.Patients;
    if (this.patients.length <= 0)this.patientsService.getPatientsServer();


     this.reports = this.reportsService.Reports;
    if (this.reports.length <= 0)this.reportsService.getReportsServer();
    else this.isLoaded = true;

    this.reportsSub = this.reportsService
      .getReportsUpdateListener()
      .subscribe( reportsData  => {
       this.reports = reportsData
       this.isLoaded = true;

      });


      this.usersSub = this.usersService
      .getUsersUpdateListener()
      .subscribe(usersData => {
        this.users = usersData;
      });

      this.patientsSub = this.patientsService
      .getPatientsUpdateListener()
      .subscribe( patientsData  => {
       this.patients = patientsData
      });


  }

  ngOnDestroy(){
    this.reportsSub.unsubscribe();
    this.usersSub.unsubscribe();
    this.patientsSub.unsubscribe();

  }


  onDeleteClick(id: string, patientId: string){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(ConfirmModalComponent, dialogConfig)
    .afterClosed().subscribe(result => {
      if(result)this.reportsService.deleteReport(id, patientId);
     });
  }

  searchById(elements, id) {
    let el = elements.filter(c => c.id == id);
    return el[0].firstName + ' ' + el[0].lastName;
  }

}
