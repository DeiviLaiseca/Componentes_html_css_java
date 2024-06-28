import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsivoRoutingModule } from './responsivo-routing.module';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { UtilizacionComponent } from './pages/utilizacion/utilizacion.component';
import { MediaComponent } from './pages/media/media.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';
import { PracticasComponent } from './pages/practicas/practicas.component';


@NgModule({
  declarations: [
    IntroduccionComponent,
    UtilizacionComponent,
    MediaComponent,
    ImagenesComponent,
    PracticasComponent
  ],
  imports: [
    CommonModule,
    ResponsivoRoutingModule
  ]
})
export class ResponsivoModule { }
