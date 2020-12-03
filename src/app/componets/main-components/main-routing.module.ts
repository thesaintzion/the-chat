import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../_layouts/main-layout/main-layout.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: 'users', component: UsersComponent},
    {path: 'friends', component: UsersComponent},
    {path: 'profile/:userId', component: ProfileComponent},
    {path: 'email-test', component: EmailComponent},

    // {path: '', redirectTo: '/users', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
