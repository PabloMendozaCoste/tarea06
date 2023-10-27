import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edad',
  templateUrl: 'edad.page.html',
  styleUrls: ['edad.page.scss']
})
export class EdadPage {
  nombre: string="";
  edad: number=0;
  estado: string="";
  imagenUrl: string="";

  constructor(private http: HttpClient) {}

  predecirEdad() {
    const apiUrl = `https://api.agify.io/?name=${this.nombre}`;
    this.http.get(apiUrl).subscribe((data: any) => {
      this.edad = data.age;
      this.estado = this.calcularEstado(this.edad);
      this.obtenerImagen(this.estado);
    });
  }

  calcularEstado(edad: number): string {
    if (edad < 18) {
      return 'joven';
    } else if (edad < 65) {
      return 'adulto';
    } else {
      return 'anciano';
    }
  }

  obtenerImagen(estado: string) {
    const imagenes: { [key: string]: string } = {
      joven: 'assets/joven.avif',
      adulto: 'assets/adulto.png',
      anciano: 'assets/anciano.avif'
    };
    this.imagenUrl = imagenes[estado];
  }
  
}
