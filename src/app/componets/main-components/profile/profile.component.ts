import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
loggedIn = true;
  constructor(private router: Router, 
    public sharedService: SharedService, 
    public apiService: ApiService, 
    public location: Location,
    public activatedRoute: ActivatedRoute
    ) { }


  getParams(){
    this.activatedRoute.params.subscribe( params =>{
      console.log('the full params 2', params.userId);
      if(params.userId){

        this.apiService.getUserProfile(params.userId);
        this.sharedService.openSnackBar(`${params.userId}`, 'Ok', 3000, 'bg-success');
      }else{
        this.sharedService.openSnackBar('400: Invalid request', 'Ok', 3000, 'bg-danger');
      }
    });
  }

  ngOnInit() {
this.apiService.loggedInUserProfile();
this.getParams();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0));  
  }


 
}
