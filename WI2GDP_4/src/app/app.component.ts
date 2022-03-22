import { Component } from '@angular/core';
import { creators, Creators } from 'src/app/creators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  creators2: Creators[] = creators;
  title = 'vicces viccek pont hu';
  creators = creators;
  newJoke!: Creators;

  constructor() {
    this.initializeJoke();
  }

  initializeJoke() {
    this.newJoke = {
      id: 0,
      name: '',
      jokes: '',
      funny: 0,
      notFunny: 0
    };
  }

  
  saveJoke() {
    this.creators.push(this.newJoke);
    this.initializeJoke();
  }
}
