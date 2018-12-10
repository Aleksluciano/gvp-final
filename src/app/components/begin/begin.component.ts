import { Component, OnInit } from '@angular/core';
import { BeginService } from '../begin/begin.service';
import { Begin } from './begin.model';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { UsersService } from '../users/users.service';
import { PatientsService } from '../patients/patients.service';
import { ReportsService } from '../reports/reports.service';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css'],
  animations: [
    trigger("fade", [
      transition("void => *", [style({ opacity: 0 }), animate(1000)])
    ])
  ]
})
export class BeginComponent implements OnInit {

  objectsSub: Subscription;

  totalObjects: Begin = {
    countUser: 0,
    countPatient: 0,
    countReport: 0
  }

  isLoaded: boolean = false;

  constructor(
    private beginService: BeginService,
    private usersService: UsersService,
    private patientsService: PatientsService,
    private reportsService: ReportsService,
    ) { }

  ngOnInit() {
    this.totalObjects = this.beginService.TotalObjects;


      this.totalObjects.countUser = this.usersService.Users.length;
      this.totalObjects.countPatient = this.patientsService.Patients.length;
      this.totalObjects.countReport = this.reportsService.Reports.length;

    if (this.totalObjects.countPatient <= 0 || this.totalObjects.countUser <= 0
      || this.totalObjects.countReport <= 0) {
      this.beginService.countObjectsServer();
    }else this.isLoaded = true;

    this.objectsSub = this.beginService
      .getCountListener()
      .subscribe(objectsData => {
        this.totalObjects = objectsData;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    this.objectsSub.unsubscribe();
  }

  }


