import {Component} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
})

export class TabsPage {
    tabs: string[] = ['registration_scheme', 'policy_match', 'financing_plan', 'fiscalTax_plan', 'service'];

    constructor() {
    }

}
