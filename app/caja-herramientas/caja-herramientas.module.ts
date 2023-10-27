import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CajaHerramientasPageRoutingModule } from './caja-herramientas-routing.module';

import { CajaHerramientasPage } from './caja-herramientas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CajaHerramientasPageRoutingModule
  ],
  declarations: [CajaHerramientasPage]
})
export class CajaHerramientasPageModule {}
