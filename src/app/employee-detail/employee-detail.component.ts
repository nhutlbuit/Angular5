import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {EmployeeDetailService} from './employee-detail.service'

@Component({
    selector: 'employee-detail',
    templateUrl: './employee-detail.component.html',
    providers:[EmployeeDetailService]
})

export class EmployeeDetailComponent  {
}