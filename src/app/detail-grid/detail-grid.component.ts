import DataSource from 'devextreme/data/data_source';
import { AfterViewInit, Component, Input } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { AppService } from '../app.service';
import CustomStore from 'devextreme/data/custom_store';

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css'],
  providers: [AppService],
})
export class DetailGridComponent {
  @Input() orderId!: number;

  detailDataSource: DataSource;

  constructor(service: AppService) {
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
