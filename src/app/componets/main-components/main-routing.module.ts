import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../_layouts/main-layout/main-layout.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

  // <mat-toolbar color="primary">
  //           <button type="button" aria-label="Toggle sidenav" mat-icon-button (click)="drawer.toggle()" *ngIf="isHandset$ | async">
  //       <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
  //     </button>
  //           <span>TheChats</span>
  //       </mat-toolbar>
const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: 'users', component: UsersComponent},
    {path: 'priends', component: UsersComponent},
    {path: 'profile/:userId', component: ProfileComponent},
    {path: '', redirectTo: '/users', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
