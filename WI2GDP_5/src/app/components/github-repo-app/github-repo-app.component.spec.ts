import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubRepoAppComponent } from './github-repo-app.component';

describe('GithubRepoAppComponent', () => {
  let component: GithubRepoAppComponent;
  let fixture: ComponentFixture<GithubRepoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubRepoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
