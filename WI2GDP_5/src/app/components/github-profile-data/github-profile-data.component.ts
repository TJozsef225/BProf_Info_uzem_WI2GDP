import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.css']
})
export class GithubProfileDataComponent implements OnInit {
  @Input() githubProfile:any;
  constructor() { }

  ngOnInit(): void {
  }

}
