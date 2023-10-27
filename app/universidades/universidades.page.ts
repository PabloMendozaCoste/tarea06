import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-universidades',
  templateUrl: './universidades.page.html',
  styleUrls: ['./universidades.page.scss'],
})
export class UniversidadesPage {
  countryName: string = ''; // Variable para almacenar el nombre del país
  universities: any[] = []; // Variable para almacenar las universidades

  constructor(private http: HttpClient) {}

  buscarUniversidades() {
    const url = `http://universities.hipolabs.com/search?country=${this.countryName}`;

    this.http.get(url).subscribe((data: any) => {
      this.universities = data;
    });
  }
}
