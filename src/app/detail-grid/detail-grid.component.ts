import { AfterViewInit, Component, Input } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { AppService } from '../app.service';

@Component({
  selector: 'app-detail-grid',
  templateUrl: './detail-grid.component.html',
  styleUrls: ['./detail-grid.component.css'],
  providers: [AppService],
})
export class DetailGridComponent implements AfterViewInit {
  @Input() orderId!: number;

  detailDataSource: any;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.orderId);
    let serviceUrl = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';
    this.detailDataSource = createStore({
      loadUrl: serviceUrl + '/OrderDetails',
      loadParams: { orderId: this.orderId },
      onBeforeSend(method: any, ajaxOptions: any) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
}
