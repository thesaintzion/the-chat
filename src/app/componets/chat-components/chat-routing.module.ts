import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatHomeComponent } from './chat-home/chat-home.component';
import { ChatLayoutComponent } from '../_layouts/chat-layout/chat-layout.component';


const routes: Routes = [
  {path: '', component: ChatLayoutComponent, children: [
    {path: '', component: ChatHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
