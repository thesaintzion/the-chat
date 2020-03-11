import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';


const routes: Routes = [
 {path: '404',  component: PageNotFoundComponent}, 
 { path: 'chat', loadChildren: './componets/chat-components/chat.module#ChatModule'},
 { path: 'auth', loadChildren: './componets/auth-componets/auth.module#AuthModule'},
 { path: '', loadChildren: './componets/main-components/main.module#MainModule'},
 { path: 'login',  redirectTo: '/auth/login', pathMatch: 'full'}, 
 { path: 'register',  redirectTo: '/auth/register', pathMatch: 'full'}, 
  { path: '**',  redirectTo: '/404', pathMatch: 'full'}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
