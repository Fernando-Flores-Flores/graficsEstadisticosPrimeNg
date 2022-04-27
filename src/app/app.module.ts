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
@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    BarComponent,
    DonaComponent,
    HomeComponent,
    NopageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* npm install primeng --save
npm install primeicons --save
npm install chart.js --save */
