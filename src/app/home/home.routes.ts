import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { EmployeeComponent } from '../employee/employee.component'
import { LoginComponent } from '../login/login.component'
import { NotFoundComponent } from '../notfound/notfound.component'
import {MainPageComponent} from '../mainpage/mainpage.component'
import {AppComponent} from '../app/app.component'

const routing: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'app', component: AppComponent },
    { path: '**', component: NotFoundComponent }]

export const appRoutes = RouterModule.forRoot(routing);