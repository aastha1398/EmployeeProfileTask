import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListEditComponent } from './employee-list-edit/employee-list-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';




@NgModule({
  declarations: [EmployeeListEditComponent, EmployeeDeleteComponent, SearchPipe, SortPipe],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    EmployeeListEditComponent,
    EmployeeDeleteComponent
  ]
})
export class EmployeeListModule { }
