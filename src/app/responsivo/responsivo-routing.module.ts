import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduccionComponent } from './pages/introduccion/introduccion.component';
import { MediaComponent } from './pages/media/media.component';
import { PracticasComponent } from './pages/practicas/practicas.component';
import { UtilizacionComponent } from './pages/utilizacion/utilizacion.component';
import { ImagenesComponent } from './pages/imagenes/imagenes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'introduccion', component:IntroduccionComponent },
      { path: 'media', component:MediaComponent },
      { path: 'practicas', component:PracticasComponent },
      { path: 'utilizacion', component:UtilizacionComponent },
      { path: 'imagenes', component:ImagenesComponent },
      { path: '**', redirectTo: 'introduccion' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsivoRoutingModule { }
