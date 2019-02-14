import {Component} from '@angular/core';
import {Package} from '../model/report';
import {PACKAGES} from '../config/package';

@Component({
    selector: 'app-tab-service',
    templateUrl: './tab-service.page.html',
    styleUrls: ['./tab-service.page.scss', '../tab-x/tab-x.page.scss'],
})
export class TabServicePage {
    bestPlan: Package = PACKAGES[2];
    anotherPlans: Package[] = [PACKAGES[0], PACKAGES[1]];

    constructor() {
    }

}
