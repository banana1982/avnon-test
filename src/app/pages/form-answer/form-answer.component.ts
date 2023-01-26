import { IQuestion } from '../question-dialog/question.model';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.scss']
})
export class FormAnswerComponent implements OnInit {
  data: {
    info: String | '',
    questions: IQuestion[],
  } = {
    info: '',
    questions: []
  }
  form: IQuestion[] = [];
  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation ? navigation.extras.state as {
      info: String | '',
      questions: IQuestion[],
    } : {
      info: '',
      questions: []
    };
    this.data = state;
  }
  ngOnInit(): void {
  }
  submitForm(f: NgForm) {}
}
