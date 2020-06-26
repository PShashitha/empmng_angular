import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';



@Component({
  selector: 'app-employee-list',
  templateUrl: './get-employees.component.html',
  styleUrls: ['./get-employees.component.scss']
})
export class GetEmployeesComponent implements OnInit {

  EmployeeList: any = [];


  ngOnInit() {
    this.loadEmployees();
  }

  constructor(
    public empService: ConfigService
  ){ }

   // Issues list
   loadEmployees() {
    return this.empService.GetEmployees().subscribe((data: {}) => {
      this.EmployeeList = data;
      
      
    })
  }

    // Delete issue
    deleteEmployee(data){
      console.log(this.EmployeeList);
      var index = index = this.EmployeeList.data.map(x => {return x.employee_name}).indexOf(data.issue_name);
       return this.empService.DeleteEmployee(data.id).subscribe(res => {
        this.EmployeeList.data.splice(index, 1)
         console.log('Employee deleted!')
       })
    }
   
}