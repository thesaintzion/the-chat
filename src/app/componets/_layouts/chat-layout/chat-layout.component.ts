import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedDialogComponent } from '../../_dialog/shared-dialog/shared-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';

export interface User {
  id: string;
  name: string;
  status:string;
  newMsg:string;
  unreadMsg: boolean
}

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent  implements OnInit{
bgLoading = true;
showSearchForm = false;
users = [];
searching = false;
searchTyping = false;
searchForm;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
     private breakpointObserver: BreakpointObserver, 
     public apiService: ApiService, 
     public sharedService: SharedService,
     private formBuilder: FormBuilder
     ) {
    let newUser = [
      {
      id: '122334',
      name: 'Saint Zion',
      status: 'Online',
      newMsg: 'Hi dear, Hope your doing good',
      unreadMsg: false
    },
    {
      id: '124567',
      name: 'Chizoba Patience',
      status: '2020 Feb 2020',
      newMsg: 'Hi dear, Hope your doing good',
      unreadMsg: false
    },
    {
      id: '1245444',
      name: 'Victor Army',
      status: '2015 Feb 2020',
      newMsg: 'Hi dear, Hope your doing great',
      unreadMsg: true
    },
    {
      id: '1245444',
      name: 'Samuel DevUps',
      status: '2015 Feb 2020',
      newMsg: '',
      unreadMsg: false

    },
    {
      id: '1245444',
      name: 'Emmanuel Long',
      status: 'Online',
      newMsg: 'I\'m even trying to see whats going to happen',
      unreadMsg: true
    },

  ];

  this.users = newUser;


this.searchForm = this.formBuilder.group({
  searchInput: ['']
})
    
  }

  search(){
this.searching = true;
  }

  searchType(){
    this.searchTyping = true;
    let searchInput = this.searchForm.value.searchInput.toLowerCase();

    const filterData = this.users.filter(users => {
      console.log(users.name.toLowerCase().includes(searchInput), searchInput);
      return users.name.toLowerCase().includes(searchInput);
    });

    console.log('log', filterData)


  
    // if(this.users.toUppercase().indexOf(searchInput))
    // const result: any = this.users.filter((user) => {
    //   if(user.name.toUpperCase().indexOf(searchInput) > -1){
    //     console.log(user);

    //   }
    // });
    
    
  }

  // close menu in phone size
closeMen(sidenav){
  this.breakpointObserver
      .observe(['(max-width: 767px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          return  sidenav.toggle();
        } else {
          return null;
        }
      });
}




  quillConfig: any = {
    toolbar: false
  }

  ngOnInit(){
    this.apiService.loggedInUserProfile();
    setTimeout( () =>{
this.bgLoading  = false;
    }, 2000);

   
  }

  

}
