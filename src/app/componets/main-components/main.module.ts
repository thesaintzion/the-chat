import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainLayoutComponent } from '../_layouts/main-layout/main-layout.component';
import { MaterialModule } from 'src/app/shared/materials/material';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
  ]
})
export class MainModule { }
