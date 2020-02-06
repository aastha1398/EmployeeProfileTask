import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeListModule } from './employee-list/employee-list.module';
import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent    
],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EmployeeListModule,
    HttpClientModule,
    MatCommonModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule
    
    
],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
