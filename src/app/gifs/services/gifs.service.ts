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
  buscarGifs(query: string){
    this._historial.unshift(query)
    console.log(this._historial);
    
  }
}
