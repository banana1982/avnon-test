import { IQuestion } from './question.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-question-dialog',
  templateUrl: './question-dialog.component.html',
  styleUrls: ['./question-dialog.component.scss']
})
export class QuestionDialogComponent implements OnInit {
  @Input() data: IQuestion | undefined;
  @Input() visible = false;
  value: any;
  checked1: false | undefined;
  checked2: false | undefined;
  size: NzButtonSize = 'small';
  isConfirmLoading = false;
  qForm: FormGroup = new FormGroup({});
  questions: IQuestion[] = [];
  constructor(
    private fb: FormBuilder,
  ) {}
  get answers() {
    return this.qForm.get('answers') as FormArray;
  }
  ngOnInit(): void {
    this.qForm = this.fb.group({
      qType: [this.data?.qType || 'checkbox', [Validators.required]],
      qContent: [this.data?.qContent ||  '', [Validators.required]],
      qSpecify: [this.data?.qSpecify || true, []],
      qReuired: [this.data?.qReuired ||  true, []],
      answers: this.fb.array(this.data?.answers?.map(a => this.fb.control(a)) || [
        this.fb.control(''),
        this.fb.control('')
      ])
    });
  }
  handleAddAns() {
    if (this.answers.controls.length < 6) {
      this.answers.push(this.fb.control(''));
    }
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    console.log(this.qForm.get('qContent')?.hasError('required'));
    
    if (!this.qForm.invalid) {
      this.visible = false;
      // this.isConfirmLoading = true;
      console.log(this.qForm.value);
      const data = this.qForm.value as IQuestion;
      this.questions.push(data);
    }
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.visible = false;
  }
}
