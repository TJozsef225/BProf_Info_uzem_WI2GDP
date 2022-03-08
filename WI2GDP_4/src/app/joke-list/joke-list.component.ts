import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Creators, creators } from 'src/app/creators';

@Component({
  selector: 'app-jokelist',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  @Input() creators: Creators[] = creators;
  @Output() voted = new EventEmitter<boolean>();
  isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  funny() {
    this.voted.emit(true);

  }
  notFunny() {
    this.voted.emit(false);
  }
}
