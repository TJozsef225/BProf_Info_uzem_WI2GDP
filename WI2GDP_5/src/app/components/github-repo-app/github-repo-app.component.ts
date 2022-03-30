import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-repo-app',
  templateUrl: './github-repo-app.component.html',
  styleUrls: ['./github-repo-app.component.css']
})
export class GithubRepoAppComponent implements OnInit {

  
  public githubRepoSearch!:string;
  public githubRepos!:any;
  public errorMessage!:string;
  public items!: any[];

  constructor(private githubService:GithubService) {
    
   }

  ngOnInit(): void {

  }


  
  public searchRepo() {
    this.githubService.getSearchRepos(this.githubRepoSearch).subscribe(
      data => {
        //this.items = data[0]['items'];
        this.githubRepos = data;
      }, error => {
        this.errorMessage = error;
      }
    )
  }
  
  
}
