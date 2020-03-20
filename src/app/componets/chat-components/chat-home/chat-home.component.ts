import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.scss']
})

export class ChatHomeComponent implements OnInit {

  msgLoading = true;


  constructor(public sharedService: SharedService, public apiService: ApiService) { }

  ngOnInit() {
    setTimeout(() => {
      this.msgLoading = false;
    }, 3000);
this.sharedService.MSG_LOADING = true;

setTimeout(()=>{
  this.sharedService.MSG_LOADING = false;
}, 5000);
    
  }



  onContentChanged(){
    
  }
}
