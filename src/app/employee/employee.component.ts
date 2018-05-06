import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {EmployeeService} from './employee.service'

@Component({
    selector: 'employee-list',
    templateUrl: './employee.component.html',
    providers:[EmployeeService],
    styleUrls: ['../login/login.component.css']
})

export class EmployeeComponent implements OnInit  {
    public employees: any[];

    constructor(private employeeService:EmployeeService) {

    }

    ngOnInit(){
      this.employeeService.GetListEmployee().subscribe((response:any[])=>{
        this.employeeService.GetListEmployee().subscribe
        this.employees=response;
        console.log(response);
      });
    }
}