import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public location: Location, public apiService: ApiService, private router: Router, public sharedService: SharedService) { }



  ngOnInit() {
    this.apiService.loggedInUserProfile();
  }

}
