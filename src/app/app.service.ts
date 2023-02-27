import { Injectable } from '@angular/core';

export class Order {
  OrderID: number;
  CustomerID: string;
  EmployeeID: number;
  OrderDate: string;
  RequiredDate: string;
  ShippedDate: string;
  ShipVia: number;
  Freight: number;
  ShipName: string;
  ShipAddress: string;
  ShipCity: string;
  ShipRegion: any;
  ShipPostalCode: string;
  ShipCountry: string;
  Customer: any;
  Employee: any;
  Shipper: any;
}

let orders: Order[] = [
  {
    OrderID: 10248,
    CustomerID: 'VINET',
    EmployeeID: 5,
    OrderDate: '2018-07-04T00:00:00',
    RequiredDate: '2018-08-01T00:00:00',
    ShippedDate: '2018-07-16T00:00:00',
    ShipVia: 3,
    Freight: 32.38,
    ShipName: 'Vins et alcools Chevalier',
    ShipAddress: "59 rue de l'Abbaye",
    ShipCity: 'Reims',
    ShipRegion: null,
    ShipPostalCode: '51100',
    ShipCountry: 'France',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10249,
    CustomerID: 'TOMSP',
    EmployeeID: 6,
    OrderDate: '2018-07-05T00:00:00',
    RequiredDate: '2018-08-16T00:00:00',
    ShippedDate: '2018-07-10T00:00:00',
    ShipVia: 1,
    Freight: 11.61,
    ShipName: 'Toms Spezialitäten',
    ShipAddress: 'Luisenstr. 48',
    ShipCity: 'Münster',
    ShipRegion: null,
    ShipPostalCode: '44087',
    ShipCountry: 'Germany',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10250,
    CustomerID: 'HANAR',
    EmployeeID: 4,
    OrderDate: '2018-07-08T00:00:00',
    RequiredDate: '2018-08-05T00:00:00',
    ShippedDate: '2018-07-12T00:00:00',
    ShipVia: 2,
    Freight: 65.83,
    ShipName: 'Hanari Carnes',
    ShipAddress: 'Rua do Paço, 67',
    ShipCity: 'Rio de Janeiro',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10251,
    CustomerID: 'VICTE',
    EmployeeID: 3,
    OrderDate: '2018-07-08T00:00:00',
    RequiredDate: '2018-08-05T00:00:00',
    ShippedDate: '2018-07-15T00:00:00',
    ShipVia: 1,
    Freight: 41.34,
    ShipName: 'Victuailles en stock',
    ShipAddress: '2, rue du Commerce',
    ShipCity: 'Lyon',
    ShipRegion: null,
    ShipPostalCode: '69004',
    ShipCountry: 'France',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10252,
    CustomerID: 'SUPRD',
    EmployeeID: 4,
    OrderDate: '2018-07-09T00:00:00',
    RequiredDate: '2018-08-06T00:00:00',
    ShippedDate: '2018-07-11T00:00:00',
    ShipVia: 2,
    Freight: 51.3,
    ShipName: 'Suprêmes délices',
    ShipAddress: 'Boulevard Tirou, 255',
    ShipCity: 'Charleroi',
    ShipRegion: null,
    ShipPostalCode: 'B-6000',
    ShipCountry: 'Belgium',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10253,
    CustomerID: 'HANAR',
    EmployeeID: 3,
    OrderDate: '2018-07-10T00:00:00',
    RequiredDate: '2018-07-24T00:00:00',
    ShippedDate: '2018-07-16T00:00:00',
    ShipVia: 2,
    Freight: 58.17,
    ShipName: 'Hanari Carnes',
    ShipAddress: 'Rua do Paço, 67',
    ShipCity: 'Rio de Janeiro',
    ShipRegion: 'RJ',
    ShipPostalCode: '05454-876',
    ShipCountry: 'Brazil',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10254,
    CustomerID: 'CHOPS',
    EmployeeID: 5,
    OrderDate: '2018-07-11T00:00:00',
    RequiredDate: '2018-08-08T00:00:00',
    ShippedDate: '2018-07-23T00:00:00',
    ShipVia: 2,
    Freight: 22.98,
    ShipName: 'Chop-suey Chinese',
    ShipAddress: 'Hauptstr. 31',
    ShipCity: 'Bern',
    ShipRegion: null,
    ShipPostalCode: '3012',
    ShipCountry: 'Switzerland',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10255,
    CustomerID: 'RICSU',
    EmployeeID: 9,
    OrderDate: '2018-07-12T00:00:00',
    RequiredDate: '2018-08-09T00:00:00',
    ShippedDate: '2018-07-15T00:00:00',
    ShipVia: 3,
    Freight: 148.33,
    ShipName: 'Richter Supermarkt',
    ShipAddress: 'Starenweg 5',
    ShipCity: 'Genève',
    ShipRegion: null,
    ShipPostalCode: '1204',
    ShipCountry: 'Switzerland',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10256,
    CustomerID: 'WELLI',
    EmployeeID: 3,
    OrderDate: '2018-07-15T00:00:00',
    RequiredDate: '2018-08-12T00:00:00',
    ShippedDate: '2018-07-17T00:00:00',
    ShipVia: 2,
    Freight: 13.97,
    ShipName: 'Wellington Importadora',
    ShipAddress: 'Rua do Mercado, 12',
    ShipCity: 'Resende',
    ShipRegion: 'SP',
    ShipPostalCode: '08737-363',
    ShipCountry: 'Brazil',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
  {
    OrderID: 10257,
    CustomerID: 'HILAA',
    EmployeeID: 4,
    OrderDate: '2018-07-16T00:00:00',
    RequiredDate: '2018-08-13T00:00:00',
    ShippedDate: '2018-07-22T00:00:00',
    ShipVia: 3,
    Freight: 81.91,
    ShipName: 'HILARION-Abastos',
    ShipAddress: 'Carrera 22 con Ave. Carlos Soublette #8-35',
    ShipCity: 'San Cristóbal',
    ShipRegion: 'Táchira',
    ShipPostalCode: '5022',
    ShipCountry: 'Venezuela',
    Customer: null,
    Employee: null,
    Shipper: null,
  },
];

let orderDetails: any = {
  10248: {
    data: [
      {
        Product: "Jack's New England Clam Chowder",
        Price: 7.7,
        Quantity: 10,
        Sum: 77.0,
      },
      {
        Product: 'Louisiana Fiery Hot Pepper Sauce',
        Price: 16.8,
        Quantity: 15,
        Sum: 252.0,
      },
      {
        Product: 'Manjimup Dried Apples',
        Price: 42.4,
        Quantity: 35,
        Sum: 1484.0,
      },
    ],
    totalCount: 3,
  },
  10249: {
    data: [
      {
        Product: 'Manjimup Dried Apples',
        Price: 42.4,
        Quantity: 40,
        Sum: 1696.0,
      },
      { Product: 'Tofu', Price: 18.6, Quantity: 9, Sum: 167.4 },
    ],
    totalCount: 2,
  },
  10250: {
    data: [
      {
        Product: "Jack's New England Clam Chowder",
        Price: 7.7,
        Quantity: 10,
        Sum: 77.0,
      },
      {
        Product: 'Louisiana Fiery Hot Pepper Sauce',
        Price: 16.8,
        Quantity: 15,
        Sum: 252.0,
      },
      {
        Product: 'Manjimup Dried Apples',
        Price: 42.4,
        Quantity: 35,
        Sum: 1484.0,
      },
    ],
    totalCount: 3,
  },
  10251: {
    data: [
      {
        Product: "Jack's New England Clam Chowder",
        Price: 7.7,
        Quantity: 10,
        Sum: 77.0,
      },
      {
        Product: 'Louisiana Fiery Hot Pepper Sauce',
        Price: 16.8,
        Quantity: 15,
        Sum: 252.0,
      },
      {
        Product: 'Manjimup Dried Apples',
        Price: 42.4,
        Quantity: 35,
        Sum: 1484.0,
      },
    ],
    totalCount: 3,
  },
  10252: {
    data: [
      { Product: 'Camembert Pierrot', Price: 27.2, Quantity: 40, Sum: 1088.0 },
      { Product: 'Geitost', Price: 2.0, Quantity: 25, Sum: 50.0 },
      {
        Product: "Sir Rodney's Marmalade",
        Price: 64.8,
        Quantity: 40,
        Sum: 2592.0,
      },
    ],
    totalCount: 3,
  },
  10253: {
    data: [
      { Product: 'Chartreuse verte', Price: 14.4, Quantity: 42, Sum: 604.8 },
      { Product: 'Gorgonzola Telino', Price: 10.0, Quantity: 20, Sum: 200.0 },
      { Product: 'Maxilaku', Price: 16.0, Quantity: 40, Sum: 640.0 },
    ],
    totalCount: 3,
  },
  10254: {
    data: [
      { Product: 'Chartreuse verte', Price: 14.4, Quantity: 42, Sum: 604.8 },
      { Product: 'Gorgonzola Telino', Price: 10.0, Quantity: 20, Sum: 200.0 },
      { Product: 'Maxilaku', Price: 16.0, Quantity: 40, Sum: 640.0 },
    ],
    totalCount: 3,
  },
  10255: {
    data: [
      { Product: 'Chang', Price: 15.2, Quantity: 20, Sum: 304.0 },
      { Product: 'Inlagd Sill', Price: 15.2, Quantity: 25, Sum: 380.0 },
      { Product: 'Pavlova', Price: 13.9, Quantity: 35, Sum: 486.5 },
      {
        Product: 'Raclette Courdavault',
        Price: 44.0,
        Quantity: 30,
        Sum: 1320.0,
      },
    ],
    totalCount: 4,
  },
  10256: {
    data: [
      {
        Product: 'Original Frankfurter grüne Soße',
        Price: 10.4,
        Quantity: 12,
        Sum: 124.8,
      },
      { Product: 'Perth Pasties', Price: 26.2, Quantity: 15, Sum: 393.0 },
    ],
    totalCount: 2,
  },
  10257: {
    data: [
      { Product: 'Chartreuse verte', Price: 14.4, Quantity: 6, Sum: 86.4 },
      {
        Product: 'Original Frankfurter grüne Soße',
        Price: 10.4,
        Quantity: 15,
        Sum: 156.0,
      },
      { Product: 'Schoggi Schokolade', Price: 35.1, Quantity: 25, Sum: 877.5 },
    ],
    totalCount: 3,
  },
};

@Injectable()
export class AppService {
  getOrders() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(orders);
      }, 1000);
    });
  }
  updateOrder(key: any, val: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let orderIndex = orders.findIndex((e) => e.OrderID === key);
        console.log(orders);
        Object.assign(orders[orderIndex], val);
        resolve(orders);
      }, 1000);
    });
  }

  removeOrder(key: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        orders = orders.filter((item) => item.OrderID !== key);
        resolve(orders);
      }, 1000);
    });
  }

  insertOrder(val: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        orders.push(val);
        resolve(orders);
      }, 1000);
    });
  }

  getDetails(id: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(orderDetails[id]);
      }, 1000);
    });
  }

  updateDetails(key: any, val: any, id: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let listProducts = orderDetails[id].data;
        let productIndex = listProducts.findIndex(
          (e: any) => e.Product == key.Product
        );
        Object.assign(orderDetails[id].data[productIndex], val);
        resolve(orderDetails);
      }, 1000);
    });
  }

  removeDetails(key: any, id: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        orderDetails[id].data = orderDetails[id].data.filter(
          (item: any) => item.Product !== key.Product
        );
        orderDetails[id].totalCount -= 1;
        resolve(orderDetails);
      }, 1000);
    });
  }

  insertDetails(val: any, id: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        orderDetails[id].data.push(val);
        orderDetails[id].totalCount += 1;
        resolve(orderDetails);
      }, 1000);
    });
  }
}
