import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  loading = false;
  mailForm;
  submited = false;

  constructor(private formBuilder: FormBuilder, private sharedService: SharedService, private apiService: ApiService) {
    this.mailForm = this.formBuilder.group({
      to: ['', [Validators.required]],
      body: ['', [Validators.required]],
    })
   }


  // FORM SUBMIT
  onFormSubmit(){
    this.submited = true;
    let mail = {
    to: this.mailForm.value.to,
    body: this.mailForm.value.body,
    }
console.log(`Good Job TO: ${mail.to}, BODY: ${mail.body}`)
    
if(this.mailForm.invalid){
  this.sharedService.openSnackBar('Please fill in all fields', 'ok', 90000, 'bg-danger');
}else{
  this.loading = true;
  this.apiService.sendMail(mail).subscribe(
    res =>{
      console.log(res);
      setTimeout(() =>{
        this.loading = false;
        this.sharedService.openSnackBar(`Ok!!`, 'ok', 9000, 'bg-success');
      }, 2000);
    },
    err => {
      console.log(err);
      setTimeout(() =>{
        this.loading = false;
        this.sharedService.openSnackBar(`Oops..!!`, 'ok', 9000, 'bg-danger');
      }, 2000);
    })
}  
}

  ngOnInit() {
  }

}
