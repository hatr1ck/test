import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductList {
  constructor(private http: HttpClient) {  }
  getProducts() {
    return this.http.get('https://demo4233545.mockable.io/products')
  }
}
