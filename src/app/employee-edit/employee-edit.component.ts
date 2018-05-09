import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee/employee.service'

@Component({
    selector: 'employee-edit',
    templateUrl: './employee-edit.component.html'
})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public employeeService: EmployeeService
    ) {

    }

    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this._id = params['id'];
            console.log(this._id);
        });

        this.employeeService.GetEmployeeDetail(this._id).subscribe((data: any) => {
            this.employee = data;
            console.log("this.employee" + this.employee);
        });
    }

    goToEmployee(){
        this.router.navigate(['/employee']);
    }

    SaveForm(){
        this.employeeService.UpdateEmployee(this._id, this.employee).subscribe(response=>{
            if(response){
                alert("Save success");
                this.router.navigate(['/employee']);
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}