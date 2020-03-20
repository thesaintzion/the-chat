import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  implements CanActivate {

  constructor( private router: Router, private sharedService: SharedService) { }

 
  canActivate(): boolean {
    if(this.sharedService.loggedId()) {
      return true;
    } else {
      this.sharedService.openSnackBar('Please login', '', 4000, 'bg-danger')
      this.router.navigate(['/login']);
      return false;
    }
    }
}
