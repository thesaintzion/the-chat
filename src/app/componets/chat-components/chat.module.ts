import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatLayoutComponent } from '../_layouts/chat-layout/chat-layout.component';
import { MaterialModule } from 'src/app/shared/materials/material';

import { QuillModule } from 'ngx-quill';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ChatHomeComponent,
    ChatLayoutComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
     SharedModule,
    QuillModule.forRoot(),

  ]
})
export class ChatModule { }
