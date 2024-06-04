import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listadoNoticias: any[] = [];
  loading = false;
  constructor(private _noticiaService: NoticiaService) { }

  buscarNoticias(parametrosSeleccionados: any) {
    this.loading = true;
    this._noticiaService.buscarNoticias(parametrosSeleccionados).subscribe(data => {
      this.listadoNoticias = data.articles;
      this.loading = false;
    }, error => {
      console.error(error);
      this.loading = false;
    });
  }

}
