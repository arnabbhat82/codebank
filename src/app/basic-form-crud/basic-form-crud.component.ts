import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form-crud',
  templateUrl: './basic-form-crud.component.html',
  styleUrls: ['./basic-form-crud.component.scss']
})
export class BasicFormCrudComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  productForm = this.fb.group({
    name: [null, Validators.required, Validators.minLength(3)],
    price: [null, Validators.required, Validators.min(0)],
    details: [null, Validators.required, Validators.minLength(10)],
    quantityAvailable: [null, Validators.required, Validators.min(0)]
  });

  get name() {
    return this.productForm.get('name');
  }
  get price() {
    return this.productForm.get('price');
  }
  get details() {
    return this.productForm.get('details');
  }
  get quantityAvailable() {
    return this.productForm.get('quantityAvailable');
  }

  ngOnInit() {}
}
