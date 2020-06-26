import { Component, OnInit, NgZone } from '@angular/core';
import { ConfigService } from '../config.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})

export class EditEmployeeComponent implements OnInit {
  EmployeeList: any = [];
  updateEmployeeForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public empService: ConfigService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.queryParamMap.get('id');
    this.empService.GetEmployee(id).subscribe((data) => {
      this.updateEmployeeForm = this.fb.group({
        employee_name: [data.employee_name],
        employee_age: [data.employee_age],
        employee_salary: [data.employee_salary],
        profile_image: [data.profile_image]
      })
    })
  }

  updateForm(){
    this.updateEmployeeForm = this.fb.group({
      employee_name: [''],
      employee_age: [''],
      employee_salary: [''],
      profile_image: ['']
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.queryParamMap.get('id');
    console.log(id);
    this.empService.UpdateEmployee(id, this.updateEmployeeForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/view-employees'))
    })
  }

}