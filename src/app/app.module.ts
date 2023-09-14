import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { POSComponentComponent } from './pos-component/pos-component.component';
import { CocinaComponentComponent } from './cocina-component/cocina-component.component';
import { PDEComponentComponent } from './pde-component/pde-component.component';
import { RestauranteComponentComponent } from './restaurante-component/restaurante-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    POSComponentComponent,
    CocinaComponentComponent,
    PDEComponentComponent,
    RestauranteComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
