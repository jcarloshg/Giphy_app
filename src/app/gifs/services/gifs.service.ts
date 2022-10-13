import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string = 'wZuYau81fVzLJ9JraNUfqNUCK7kplYU2';
  private _historial: string[] = [];
  public response: Gif[] = [];

  constructor(private httpClient: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

  }

  get histoial() {
    return [...this._historial];
  }

  buscar(quey: string) {
    const wordToSearch = quey.trim().toLowerCase();
    if (wordToSearch == '') return;
    // this._historial = Array.from(new Set(this._historial));
    if (this._historial.includes(wordToSearch) == false) {
      this._historial.unshift(wordToSearch);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.httpClient.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=wZuYau81fVzLJ9JraNUfqNUCK7kplYU2&q=${quey}&limit=100`)
      .subscribe((res: SearchGifsResponse) => {
        // console.log(res.data);
        this.response = res.data;
      })

  }
}
