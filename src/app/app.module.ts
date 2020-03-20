import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedDialogComponent } from './componets/_dialog/shared-dialog/shared-dialog.component';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './services/api.service';
import { SharedService } from './services/shared.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor.service';






@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SharedDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
  ],
 providers: [ApiService, SharedService, {
   provide: HTTP_INTERCEPTORS,
   useClass: HttpInterceptorService,
   multi: true
 }],
 entryComponents:[SharedDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
