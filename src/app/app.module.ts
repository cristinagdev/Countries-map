import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CountryViewComponent } from './components/country-view/country-view.component';
import { MonedaPipe } from './pipes/moneda.pipe';
import { LenguaPipe } from './pipes/lengua.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryViewComponent,
    MonedaPipe,
    LenguaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgmCoreModule.forRoot(environment.googleMaps)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
