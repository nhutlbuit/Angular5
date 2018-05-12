import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from '../services/login.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLoggedIn: boolean;

  constructor(private loginService: LoginService, private router: Router){ 
    
  }

  Logout() {
    this.loginService.SetLogin(false);
    alert("Logged out");
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.isLoggedIn = this.loginService.IsLogged();
    if (this.isLoggedIn == null) {
      this.isLoggedIn = false;
    }
  }

  CheckStatusLogin() {
   /// alert(this.isLoggedIn);
    this.isLoggedIn = this.loginService.IsLogged();
    return this.isLoggedIn;
  }

}