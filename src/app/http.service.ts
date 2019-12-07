import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }
  buscarItens() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10');
  }
}
