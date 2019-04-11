import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoverPage} from './cover.page';
import {IonicModule} from '@ionic/angular';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('CoverPage', () => {
    let component: CoverPage;
    let fixture: ComponentFixture<CoverPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [IonicModule.forRoot(), RouterTestingModule],
            declarations: [CoverPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: []
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoverPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
