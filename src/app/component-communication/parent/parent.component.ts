import { Component, OnInit } from '@angular/core';
import { ComponentCommunicationService } from '../component-communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  message = 'Hello World';

  constructor(
    private componentCommunicationService: ComponentCommunicationService
  ) {}

  changeText() {
    this.message = 'Parent to Child Communication';
    this.componentCommunicationService.siblingData.next(this.message);
  }

  recieveMessage($event: string) {
    this.message = $event;
    this.componentCommunicationService.siblingData.next(this.message);
  }

  ngOnInit() {
    this.componentCommunicationService.siblingData.next(this.message);
    this.componentCommunicationService.siblingData.subscribe(
      data => (this.message = data)
    );
  }
}
