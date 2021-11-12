import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardSelectedCv = new EventEmitter();
  constructor() {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        '111',
        'teacher',
        'rotating_card_profile3.png',
        39
      ),
      new Cv(
        2,
        'Latrous',
        'Ramzi',
        '222',
        'engineer',
        'rotating_card_profile2.png',
        22
      ),
    ];
  }

  ngOnInit(): void {}
  forwardCv(cv: Cv) {
    this.forwardSelectedCv.emit(cv);
  }
}
