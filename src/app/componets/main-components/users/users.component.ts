import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd,ActivatedRoute, } from '@angular/router';
import { filter } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { SharedService } from 'src/app/services/shared.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedDialogComponent } from '../../_dialog/shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
url;
users = [];
users1 = [];
  constructor(private activatedRoute: ActivatedRoute, private router: Router, 
    public apiService: ApiService, public sharedService: SharedService, private dialog: MatDialog) { }

// FOLLOW USER
follow(userId){
  this.unFollow();
}

unFollow(): void {
  let message = 'You want to un-follow this user?'
  const  dialogRef = this.dialog.open(SharedDialogComponent, {  
     width: '300px',
     data:{message: message},
  });

  dialogRef.afterClosed().subscribe(result => {
   if(result) {
    console.log(result);
    this.sharedService.openSnackBar('Unfollowed', 'Ok', 3000, 'bg-success');
    // localStorage.removeItem('XXX_CHAT_PLUS');
// this.router.navigate(['/auth/login']);
    // setTimeout( ()=>{

    // }, 3000);
  }
 });
 }

    // GET USERS
  getUsers(){
    this.apiService.getUsers().subscribe(
      res => {
        console.log('Got users', res);
        this.users = res.users;
      
        this.users1 = this.users.filter(user1 => {
            this.apiService.LOGGED_IN_USER.id != user1.id
   
        })
        
        console.log(this.users1, this.apiService.LOGGED_IN_USER.id);
        

       
      },
      err =>{
        console.log('Error getting users', err);
      }
    )
  }


  ngOnInit() {
    this.getUsers();
    this.apiService.loggedInUserProfile();
    console.log(this.router.url);
    this.activatedRoute.params.subscribe( params =>{
console.log(params);
    });
    // this.activatedRoute.queryParams.subscribe( params =>{

    //   // if(params.user){
    //   //   console.log(params.user);
    //   // }else{
    //   //   console.log('Take Em Back now');
    //   // }
    // });

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0));  
  }

}
