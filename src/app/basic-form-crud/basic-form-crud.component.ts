import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface IObject {
  name: string;
  price: number;
  details: string;
  quantityAvailable: number;
}

@Component({
  selector: 'app-basic-form-crud',
  templateUrl: './basic-form-crud.component.html',
  styleUrls: ['./basic-form-crud.component.scss']
})
export class BasicFormCrudComponent implements OnInit {
  objectArr: IObject[] = [];
  constructor(private fb: FormBuilder) {}
  proIndex = -1;

  productForm = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    details: [null, [Validators.required, Validators.minLength(10)]],
    quantityAvailable: [null, [Validators.required, Validators.min(0)]]
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

  onSubmit() {
    if (this.proIndex === -1) {
      this.objectArr.push(this.productForm.value);
      this.productForm.reset();
    } else {
    }
  }

  deleteProduct(i: number) {
    this.objectArr.splice(i, 1);
  }
  editProduct(i: number) {
    this.productForm.patchValue({
      name: this.objectArr[i].name,
      price: this.objectArr[i].price,
      details: this.objectArr[i].details,
      quantityAvailable: this.objectArr[i].quantityAvailable
    });
    // console.log(this.objectArr[i].name)
  }

  ngOnInit() {}
}
