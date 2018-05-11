import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private employeeApiUrl: string = "http://5aea8aeb531a580014142894.mockapi.io/api/employees/";
    constructor(private _http: Http) { 
        
    }

    GetListEmployee(): Observable<any[]> {
        return this._http.get(this.employeeApiUrl).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for GetListEmployee function:"+error);
        });
    }

    GetEmployeeDetail(id: number): Observable<any> {
        return this._http.get(this.employeeApiUrl + id).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for GetEmployeeDetail function:"+error);
        });
    }

    UpdateEmployee(id: number,data: any): Observable<any> {
        return this._http.put(this.employeeApiUrl+id, data).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for UpdateEmployee function:"+error);
        });
    }
    
    AddEmployee(data: any): Observable<any> {
        return this._http.post(this.employeeApiUrl, data).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for AddEmployee function:"+error);
        });
    }

    DeleteEmployee(id: number): Observable<any> {
        return this._http.delete(this.employeeApiUrl+id).map((response: Response) => {
            return response.json();
        },error=>{
            console.error("error log for DeleteEmployee function:"+error);
        });
    }

    SearchEmployee(keyword: string): Observable<any> {
        return this._http.get(this.employeeApiUrl+"?search="+keyword).map((response: Response) => {
            console.info("SearchEmployee: "+response.json());
            return response.json();
           
        },error=>{
            console.error("error log for SearchEmployee function:"+error);
        });
    }



}