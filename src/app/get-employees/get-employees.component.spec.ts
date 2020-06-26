import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeesComponent } from './get-employees.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';


describe('GetEmployeesComponent', () => {
  let component: GetEmployeesComponent;
  let fixture: ComponentFixture<GetEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeesComponent, EditEmployeeComponent ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
