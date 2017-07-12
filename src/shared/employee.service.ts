export interface Employee {
  firstName: string;
  lastName: string;
  age: number;
  birthdate: Date;
}

export class EmployeeService {
  http: angular.IHttpService;

  constructor($http) {
    this.http = $http;
  }

  getAll() {
    return this.http.get('https://swapi.co/api/people')
      .then(response => (response.data as any).results);
  }
}
