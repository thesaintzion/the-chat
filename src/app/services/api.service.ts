import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
// USER Obj
LOGGED_IN_USER = {
  id: null,
  firstname: null,
  lastname: null,
  email: null,
  user_type_id:  null,
  phone_number:  null,
  gender_id:  null,
  address:  null,
  status: null,
  activated:  null,
  profile_photo_url: 'user-female.svg',
  friends: [],
  friend_requests: [],
  country_id:  null,
  createdAt: null,
  updatedAt:  null,
  }

 

  USER = {
    id: null,
    firstname: null,
    lastname: null,
    username: null,
    email: null,
    phone_number:  null,
    gender_id:  null,
    address:  null,
    status: null,
    activated:  null,
    profile_photo_url: 'user-female.svg',
    friends: [],
    friend_requests: [],
    country_id:  null,
    createdAt: null,
    updatedAt:  null,
    }

  
    
  

userUrl = 'http://localhost:3600/api/no-whatsapp/v1';
// userUrl = 'https://saint-api.herokuapp.com/api/no-whatsapp/v1';


  constructor(private http: HttpClient, private router: Router) { }



  //SEND MAIL
  
sendMail(mail: any){
  return this.http.post<any>(`${this.userUrl}/user/send-mail`, mail);
}
  currentChatUser(id){
    this.USER.id = id;
  }
  // AUTHENTICATION
  register(user: any){
  return this.http.post<any>(`${this.userUrl}/user`, user);
  }

  login(user: any){
    return this.http.post<any>(`${this.userUrl}/user/login`, user);
  }

  profile(uid: any){
    return this.http.get<any>(`${this.userUrl}/user/${uid}`);
  }

  getUsers(){
    return this.http.get<any>(`${this.userUrl}/users`);
  }

     // GET USER PROFILE
loggedInUserProfile(){
  let uid = 'LOGGED_IN_USER_PROFILE';
  this.profile(uid).subscribe(
    res => {
console.log('Profile Responce', res);
  this.LOGGED_IN_USER.id = res.user._id;
  this.LOGGED_IN_USER.firstname = res.user.firstname;
  this.LOGGED_IN_USER.lastname = res.user.lastname;
  this.LOGGED_IN_USER.email = res.user.email;
  this.LOGGED_IN_USER.status = res.user.status,
  this.LOGGED_IN_USER.activated = res.user.activated,
  this.LOGGED_IN_USER.createdAt = res.user.createdAt,
  this.LOGGED_IN_USER.updatedAt = res.user.updatedAt
console.log(this.LOGGED_IN_USER);
    }, 
    err => {
console.log('Err on profile', err);
localStorage.removeItem('XXX_CHAT_PLUS');
this.router.navigate(['/auth/login']);
// this.sharedService.openSnackBar('Login', '', 3000, '')
    })
}

getUserProfile(uid){
  
  this.profile(uid).subscribe(
    res => {
  console.log('Profile Responce', res);
  this.USER.id = res.user._id;
  this.USER.firstname = res.user.firstname;
  this.USER.lastname = res.user.lastname; 
  this.USER.username = res.user.username;
  this.USER.email = res.user.email;
  this.USER.status = res.user.status,
  this.USER.activated = res.user.activated,
  this.USER.createdAt = res.user.createdAt,
  this.USER.updatedAt = res.user.updatedAt
  console.log('the othe userrrrr', this.USER);
    }, 
    err => {
console.log('Err on profile', err);
// localStorage.removeItem('XXX_CHAT_PLUS');
// this.router.navigate(['/auth/login']);
});

}
  


}


