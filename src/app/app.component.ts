import { Component } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService],
})
export class AppComponent {
  store: any;

  constructor() {
    let serviceUrl = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';
    this.store = createStore({
      key: 'OrderID',
      loadUrl: serviceUrl + '/Orders',
      onBeforeSend: (method, ajaxOptions) => {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
}
