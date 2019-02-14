import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabXPage } from './tab-x.page';

describe('TabXPage', () => {
  let component: TabXPage;
  let fixture: ComponentFixture<TabXPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabXPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabXPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
