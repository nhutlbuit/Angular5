import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LoginComponent } from './login.component';
import { HighlightDirective } from '../highlight/highlight.directive';
import { EmployeeComponent } from '../employee/employee.component';
import { HttpModule } from '@angular/http'
import { HomeComponent } from '../home/home.component'
import { EmployeeService } from '../employee/employee.service';

@NgModule({
  declarations: [
    LoginComponent,
    HighlightDirective,
    EmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, HttpModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
