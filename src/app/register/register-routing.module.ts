import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';


const routes: Routes = [
  {
    path:'',component:RegisterEmployeeComponent
  },
  {
    path:'edit/:id',component:RegisterEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
