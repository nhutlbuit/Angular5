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


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    EmployeeComponent,
    HomeComponent,
    NotFoundComponent,
    MainPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule, HttpModule, appRoutes
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
