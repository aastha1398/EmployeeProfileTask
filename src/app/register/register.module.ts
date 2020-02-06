import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';

@NgModule({
  declarations: [RegisterEmployeeComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    MatCommonModule,
    MatTableModule
    
  ],
  exports:
  [
    RegisterEmployeeComponent
  ]
})
export class RegisterModule { }
