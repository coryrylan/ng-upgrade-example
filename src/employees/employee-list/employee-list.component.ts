import template from './employee-list.component.html';

export const EmployeeListComponent = {
  template,
  bindings: {
    employees: '<',
    select: '&'
  },
  controller: class EmployeeListComponent {
    query: string;
    select: any;

    constructor() {
      this.query = '';
    }

    selectEmployee(employee) {
      this.select({ event: employee });
    }
  }
}
