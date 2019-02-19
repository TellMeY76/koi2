import {Component, OnInit} from '@angular/core';
import {Package} from '../model/report';
import {PACKAGES} from '../config/package';

@Component({
    selector: 'app-tab-service',
    templateUrl: './tab-service.page.html',
    styleUrls: ['./tab-service.page.scss', '../tab-x/tab-x.page.scss'],
})
export class TabServicePage implements OnInit {
    bestPlan: Package;
    anotherPlans: Package[];

    constructor() {
    }

    ngOnInit() {
        this.bestPlan = PACKAGES[2];
        this.anotherPlans = [PACKAGES[0], PACKAGES[1]];
    }
}
