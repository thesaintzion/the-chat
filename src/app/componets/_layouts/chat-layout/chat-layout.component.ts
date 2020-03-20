import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SharedDialogComponent } from '../../_dialog/shared-dialog/shared-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';


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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
     private breakpointObserver: BreakpointObserver, 
     private apiService: ApiService, 
     private router: Router,
     private dialog: MatDialog,
     private sharedService: SharedService,
    
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
    
  }

  search(){
this.searching = true;
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

logOutDialog(): void {
  let message = 'Are you sure you want to logout?'
  const  dialogRef = this.dialog.open(SharedDialogComponent, {  
     width: '300px',
     data:{message: message},
  });

  dialogRef.afterClosed().subscribe(result => {
   if(result) {
    console.log(result);
    this.sharedService.openSnackBar('Logging Out.. Bye!!', '', 3000, '');
    setTimeout( ()=>{
localStorage.removeItem('XXX_CHAT_PLUS');
this.router.navigate(['/auth/login']);
    }, 3000);
  }
 });
 }




// GET USER PROFILE
profile(){
  this.apiService.profile({uid: '1234567'}).subscribe(
    res => {
console.log('Profile Responce', res);
this.apiService.USER.firstname = res.user.firstname;
this.apiService.USER.lastname = res.user.lastname;
this.apiService.USER.email = res.user.email;
console.log(this.apiService.USER);
    }, 
    err => {
console.log('Err on profile', err);
// localStorage.removeItem('XXX_CHAT_PLUS');
// this.router.navigate(['/auth/login']);
    })
}





  quillConfig: any = {
    "modules": {
      "toolbar": false
  },
    toolbar: false
  }

  ngOnInit(){
    this.profile();
    setTimeout( () =>{
this.bgLoading  = false;
    }, 2000);



    
   
  }

  

}
