import { PruebasComponent } from './pruebas/pruebas.component';
import { BarComponent } from './bar/bar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonaComponent } from './grafic/dona/dona.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { PdfComponent } from './docs/pdf/pdf.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dona',
    component: DonaComponent,
  },
  {
    path: 'bar',
    component: BarComponent,
  },
  {
    path: 'pruebas',
    component: PruebasComponent,
  },
  {
    path: 'pdf',
    component: PdfComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NopageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
