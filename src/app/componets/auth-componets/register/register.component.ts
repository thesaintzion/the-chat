import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/helpers/passwordMatch';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loading = false;
  registerForm;
  submited = false;
  fadeOutInClass;
  constructor( private router: Router, 
               private activatedRoute: ActivatedRoute, 
               private apiService: ApiService,
               private sharedService: SharedService,
               private formBuider: FormBuilder ) { 
      this.registerForm = this.formBuider.group({
        firstname: ['',  [Validators.required, Validators.maxLength(30)]],
        lastname:  ['', [Validators.required, Validators.maxLength(30)]],
        email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
        password:  ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
        conf_password:  ['', Validators.required]
      },
      {validator: passwordMatch('password', 'conf_password')}
      )
    }
    get f() { return this.registerForm.controls; }

// REGISTRATIO
register(){
  this.submited = true; 
  let userTrim = {
  firstname: this.registerForm.value.firstname.replace(/\s+/g,' ').trim(),
  lastname: this.registerForm.value.lastname.replace(/\s+/g,' ').trim(),
  email: this.registerForm.value.email.replace(/\s+/g,' ').trim(),
  password: this.registerForm.value.password.replace(/\s+/g,' ').trim(),
  }
  let trimedFirstname = userTrim.firstname.replace(/\s+/g,'_').trim();
  let trimedLastname = userTrim.lastname.replace(/\s+/g,'_').trim();
  let username = `${trimedFirstname}_${trimedLastname}`;

  let user = {
    firstname: userTrim.firstname,
    lastname: userTrim.lastname,
    email: userTrim.email,
    password: userTrim.password,
    username: username.toLowerCase()
  }
  // console.log('User Name',username, 'User', user);
  if(this.registerForm.invalid){
    this.sharedService.openSnackBar('Please fill in the required fields', 'ok', 9000, 'bg-danger');
  }else{
    this.loading = true;
    this.apiService.register(user).subscribe(
    res => {
      // console.log('Registered', res);
      setTimeout( () =>{
        this.loading = false;
        localStorage.setItem('XXX_CHAT_PLUS', res.token);
        this.sharedService.openSnackBar('Register successful!!', 'Ok', 3000, 'bg-success');
        this.router.navigate(['/chat']);
        }, 2000);
    },
    err => {
      console.log('Error on Reg', err.error);
      setTimeout( () =>{
        this.loading = false;
        if(err.error && err.error.massage){
          this.sharedService.openSnackBar(err.error.massage, `Ok`, 90000, 'bg-danger');
        }else{
          this.sharedService.openSnackBar('Oops!! An Error Occurred.. Are you offline??', 'ok', 90000, 'bg-danger');
        }
        }, 2000);
     
    });
  }
  }
  ngOnInit() {
 
  }

}
