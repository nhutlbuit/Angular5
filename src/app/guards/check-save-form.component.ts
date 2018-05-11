import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router'
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployeeDetailComponent> {

  canDeactivate(component:EmployeeDetailComponent) {
    alert("You can\ 't leave this page without saving data")
    return false;
  }

}
