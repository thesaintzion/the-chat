import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './materials/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    // ScrollUpComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
    
  ]
})
export class SharedModule { }
