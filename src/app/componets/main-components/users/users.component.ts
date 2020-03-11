import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
url;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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
  }

}
