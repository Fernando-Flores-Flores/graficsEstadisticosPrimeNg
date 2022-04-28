import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { PruebasComponent } from './pruebas/pruebas.component';
import { RippleModule } from 'primeng/ripple';
import { BarComponent } from './bar/bar.component';
import {ChartModule} from 'primeng/chart';
import { DonaComponent } from './grafic/dona/dona.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { PdfComponent } from './docs/pdf/pdf.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    BarComponent,
    DonaComponent,
    HomeComponent,
    NopageComponent,
    PdfComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    ChartModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* npm install primeng --save
npm install primeicons --save
npm install chart.js --save */
