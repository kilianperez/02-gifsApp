import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  // con este inyectable el servicio esta de forma global, si no queremos que asi sea lo tenemos que importar en el correspondiente modulo
  providedIn: 'root',
})
export class GifsService {
  // api de https://developers.giphy.com/
  private apiKey: string = 'KbTxm2B0Dp7cATeK7Hf2KVRi8kWo79g3';

  // lo iniciamos de forma privada y por eso le añadimos el guión bajo
  private _historial: string[] = [];

  // TODO: Cambiar el any por su tipo 
  public resultados: any[] = []

  get historial() {
    // [...]creamos un nuevo array
    return [...this._historial];
  }
  constructor(private http : HttpClient){}
  buscarGifs(query: string = '') {
    query = query.trim().toLocaleLowerCase();

    // hacer que sean unicos los valores que se añadan al array
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      // evitar que se añadan mas de 10 elementos en el array
      this._historial = this._historial.splice(0, 10);
    }
    // console.log(this._historial);

    /*
    // llamada a la api con js
    fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=KbTxm2B0Dp7cATeK7Hf2KVRi8kWo79g3&q=dragon ball z&limit=10'
    ).then((resp) => {
      resp.json().then((data) => console.log(data));
    });

    // tambien puede ser con un Fetch with async/await añadiendo a esta funcion buscarGisfs en async y con lo siguiente
    */
    /*
    const resp = await fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=KbTxm2B0Dp7cATeK7Hf2KVRi8kWo79g3&q=dragon ball z&limit=10'
    )
    const data = await resp.json();
    console.log(data);
    */
    this.http.get(
      `https://api.giphy.com/v1/gifs/search?api_key=KbTxm2B0Dp7cATeK7Hf2KVRi8kWo79g3&q=${query}&limit=10`
    ).subscribe((resp: any) =>{
      console.log(resp.data);
      this.resultados = resp.data
    });
  }
}
