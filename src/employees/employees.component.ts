import template from './employees.component.html';
import { EmployeeService, Employee } from './../shared/employee.service';

export const EmployeesComponent = {
  template,
  controller: class EmployeesComponent {
    query: string;
    selectedEmployee: Employee;
    employees: Employee[];

    constructor(employeeService: EmployeeService) {
      this.query = '';
      this.selectedEmployee = null;
      employeeService.getAll().then(employees => this.employees = employees);
    }

    setSelectedEmployee(employee) {
      this.selectedEmployee = employee;
    }
  }
};
