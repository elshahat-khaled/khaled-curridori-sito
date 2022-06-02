import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InputcompComponent } from './inputcomp/inputcomp.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    InputcompComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
