import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HotelsListComponent } from './Components/hotels-list/hotels-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
