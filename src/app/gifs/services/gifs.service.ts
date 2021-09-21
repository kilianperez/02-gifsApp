import { Injectable } from '@angular/core';

@Injectable({
  // con este inyectable el servicio esta de forma global, si no queremos que asi sea lo tenemos que importar en el correspondiente modulo 
  providedIn: 'root'
})
export class GifsService {
  // lo iniciamos de forma privada y por eso le añadimos el guión bajo  
  private _historial: string[] =[]

  get historial(){


    // [...]creamos un nuevo array 
    return [...this._historial]
  }
  buscarGifs(query: string = ''){
    
    query = query.trim().toLocaleLowerCase()

    // hacer que sean unicos los valores que se añadan al array
    if (!this._historial.includes(query)) {
      this._historial.unshift(query)
      
    }

    // evitar que se añadan mas de 10 elementos en el array 
    this._historial = this._historial.splice(0, 10);


    console.log(this._historial);
    
  }
}
