import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { EmployeeComponent } from '../employee/employee.component'
import { LoginComponent } from '../login/login.component'
import { NotFoundComponent } from '../notfound/notfound.component'
import { MainPageComponent } from '../mainpage/mainpage.component'
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component'
import { EmployeeOverviewComponent } from '../employee-overview/employee-overview.component';
import { EmployeeProjectsComponent } from '../employee-projects/employee-project.component';
import { EmployeeEditComponent } from '../employee-edit/employee-edit.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';
import { TypeScriptComponent } from '../typescript/typescript.component';
import { CheckLoginGuard } from '../guards/check-login.component';
import { CheckSaveFormGuard } from '../guards/check-save-form.component';

const routing: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent, canActivate: [CheckLoginGuard]},
    { path: 'employee-edit/:id', component: EmployeeEditComponent/*, canDeactivate: [CheckSaveFormGuard]*/},
    { path: 'employee-delete/:id', component: EmployeeDetailComponent},
    { path: 'employee-add', component: EmployeeAddComponent/*, canDeactivate: [CheckSaveFormGuard]*/},
    { path: 'employee-detail/:id', component: EmployeeDetailComponent, 
        children: [
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },
    { path: 'typescript', component: TypeScriptComponent, canActivate: [CheckLoginGuard] },
    { path: '**', component: NotFoundComponent }]

export const appRoutes = RouterModule.forRoot(routing/*, { enableTracing: true }*/);