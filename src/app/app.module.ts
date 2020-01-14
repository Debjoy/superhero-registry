import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { HeroInfoComponent } from './hero-info/hero-info.component';
import { NoResultComponent } from './no-result/no-result.component';
import { HttpClientModule} from '@angular/common/http'
import { NgCircleProgressModule } from 'ng-circle-progress';

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
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      backgroundPadding:5,
      radius: 47,
      space:-10,
      maxPercent:100,
      unitsFontSize:'17',
      unitsColor: "#b4b4b4",
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      outerStrokeColor: "#5294e2",
      innerStrokeColor: "#090d10",
      titleColor:"#dddddd",
      titleFontSize:'27',
      titleFontWeight:'700',
      showSubtitle:false,
      startFromZero:false,
      animationDuration: 300
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
