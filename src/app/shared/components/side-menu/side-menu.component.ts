import { Component } from '@angular/core';

interface MenuItem {
  item: string;
  route: string;
};

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public responsiveMenu: MenuItem[] = [
    { item: '•	Introducción al Diseño Responsivo', route: './responsivo/introduccion' },
    { item: '•  Utilización de Medidas Flexibles', route: './responsivo/utilizacion' },
    { item: '•  Media Queries en CSS', route: './responsivo/media' },
    { item: '•  Imágenes Responsivas', route: './responsivo/imagenes' },
    { item: '•  Prácticas Recomendadas para Diseño Responsivo', route: './responsivo/practicas' }
  ]

}
