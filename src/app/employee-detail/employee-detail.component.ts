import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee/employee.service'

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['../app/app.component.css']
})

export class EmployeeDetailComponent implements OnInit, OnDestroy {
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}