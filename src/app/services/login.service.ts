import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    public _isLoggedIn:boolean;
    constructor(private _http: Http) { 
        
    }

    IsLogged():boolean{
        return this._isLoggedIn;
    }

    SetLogin(isLoggedIn:boolean){
        return this._isLoggedIn=isLoggedIn;
    }
   


}