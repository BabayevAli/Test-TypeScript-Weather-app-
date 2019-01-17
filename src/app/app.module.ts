import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesInfoComponent } from './cities-info/cities-info.component';
import { DaysInfoComponent } from './days-info/days-info.component';
import { FullInfoComponent } from './full-info/full-info.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatButtonModule, MatCheckboxModule, MatListModule, MatIconModule, MatFormFieldModule, MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    CitiesInfoComponent,
    DaysInfoComponent,
    FullInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
