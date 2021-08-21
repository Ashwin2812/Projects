import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  counter = 0;
  
  resetBtn() {
    this.counter = 0;
  }

  increaseBtn() {
    this.counter = this.counter +1 ;
  }

  dicreaseBtn() {
    this.counter = this.counter -1 ;
  }
}

