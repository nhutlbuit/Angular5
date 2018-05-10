import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router) {

  }

  CheckLogin(value: any) {
    console.log(value);
    if (value.userName == "admin" && value.password == "admin") {
      this.router.navigate(['/']);
    } else {
      alert("username or password is not correctly");
    }
  }

}
