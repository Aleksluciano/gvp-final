import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { Location } from "@angular/common";

import { Subject } from 'rxjs';
import { map } from "rxjs/operators";

import { Report } from './report.model';
import { FlashMessagesService } from 'angular2-flash-messages';


const BACKEND_URL = environment.apiUrl + "/reports/";

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private reports: Report[] = [];
  private report: Report;
  private reportsUpdated = new Subject<Report[]>();
  private oneReportUpdated = new Subject<Report>();
  private warnFlashMessage = new Subject<void>();


  constructor(
    private _flashMessagesService: FlashMessagesService,
    private http: HttpClient, private router: Router,
    private location: Location
    ) { }

  createReport(report: Report) {

    this.http
      .post<{ message: string; report: any }>(
        BACKEND_URL,
        report
      ).pipe(
        map(responseData =>{

          if (responseData.report.typeReport == 'patient')
          responseData.report.code = 'P' + responseData.report.code;
          else responseData.report.code = 'A' + responseData.report.code;
          
          return<Report>{
          id: responseData.report._id,
          typeReport: responseData.report.typeReport,
          patientId: responseData.report.patientId,
          patientName: responseData.report.patientName,
          assitantId: responseData.report.assistantId,
          visitDate: responseData.report.visitDate,
          gvpId1: responseData.report.gvpId1,
          gvpName1: responseData.report.gvpName1,
          gvpId2: responseData.report.gvpId2,
          gvpName2: responseData.report.gvpName2,
          description: responseData.report.description,
          code: responseData.report.code
          }
        }
          )

      )
      .subscribe((newReport) => {

         this.reports.unshift(newReport);
         this._flashMessagesService.show('Novo relatório adicionado', {
          cssClass: 'alert-success', timeout: 4000
        });
        this.reportsUpdated.next([...this.reports]);
        this.router.navigate(['/reports']);

      });
  }

  getReportsServer() {

    this.http
      .get<{ message: string; reports: any[]}>(
        BACKEND_URL
      )
      .pipe(
        map(responseData => {
          return {
            reports: responseData.reports.map(report =>{

              if (report.typeReport == 'patient')
              report.code = 'P' + report.code;
              else report.code = 'A' + report.code;

              return <Report>{
                id: report._id,
                typeReport: report.typeReport,
                patientId: report.patientId,
                patientName: report.patientName,
                assitantId: report.assistantId,
                visitDate: report.visitDate,
                gvpId1: report.gvpId1,
                gvpName1: report.gvpName1,
                gvpId2: report.gvpId2,
                gvpName2: report.gvpName2,
                description: report.description,
                code: report.code
              }
            }
            )
          }
        })
      )
      .subscribe(responseData => {
        this.reports = responseData.reports;


        this.reportsUpdated.next([...this.reports]);
      });
  }


  getOneReportServer(id: string) {

    this.http
      .get<{ message: string; report: any}>(
        BACKEND_URL + id
      )
      .pipe(
        map(responseData => {
          return <Report>{
            id: responseData.report._id,
            typeReport: responseData.report.typeReport,
            patientId: responseData.report.patientId,
            patientName: responseData.report.patientName,
            assitantId: responseData.report.assistantId,
            visitDate: responseData.report.visitDate,
            gvpId1: responseData.report.gvpId1,
            gvpName1: responseData.report.gvpName1,
            gvpId2: responseData.report.gvpId2,
            gvpName2: responseData.report.gvpName2,
            description: responseData.report.description,
            code: responseData.report.code
              }
          }
        )
      )
      .subscribe(responseData => {
        this.report = responseData;
          this.oneReportUpdated.next(this.report);
      });
  }

  get Reports(){
    return this.reports || [];
  }

  getReportsUpdateListener() {
    return this.reportsUpdated.asObservable();
  }

  getOneReportUpdateListener() {
    return this.oneReportUpdated.asObservable();
  }


  deleteReport(id: string, patientId: string) {
    return this.http.delete(BACKEND_URL + id + '?patientId=' + patientId).subscribe(() =>{
      this.reports.forEach((u, index) => {
        if(u.id == id) this.reports.splice(index, 1);
      });
      this._flashMessagesService.show('relatório removido', {
        cssClass: 'alert-success', timeout: 4000
      });
      this.reportsUpdated.next([...this.reports]);
      //this.warnFlashMessage.next();
    })
  }

  getReport(id: string) {
    let report = this.reports.filter(u => u.id == id);
    return report[0];
  }

  updateReport(id: string, report: Report) {
  this.http
  .put(BACKEND_URL + id, report)
  .subscribe(responseData => {
    this.reports = this.reports.map(u => {
       if(u.id == id) u = report;
       return u;
    });
  this._flashMessagesService.show("Relatório atualizado", {
        cssClass: "alert-success",
        timeout: 4000
      });
    //this.location.back();
    this.router.navigate(['reports']);
    // this.warnFlashMessage.next();
  });
}

warnFlashMessageListener(){
  return this.warnFlashMessage.asObservable();
}

}
