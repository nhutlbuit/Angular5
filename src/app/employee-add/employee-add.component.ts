import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee/employee.service'

@Component({
    selector: 'employee-add',
    templateUrl: './employee-add.component.html'
})

export class EmployeeAddComponent implements OnInit {
    public _id: number;
    public employee: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }

    ngOnInit() {
        this.employee = {};
    }

    goToEmployee(){
        this.router.navigate(['employee']);
    }

    SaveForm(){
        this.employeeService.AddEmployee(this.employee).subscribe(response=>{
            if(response){
                alert("add success");
                this.router.navigate(['employee']);
            }
        });
    }
}