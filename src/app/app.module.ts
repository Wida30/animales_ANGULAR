import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { DiurnoComponent } from './galeria/diurno/diurno.component';

import { NocheComponent } from './galeria/noche/noche.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    DiurnoComponent,
  
    NocheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
