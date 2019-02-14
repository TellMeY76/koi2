import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-tab-x',
    templateUrl: './tab-x.page.html',
    styleUrls: ['./tab-x.page.scss'],
})
export class TabXPage implements OnInit {


    tabId = null;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.tabId = this.activatedRoute.snapshot.paramMap.get('tabId');
    }
}
