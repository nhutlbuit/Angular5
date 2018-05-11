import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) {

  }

  CheckLogin(value: any) {
    if (value.userName == "nhutlbuit" && value.password == "Nhutthintamlinh12!@") {
      this.loginService.SetLogin(true);
      this.router.navigate(['/']);
    } else {
      alert("username or password is not correctly");
    }
  }

}
