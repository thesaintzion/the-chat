import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from '../_layouts/auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    RegisterComponent,
     LoginComponent
     
    ],
     
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
