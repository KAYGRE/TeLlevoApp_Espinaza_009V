import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarviajePageRoutingModule } from './buscarviaje-routing.module';

import { BuscarviajePage } from './buscarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarviajePageRoutingModule
  ],
  declarations: [BuscarviajePage]
})
export class BuscarviajePageModule {}
