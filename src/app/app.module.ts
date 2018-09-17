import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullCalendarDemoComponent } from './full-calendar-demo/full-calendar-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    FullCalendarDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
