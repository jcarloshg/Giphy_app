import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar(keyword: string) {
    const value = this.txtBuscar.nativeElement.value;
    console.log(`[value] -> `, value);
    this.txtBuscar.nativeElement.value = '';
  }

  // buscar(event: KeyboardEvent) {
  //   console.log('====================================');
  //   console.log(event.key);
  //   console.log('====================================');
  // }
}
