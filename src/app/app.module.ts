import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import { MoviesModuleModule } from './movies/movies-module.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MoviesModuleModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
