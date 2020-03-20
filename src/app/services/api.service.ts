import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
// USER Obj
USER = {
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
  country_id:  null,
  createdAt: null,
  updatedAt:  null,
  }

  CURRENT_CHAT_USER = {
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
    country_id:  null,
    createdAt: null,
    updatedAt:  null,
    }

  
  

// userUrl = 'http://localhost:3600/api/no-whatsapp/v1';
userUrl = 'https://saint-api.herokuapp.com/api/no-whatsapp/v1';


  constructor(private http: HttpClient) { }

  currentChatUser(id){
    this.CURRENT_CHAT_USER.id = id;
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
  


}


