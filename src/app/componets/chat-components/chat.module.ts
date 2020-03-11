import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatLayoutComponent } from '../_layouts/chat-layout/chat-layout.component';
import { MaterialModule } from 'src/app/shared/materials/material';

@NgModule({
  declarations: [
    ChatHomeComponent,
    ChatLayoutComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    MaterialModule,
  ]
})
export class ChatModule { }
