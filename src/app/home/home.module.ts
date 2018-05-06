import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { LoginComponent } from '../login/login.component';
import { HighlightDirective } from '../highlight/highlight.directive';
import { EmployeeComponent } from '../employee/employee.component';
import { HttpModule } from '@angular/http'
import { appRoutes } from './home.routes'
import { NotFoundComponent } from '../notfound/notfound.component'
import {MainPageComponent} from '../mainpage/mainpage.component'
import {AppComponent} from '../app/app.component'
import {EmployeeDetailComponent} from'../employee-detail/employee-detail.component'
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from '../employee/employee.service';
import { EmployeeOverviewComponent } from '../employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from '../employee-projects/employee-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    EmployeeComponent,
    HomeComponent,
    NotFoundComponent,
    MainPageComponent,
    LoginComponent,
    EmployeeDetailComponent,
    EmployeeOverviewComponent,
    EmployeeProjectsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    CommonModule, 
    HttpModule, 
    HttpClientModule,
    appRoutes
  ],
  providers: [EmployeeService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
