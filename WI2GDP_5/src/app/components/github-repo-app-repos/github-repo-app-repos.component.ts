import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repo-app-repos',
  templateUrl: './github-repo-app-repos.component.html',
  styleUrls: ['./github-repo-app-repos.component.css']
})
export class GithubRepoAppReposComponent implements OnInit {

  @Input() githubRepos: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
