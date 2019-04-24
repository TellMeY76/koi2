import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {RepoDetail, RepoSchedule} from '../model/report';
import {REPO_DETAILS, SCHEDULES} from '../config/reportDetails';

@Component({
    selector: 'app-tab-x',
    templateUrl: './tab-x.page.html',
    styleUrls: ['./tab-x.page.scss', '../../assets/css/timeline.scss'],
})
export class TabXPage implements OnInit {
    tabId = null;
    info: RepoDetail = new RepoDetail();
    schedule: RepoSchedule = new RepoSchedule();

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.data.pipe(
            map(res => res['tabId'])
        ).subscribe(res => this.tabId = res);
        this.info = REPO_DETAILS[this.tabId];
    }
}
