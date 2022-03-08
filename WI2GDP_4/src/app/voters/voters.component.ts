import { Component, Input, OnInit } from '@angular/core';
import { Creators, creators } from 'src/app/creators';

@Component({
  selector: 'app-vote',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit {

  @Input() creators: Creators[] = creators;
  funny: number = 0;
  notFunny: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  communityApproved(): boolean {
    if(this.creators[2].funny - this.creators[2].notFunny > 50)
      return true;
    else
      return false;
  }

  sumPastVotesFunny(): number {
    this.funny = this.creators[0].funny + this.creators[1].funny + this.creators[2].funny;
    return this.funny;
  }

  sumPastVotesNotFunny(): number {
    this.notFunny = this.creators[0].notFunny + this.creators[1].notFunny + this.creators[2].notFunny;
    return this.notFunny;
  }

/*  handleSeperateYes(a: number) {
    this.creators[a].funny++;
  }

  handleSeperateNot(a: number) {
    this.creators[a].notFunny++;
  }*/

  handleVote(funny: boolean) {
    if(funny == true) {
      this.creators[0].funny++;
      this.funny++;
    } else {
      this.creators[0].notFunny++;
      this.notFunny++;
    }
    
  }
}