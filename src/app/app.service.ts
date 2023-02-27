import { Injectable } from '@angular/core';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
}
let employees: Employee[] = [
  { id: 1, firstName: 'Nancy', lastName: 'Davolio' },
  { id: 2, firstName: 'Andrew', lastName: 'Fuller' },
  { id: 3, firstName: 'Janet', lastName: 'Leverling' },
  { id: 4, firstName: 'Steven', lastName: 'Buchanan' },
  { id: 5, firstName: 'Michael', lastName: 'Suyama' },
];

@Injectable()
export class AppService {
  getEmployees(): Employee[] {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(products);
    //   }, 1000);
    // });
    return employees;
  }

  // insertProduct(product: Product): any {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     products.push(product);
  //     resolve(products);
  //   }, 1000);
  // });
  // }
}
