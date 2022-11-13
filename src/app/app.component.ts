import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'animation-css';
  pressButtonRythm: boolean = false;

  buttonRythm(): void {
    this.pressButtonRythm = !this.pressButtonRythm;
  }
}
