// Need an assistance on this task. All detail dataGrid components is re-render after updating OrderID.
// I think the problem in Change Detection.

import { Component, ChangeDetectionStrategy } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  orderId: any;
  store: any;
  dataSource: DataSource;
  detailDataSource: DataSource;
  controlDataSource: any;

  changeValue(value: any) {
    console.log(value);
    this.orderId = value.key;
  }

  constructor(service: AppService) {
    this.dataSource = new DataSource({
      store: new CustomStore({
        key: 'OrderID',
        load: () => {
          return service.getOrders();
        },
        insert: (val) => {
          return service.insertOrder(val);
        },
        update: (key, val) => {
          return service.updateOrder(key, val);
        },
        remove: (key: number): any => {
          return service.removeOrder(key);
        },
      }),
    });
    this.detailDataSource = new DataSource({
      store: new CustomStore({
        load: () => {
          console.log(this.orderId);
          return service.getDetails(this.orderId);
        },
        insert: (val) => {
          return service.insertDetails(val, this.orderId);
        },
        update: (key, val) => {
          return service.updateDetails(key, val, this.orderId);
        },
        remove: (key): any => {
          return service.removeDetails(key, this.orderId);
        },
      }),
    });
  }
}
