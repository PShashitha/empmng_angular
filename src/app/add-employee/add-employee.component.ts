import { Component, OnInit, NgZone } from '@angular/core';
import { ConfigService } from '../config.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})

export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  EmployeeArr: any = [];

  ngOnInit() {
    this.addEmployee()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public empService: ConfigService
  ){ }

  // employee_name : string;
	// employee_salary: string;
	// employee_age: string;
	// profile_image: string;
  addEmployee() {
    this.employeeForm = this.fb.group({
      employee_name: [''],
      employee_age: [''],
      employee_salary: [''],
      profile_image: ['']
    })
  }

  submitForm() {
    this.empService.AddEmployee(this.employeeForm.value).subscribe(res => {
      console.log('Issue added!')
      this.ngZone.run(() => this.router.navigateByUrl('/employee-list'))
    });
  }

}