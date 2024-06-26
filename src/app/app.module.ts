import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import localeEsCo from '@angular/common/locales/es-CO'
import {registerLocaleData} from '@angular/common'

registerLocaleData(localeEsCo)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'en-US'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
