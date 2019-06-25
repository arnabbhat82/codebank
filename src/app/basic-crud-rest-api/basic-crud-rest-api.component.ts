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

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe(data => this.products = data );
  }
  onAdd(){
    console.log('aa');
  }

}
