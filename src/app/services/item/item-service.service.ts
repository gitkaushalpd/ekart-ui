import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Itemlist } from 'src/app/models/item/itemlist';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  constructor(private http: HttpClient) {}

  // define method which get request to find  all items in list

  findAllItems() {
    const httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json; charset=utf-8');
    httpHeaders.set('Acess-Control-Allow-Origin', '*');

    return this.http.get<Itemlist[]>('http://localhost:8080/findAllItems', {
      headers: httpHeaders,
    });
  }
}