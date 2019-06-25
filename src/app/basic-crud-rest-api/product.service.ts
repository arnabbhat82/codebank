import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productApiEndPoint = 'https://ecom-node-heroku.herokuapp.com/api/products';

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.httpClient
    .get(this.productApiEndPoint) as Observable<Product[]>;
  }
  addProduct(newProduct: Product): Observable<Product> {
    return this.httpClient
    .post(this.productApiEndPoint, newProduct);
  }
}
