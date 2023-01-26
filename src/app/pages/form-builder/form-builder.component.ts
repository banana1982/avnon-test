import { IQuestion } from './../question-dialog/question.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})
export class FormBuilderComponent implements OnInit {
  @Input() sources: IQuestion[] = [];
  formBuild: FormGroup | undefined;
  constructor(
    private fb: FormBuilder,
  ) {
    
  }
  ngOnInit(): void {
    this.formBuild = this.fb.group({
      info: ['', [Validators.required]]
    });
  }
  submitForm() {}
}
