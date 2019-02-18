import {Component, Input, OnInit} from '@angular/core';
import {RepoDetail, RepoSchedule} from '../../model/report';
import {REPO_DETAILS, SCHEDULES} from '../../config/reportDetails';

@Component({
    selector: 'app-repo-tab',
    templateUrl: './repo-tab.component.html',
    styleUrls: ['./repo-tab.component.scss', '../../../assets/css/timeline.scss']
})
export class RepoTabComponent implements OnInit {
    @Input() tabId;
    info: RepoDetail = new RepoDetail();
    schedule: RepoSchedule = new RepoSchedule();

    constructor() {
    }

    ngOnInit() {
        this.info = REPO_DETAILS[this.tabId];
        this.schedule = SCHEDULES[this.tabId];
        console.log(this.schedule);
    }
}
