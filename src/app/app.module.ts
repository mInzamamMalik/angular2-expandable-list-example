import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExpandableListModule } from 'angular2-expandable-list';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpandableListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
