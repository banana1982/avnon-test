import { IAnswer } from './pages/question-dialog/answer.model';
import { IQuestion } from './pages/question-dialog/question.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  
}

