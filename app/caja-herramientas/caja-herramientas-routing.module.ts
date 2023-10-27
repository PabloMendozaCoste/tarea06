import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CajaHerramientasPage } from './caja-herramientas.page';

const routes: Routes = [
  {
    path: '',
    component: CajaHerramientasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CajaHerramientasPageRoutingModule {}
