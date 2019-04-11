import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabsPage} from './tabs.page';
import {IonicModule} from '@ionic/angular';
import {RouterTestingModule} from '@angular/router/testing';

describe('TabsPage', () => {
    let component: TabsPage;
    let fixture: ComponentFixture<TabsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RouterTestingModule ],
            declarations: [TabsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: []
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
