import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'avnon-test';
  isVisible = false;

  showModal(): void {
    this.isVisible = !this.isVisible && true;
  }
}
