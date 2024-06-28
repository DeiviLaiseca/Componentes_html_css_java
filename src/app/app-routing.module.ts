import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'responsivo',
    loadChildren: () => import('./responsivo/responsivo.module').then( m => m.ResponsivoModule)
  },
  {
    path: '**',
    redirectTo: 'responsivo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
