import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface User  {
  id: string,
  userName: string,
  accountNo: true,
  createdAt: string
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
user: User;
MSG_LOADING = true;

sharedSlug =  this.router.url.split('/')[1];
  goUp(){
      window.scrollTo(0, 0);
  }
  constructor(private router: Router, private dialog: MatDialog, private snackBar: MatSnackBar) { }

  // snackBar message
  openSnackBar(message: string, action: string, duration: number, panelClass: string) {
    this.snackBar.open(message, action, {
      duration,
      panelClass,
    });
  }

  loggedId(){
    return !!localStorage.getItem('XXX_CHAT_PLUS');
  }


  // Edith user 
  editUser(id, userName, accountNo, createdAt){
    this.user = {
      id,
      userName,
      accountNo,
      createdAt
    }
  
  }

 


}
