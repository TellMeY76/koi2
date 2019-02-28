import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPopoverComponent } from './img-popover.component';

describe('ImgPopoverComponent', () => {
  let component: ImgPopoverComponent;
  let fixture: ComponentFixture<ImgPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
