import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // el ViewChild es como el docmuent.querySelecto, busca una refencia local que tenga #

  // non-null assertion operator se asegura que el objeto no es nulo

  // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {
    // buscar(termino: string) {
    // console.log(termino);
    // console.log(this.txtBuscar);
    const valor = this.txtBuscar.nativeElement.value;
    console.log(valor);

    // vaciar el valor del Input como en js pero mejor con el @viewChild
    // document.querySelector('input').value = '';
    this.txtBuscar.nativeElement.value = '';
  }
}
