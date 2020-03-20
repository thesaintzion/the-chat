import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/helpers/passwordMatch';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading = false;
  loginForm;
  submited = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private sharedService: SharedService, private formBuider: FormBuilder, private apiService: ApiService ) { 
      this.loginForm = this.formBuider.group({
        email: ['', [Validators.required, Validators.maxLength(30)]],
        password:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      }
      )
    }
    get f() { return this.loginForm.controls; }


    // REGISTRATIO
login(){
  this.submited = true;
  console.log(this.loginForm);
  let user = {
  firstname: this.loginForm.value.firstname,
  lastname: this.loginForm.value.lastname,
  email: this.loginForm.value.email,
  password: this.loginForm.value.password,
  
  }
  console.log( JSON.stringify(user));
  // debugger
  if(this.loginForm.invalid){
    this.sharedService.openSnackBar('Please fill in the required fields', 'ok', 9000, 'bg-danger');
  }else{
    this.loading = true;
      this.apiService.login(user).subscribe(
      res => {
        console.log('LogedIn', res);
        setTimeout( () =>{
          this.router.navigate(['/chat']);
          this.sharedService.openSnackBar(`Welcome Back, ${res.user.firstname}`, 'Ok', 3000, 'bg-success');
          this.loading = false;
          localStorage.setItem('XXX_CHAT_PLUS', res.token);
          
          }, 2000);
      },
      err => {
        console.log('Error on Login', err);
        setTimeout( () =>{
          this.loading = false;
          if(err.error.massage !== ''){
            this.sharedService.openSnackBar(err.error.massage, `Ok`, 90000, 'bg-danger');
          }else{
            this.sharedService.openSnackBar('Oops!! An Error Occurred.. Are you offline??', 'ok', 90000, 'bg-danger');
          }
          }, 2000);
       
      });
    



  
    // this.apiService.addUser(user).subscribe(
    // res => {
    //   console.log('res', res);
    //   setTimeout( () =>{
    //     this.loading = false;
    //     this.sharedService.openSnackBar('Registerted', 'ok', 9000, 'bg-success');
    //     }, 2000);
    // },
  
    // err => {
    //   console.log('err', err);
    //   setTimeout( () =>{
    //     this.loading = false;
    //     if(err.error.status == 400){
    //       this.sharedService.openSnackBar(err.error.statusMsg, 'ok', 9000, 'bg-danger');
    //     }else{
    //       this.sharedService.openSnackBar('Oops!! An Error Occurred.. Please try again after sometime', 'ok', 9000, 'gb-danger');
    //     }
    //     }, 2000);
     
    // });
  }
  }


  ngOnInit() {
    if(this.sharedService.loggedId()){
      this.router.navigate(['/chat']);
    }
  }

}
