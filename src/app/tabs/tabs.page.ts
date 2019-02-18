import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
})

export class TabsPage {
    tabs: string[] = ['registration_scheme', 'policy_match', 'financing_plan', 'fiscalTax_plan', 'service'];

    constructor(public navCtrl: NavController) {
    }

    // routerForward(tabs) {
    //     const idx = this.tabs.indexOf(tabs.getSelected());
    //     if (idx < this.tabs.length - 1) {
    //         // tabs.select(this.tabs[idx + 1]);
    //         this.navCtrl.navigateForward(`/index/tabs/${this.tabs[idx + 1]}`);
    //     }
    // }
    //
    // routerBack(tabs) {
    //     const idx = this.tabs.indexOf(tabs.getSelected());
    //     if (idx > 0) {
    //         // tabs.select(this.tabs[idx - 1]);
    //         this.navCtrl.navigateBack(`/index/tabs/${this.tabs[idx - 1]}`);
    //     }
    // }
}
