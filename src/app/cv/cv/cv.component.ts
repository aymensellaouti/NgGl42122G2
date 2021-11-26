import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from '../../services/logger.service';
import { TodoService } from '../../todo/service/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  constructor(
    private logger: LoggerService,
    private todoService: TodoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.toastr.info('Bienvenu dans notre CvTech  :D');
    this.logger.logger('in cv Component');
  }
  selectCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.loggerTodo();
  }
}
