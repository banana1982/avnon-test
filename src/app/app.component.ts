import { IQuestion } from './pages/question-dialog/question.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avnon-test';
  isVisible = false;
  input: IQuestion | undefined;
  questions: IQuestion[] = [];
  showModal(): void {
    this.isVisible = !this.isVisible && true;
  }
  handleAddNewQuestion(data: IQuestion[]) {
    this.questions = data;
  }
}
