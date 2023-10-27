import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-genero',
  templateUrl: 'genero.page.html',
  styleUrls: ['genero.page.scss'],
})
export class GeneroPage {
  nombre: string = '';
  generoPredicho: string = '';
  generoClase: string = '';

  constructor(private http: HttpClient) {}

  predecirGenero() {
    const apiUrl = `https://api.genderize.io/?name=${this.nombre}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      if (data.gender === 'male') {
        this.generoPredicho = 'masculino';
        this.generoClase = 'masculino';
      } else if (data.gender === 'female') {
        this.generoPredicho = 'femenino';
        this.generoClase = 'femenino';
      } else {
        this.generoPredicho = 'desconocido';
        this.generoClase = '';
      }
    });
  }
}