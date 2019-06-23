import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  message = 'Hello from the sibling side';

  constructor(private componentCommunicationService: ComponentCommunicationService) { }

  ngOnInit() {
    this.componentCommunicationService.siblingData
    .subscribe(data => this.message = data);
  }

  changeText() {
    this.message = 'Sibling Communication';
    this.componentCommunicationService.siblingData.next(this.message);
  }

}
