import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.css']
})
export class GithubProfileCardComponent implements OnInit {
  @Input() githubProfile:any;

  constructor() { }

  ngOnInit(): void {
  }

}
