import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  key = 'c6932a18b4a542bc90002c58bdb21801';
  constructor(private http: HttpClient) { }

  buscarNoticias(parametros: any): Observable<any> {

    const URL = `https://newsapi.org/v2/top-headlines?country=${parametros.pais}&category=${parametros.categorias}&apiKey=${this.key}`;
    return this.http.get(URL);
  }
}
