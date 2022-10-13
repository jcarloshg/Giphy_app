import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private url: string = 'http://api.giphy.com/v1/gifs';
  private apiKey: string = 'wZuYau81fVzLJ9JraNUfqNUCK7kplYU2';
  private _historial: string[] = [];
  public response: Gif[] = [];

  constructor(private httpClient: HttpClient) {

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.response = JSON.parse(localStorage.getItem('data')!) || [];
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

    const params: HttpParams = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', quey);

    // this.httpClient.get<SearchGifsResponse>(`${this.url}/search?api_key=${this.apiKey}&q=${quey}&limit=100`)
    this.httpClient.get<SearchGifsResponse>(`${this.url}/search`, { params: params })
      .subscribe((res: SearchGifsResponse) => {
        this.response = res.data;
        localStorage.setItem('data', JSON.stringify(res.data));
      })

  }
}
