import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  // retornamos el historial creado del array para tener acceso desde el componente
  get historial() {
    return this.gifsService.historial;
  }

  // importamos los servicios de gifs service que nos dara el array con los valores que hemos introduciodo en el historia
  constructor( private gifsService: GifsService) {}
  buscar(arg:string){
    console.log(arg);
    this.gifsService.buscarGifs(arg)
  }
}
