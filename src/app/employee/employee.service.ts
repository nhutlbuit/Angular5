import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

///must be injectable to declare Http
@Injectable()
export class EmployeeService {
    private employeeApiUrl: string = "http://5aea8aeb531a580014142894.mockapi.io/api/employees/";
    constructor(private _http: Http) { 
        
    }

    GetListEmployee(): Observable<any[]> {
        return this._http.get(this.employeeApiUrl).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for employeeService:"+error);
        });
    }

    GetEmployeeDetail(id: number): Observable<any> {
        return this._http.get(this.employeeApiUrl + id).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for GetEmployeeDetail:"+error);
        });
    }
}