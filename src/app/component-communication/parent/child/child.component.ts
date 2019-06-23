import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  childToParent = 'Child to Parent Data Sharing';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }
  sendMessage(){
    this.messageEvent.emit(this.childToParent);
  }

  ngOnInit() {
  }

}
