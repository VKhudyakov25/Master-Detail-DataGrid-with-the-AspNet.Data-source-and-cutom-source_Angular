import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DetailGridComponent } from './detail-grid/detail-grid.component';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent, DetailGridComponent],
  imports: [BrowserModule, DxDataGridModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
