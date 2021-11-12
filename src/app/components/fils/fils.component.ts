import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() message = 'cc';
  @Output() sendDataToDad = new EventEmitter();
  constructor() {
    console.log(this.message);
  }

  ngOnInit(): void {
    console.log(this.message);
  }
  sendData() {
    this.sendDataToDad.emit('cc papa');
  }

}
