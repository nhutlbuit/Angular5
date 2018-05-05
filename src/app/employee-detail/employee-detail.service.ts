import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

///must be injectable to declare Http
@Injectable()
export class EmployeeDetailService {
}