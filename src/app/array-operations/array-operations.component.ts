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
  canDrink: number[];
  retailCompanies: any;
  companies = [
    {name: 'Comapny One', category: 'Finance', start: 1982, end: 2003},
    {name: 'Comapny Two', category: 'Retail', start: 1982, end: 2008},
    {name: 'Comapny Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Comapny Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Comapny Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Comapny Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Comapny Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Comapny Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Comapny Nine', category: 'Retail', start: 1981, end: 1989},

 ];
 ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  constructor() {}

  ngOnInit() {}

  onMap() {
    this.newArray = this.arrayNumbers.map(val => val * 2);
  }
  // onFilter() {
  //   this.canDrink = this.ages.filter(age => age >= 21);
  // }
  // Filter Retail Companies
  onFilter() {
    this.retailCompanies = this.companies.filter(company => company.category === 'Retail');
  }

  onPop() {
    const popArray = [...this.arrayNumbers];
    this.lastValue = popArray.pop();
  }
}
