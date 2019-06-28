import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-operations',
  templateUrl: './array-operations.component.html',
  styleUrls: ['./array-operations.component.scss']
})
export class ArrayOperationsComponent implements OnInit {
  arrayNumbers = [1, 2, 3, 4, 5];
  newArray: number[];
  lastValue: number;

  constructor() {}

  ngOnInit() {}

  onMap() {
    this.newArray = this.arrayNumbers.map(val => val * 2);
  }

  onPop() {
    const popArray = [...this.arrayNumbers];
    this.lastValue = popArray.pop();
  }
}
