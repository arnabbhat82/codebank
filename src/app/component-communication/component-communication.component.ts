import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {
  show: boolean;

  constructor() {}

  toggleSibling() {
    this.show = !this.show;
  }

  ngOnInit() {}
}
