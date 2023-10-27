import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  climaData: any; // Aquí almacenaremos los datos del clima
  temperaturaCelsius: number=0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Hacer la solicitud a la API del clima
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=18.47186&lon=-69.89232&appid=f7d5bb22ff7583ebcde7aba2e1adc383';

    this.http.get(apiUrl).subscribe((data: any) => {
      this.climaData = data;
      this.temperaturaCelsius = data.main.temp - 273.15; // Convierte K a °C
      console.log(data); // Para verificar la respuesta en la consola
    });
  }
}
