import { IQuestion } from './../question-dialog/question.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  title = 'avnon-test';
  isVisible = false;
  input: IQuestion | undefined;
  questions: IQuestion[] = [];
  size: NzButtonSize = 'small';
  form: {
    info: String | '',
    questions: IQuestion[],
  } = {
    info: '',
    questions: []
  };
  @ViewChild(FormBuilderComponent) formBuilderComponent: FormBuilderComponent | undefined;
  constructor(
    private router: Router
    ) {
    
  }

  ngOnInit(): void {
    this.form.questions = JSON.parse(JSON.stringify(this.questions));
    this.form.questions.forEach((q, i) => {
      q.ans = q.answers?.map(a => {
        return {
          value: a,
          status: true
        };
      });
    });
  }
  showModal(): void {
    this.isVisible = !this.isVisible && true;
  }
  handleAddNewQuestion(data: IQuestion[]) {
    this.questions = data;
    this.form.questions = JSON.parse(JSON.stringify(this.questions));
  }
  handleReview() {
    const navigationExtras: NavigationExtras = {state: this.form};
    this.router.navigate(['form', 'answer'], navigationExtras);
  }
  hancleCheckAnswer(e: any, qIdx: number, aIdx: number) {
    console.log(e);
    this.questions.forEach((q, i) => {
      q.ans?.forEach((a, idx) => {
        if (qIdx === i && idx === aIdx) {
          a.status = e;
        }
      });
    });
    this.form.questions = this.questions;
    console.log(this.questions);
  }
}
