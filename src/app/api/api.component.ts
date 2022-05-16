import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  
  users: any;
  list: any;
  details: any;
  viewPatientDetails: boolean = false;
  searchValue: any;
  constructor(private apiServiceService: ApiserviceService) {}
  ngOnInit() {
    this.getPatientsList();
  }

  getPatientsList() {
    this.apiServiceService.getPatientDetails().subscribe((data) => {
      this.users = data;
    });
  }

  getPatientId(patientId: any) {
    this.apiServiceService
      .getPatientUniqueDetails(patientId)
      .subscribe((data) => {
        this.viewPatientDetails=true;
        this.details = data;
      });
  }

  closePopup() {
    this.viewPatientDetails = false;
  }
}
