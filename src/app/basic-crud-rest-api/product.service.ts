import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productApiEndPoint =
    'https://ecom-node-heroku.herokuapp.com/api/products';
  constructor(private httpClient: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.httpClient.get(this.productApiEndPoint) as Observable<
      Product[]
    >;
  }
  addProduct(newProduct: Product): Observable<Product> {
    return this.httpClient.post(
      this.productApiEndPoint,
      newProduct
    ) as Observable<Product>;
  }
  editProduct(modifiedProduct: Product): Observable<{ message: string }> {
    const { _id, ...productRest } = modifiedProduct;
    return this.httpClient.patch(
      `${this.productApiEndPoint}/${_id}`,
      productRest
    ) as Observable<{ message: string }>;
  }
  deleteProduct(id: string): Observable<{ message: string }> {
    return this.httpClient.delete(
      `${this.productApiEndPoint}/${id}`
    ) as Observable<{ message: string }>;
  }
}
