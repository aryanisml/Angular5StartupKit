import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/SharedModule';
import { IndexComponent } from './home/IndexComponent';
import { AppRoutingModule } from './app.routing';
import { VehiclesModule } from './vehicles/VehiclesModule';


@NgModule({
  declarations: [
    AppComponent, IndexComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    VehiclesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
