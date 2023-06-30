import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiSuiteModule } from '@apollon/ui-suite';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeComponent } from './components/tree-component/tree.component';
import { TableComponent } from './components/table-component/table.component';
import { DetailsComponent } from './components/details-component/details.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    TableComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    UiSuiteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
