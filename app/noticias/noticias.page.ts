import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  noticias: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const apiUrl = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=b98fcc958dd146398f70bcfbe41071d3';
    this.obtenerNoticias(apiUrl);
  }

  obtenerNoticias(url: string) {
    this.http.get(url).subscribe((data: any) => {
      this.noticias = data;
    });
  }

  visitarNoticia(enlace: string) {
    window.open(enlace, '_blank');
  }
}
