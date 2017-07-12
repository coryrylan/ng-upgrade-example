import * as angular from 'angular';
import * as ngRoute from 'angular-route';

import { routes } from './app.ng1.routes';
import { AboutComponent } from './about/about.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeService } from './shared/employee.service';

export const Ng1AppModule = angular.module('Ng1AppModule', [ngRoute])
  .config($routeProvider => routes($routeProvider))
  .component('appAbout', AboutComponent)
  .component('appEmployees', EmployeesComponent)
  .component('appEmployeeList', EmployeeListComponent)
  .service('employeeService', EmployeeService)
