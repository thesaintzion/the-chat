import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators'
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
constructor(private router: Router, private title: Title,  private activatedRoute: ActivatedRoute,){

}


// dynamicTitle(){
//   const appTitle = this.title.getTitle();
//   this.router
//     .events.pipe(
//       filter(event => event instanceof NavigationEnd),
//       map(() => {
//         const child = this.activatedRoute.firstChild;

//         if (child.snapshot.data['title']) {
//           return child.snapshot.data['title'];
//         }
//         return appTitle;
//       })
//     ).subscribe((ttl: string) => {
//       this.title.setTitle(ttl);
//     });
// }




  ngOnInit(){
        this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(
      () => window.scrollTo(0, 0)); 
  }
}
