import { IQuestion } from '../question-dialog/question.model';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-form-answer',
  templateUrl: './form-answer.component.html',
  styleUrls: ['./form-answer.component.scss']
})
export class FormAnswerComponent implements OnInit {
  data: {
    info: string,
    questions: IQuestion[],
  } = {
    info: '',
    questions: []
  }
  form: IQuestion[] = [];
  size: NzButtonSize = 'small';
  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation ? navigation.extras.state as {
      info: string,
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
  backFormBuilder() {
    const navigationExtras: NavigationExtras = {state: this.data};
    this.router.navigate(['form', 'build'], navigationExtras);
  }
}
