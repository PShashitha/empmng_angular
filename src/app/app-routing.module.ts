import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { EditEmployeeComponent } from './edit-employee/edit-employee.component'
import { GetEmployeesComponent } from './get-employees/get-employees.component'


const routes: Routes = [
  { path:'add-employee',component:AddEmployeeComponent },
  { path:'edit-employee',component:EditEmployeeComponent },
  { path:'view-employees',component: GetEmployeesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
