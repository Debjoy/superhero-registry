import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { NoResultComponent } from './no-result/no-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HeroInfoComponent,
    NoResultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
