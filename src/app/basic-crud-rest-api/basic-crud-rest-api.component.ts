import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Component({
  selector: 'app-basic-crud-rest-api',
  templateUrl: './basic-crud-rest-api.component.html',
  styleUrls: ['./basic-crud-rest-api.component.scss']
})
export class BasicCrudRestApiComponent implements OnInit {
  products: Product[];
  message: string;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => (this.products = data));
  }

  onAdd() {
    const newProduct: Product = {
      name: 'Chocolate',
      price: 100,
      details: 'A chocolate product',
      quantityAvailable: 20
    };
    this.productService
      .addProduct(newProduct)
      .subscribe(data => this.products.push(data));
  }

  editProduct(i: number) {
    const modifiedProduct: Product = {
      ...this.products[i],
      price: this.products[i].price + 10
    };
    this.productService.editProduct(modifiedProduct).subscribe(data => {
      this.products[i] = modifiedProduct;
      this.message = data.message;
    });
  }

  deleteProduct(i: number) {
    this.productService.deleteProduct(this.products[i]._id).subscribe(data => {
      this.products.splice(i, 1);
      this.message = data.message;
    });
  }
}
