import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Caja de Herramientas', url: './caja-herramientas', icon: 'file-tray' },
    { title: 'Genero Predicion', url: './genero', icon: 'body' },
    { title: 'Predicion Edad', url: './edad', icon: 'calendar' },
    { title: 'Universidades', url: './universidades', icon: 'library' },
    { title: 'Clima', url: './clima', icon: 'rainy' },
    { title: 'Noticias', url: './noticias', icon: 'newspaper' },
    { title: 'Acerca De', url: './acerca-de', icon: 'person' },
  ];
 
  constructor() {}
}
