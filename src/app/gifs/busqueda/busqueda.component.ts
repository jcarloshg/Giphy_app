import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    this.txtBuscar.nativeElement.value = '';

    this.gifsService.buscar(valor);
  }

  // buscar(event: KeyboardEvent) {
  //   console.log('====================================');
  //   console.log(event.key);
  //   console.log('====================================');
  // }
}
