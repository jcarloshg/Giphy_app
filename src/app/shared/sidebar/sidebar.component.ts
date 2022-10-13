import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) { }

  get histoial() {
    return this.gifsService.histoial;
  }


  buscar(query: string) {
    this.gifsService.buscar(query);
  }




}
