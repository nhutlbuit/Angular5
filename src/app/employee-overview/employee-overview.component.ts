import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Routes, ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeService } from '../employee/employee.service'

@Component({
    selector: 'employee-overview',
    templateUrl: './employee-overview.component.html'
})

export class EmployeeOverviewComponent implements OnDestroy, OnInit{
    public parentRouterId: number;
    public sub: Subscription;
    constructor(private router:Router, private activatedRoute:ActivatedRoute){

    }

    ngOnInit(){
        this.sub = this.activatedRoute.parent.params.subscribe(params =>{
           this.parentRouterId = params['id'];
           console.log("child get id"+this.parentRouterId);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }
    
}