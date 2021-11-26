import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css'],
})
export class NgStyleComponent implements OnInit {
  @Input() color = 'green';
  @Input() size = 55;
  isAllumee = false;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.isAllumee = !this.isAllumee;
    }, 1500);
  }
}
