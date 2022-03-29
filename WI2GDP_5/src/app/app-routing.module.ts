import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubRepoAppComponent } from './components/github-repo-app/github-repo-app.component';
import { GithubAppComponent } from './components/github-app/github-app.component';

const routes: Routes = [

  {
    path: 'components/github-app',
    component: GithubAppComponent
  }
,
  {
    path: 'components/github-repo-app',
    component: GithubRepoAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
