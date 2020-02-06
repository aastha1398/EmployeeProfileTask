import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterEmployeeComponent } from './register/register-employee/register-employee.component';


const routes: Routes = [
  {
    path:'create',
    loadChildren: () => import('./register/register.module').then(mod=>mod.RegisterModule)
  },
  {
    path:'edit/:id',
    loadChildren: () => import('./register/register.module').then(mod=>mod.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
