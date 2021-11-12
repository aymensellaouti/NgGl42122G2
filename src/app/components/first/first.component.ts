import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  isHidden = true;
  source = 'as.jpg';
  alt = 'you have an error';
  constructor() {}

  showAndHide() {
    this.isHidden = !this.isHidden;
  }
  ngOnInit(): void {}
  logInput(monInput) {
    console.log(monInput.value);
  }
  /*
    attributs
    méthodes
  */
}
