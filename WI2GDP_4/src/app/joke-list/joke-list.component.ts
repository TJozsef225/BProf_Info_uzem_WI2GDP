import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Creators, creators } from 'src/app/creators';

@Component({
  selector: 'app-jokelist',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {

  @Input() creators: Creators[] = creators;
  @Output() voted2 = new EventEmitter();
  @Output() voted = new EventEmitter<boolean>();
  isVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  funny(x: number) {
    this.voted.emit(true);
    this.voted2.emit({ id: this.creators[x].id });

  }
  notFunny(x: number) {
    this.voted.emit(false);
    this.voted2.emit({ id: this.creators[x].id });
  }
}
