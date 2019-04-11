import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTabComponent } from './repo-tab.component';
import {IonicModule} from '@ionic/angular';

describe('RepoTabComponent', () => {
  let component: RepoTabComponent;
  let fixture: ComponentFixture<RepoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot()],
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
