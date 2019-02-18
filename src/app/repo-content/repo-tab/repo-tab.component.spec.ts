import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTabComponent } from './repo-tab.component';

describe('RepoTabComponent', () => {
  let component: RepoTabComponent;
  let fixture: ComponentFixture<RepoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
