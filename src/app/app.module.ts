import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetDataFromUrlComponent } from './get-data-from-url/get-data-from-url.component';
import { ComponentCommunicationComponent } from './component-communication/component-communication.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/parent/child/child.component';
import { SiblingComponent } from './component-communication/sibling/sibling.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDataFromUrlComponent,
    ComponentCommunicationComponent,
    ParentComponent,
    ChildComponent,
    SiblingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
