import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoAppReposComponent } from './github-repo-app-repos.component';

describe('GithubRepoAppReposComponent', () => {
  let component: GithubRepoAppReposComponent;
  let fixture: ComponentFixture<GithubRepoAppReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoAppReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoAppReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
