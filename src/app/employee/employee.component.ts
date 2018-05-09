import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employee-list',
  templateUrl: './employee.component.html',
  providers: [EmployeeService],
  styleUrls: ['../login/login.component.css']
})

export class EmployeeComponent implements OnInit {
  public employees: any[];
  public pages: number[];
  public currentPage: number;
  public keyword: string;

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.currentPage = param['pageNumber'] || 1;
      console.log("-Page number is:" + this.currentPage + "\n-Filter is: " + param['filter']);
    });

    this.LoadData();

    this.pages = [1, 2, 3, 4, 5];
  }

  Delete(id: number) {
    let confirmResult = confirm("Are you sure to delete employee?");
    if (confirmResult) {
      this.employeeService.DeleteEmployee(id).subscribe(response => {
        if (response) {
          // alert("Delete Ok");
          this.LoadData();
        }
      })
    }
  }

  LoadData() {
    this.employeeService.GetListEmployee().subscribe((response: any[]) => {
      this.employeeService.GetListEmployee().subscribe
      this.employees = response;
      console.log(response);
    });
  }

  Search() {
    this.employeeService.SearchEmployee(this.keyword).subscribe((response: any[]) => {
      this.employeeService.SearchEmployee(this.keyword).subscribe
      this.employees = response;
      console.log(response);
    });
  }

}