import {Component} from '@angular/core';
import {NOTICE} from '../config/notice';
import {Consultant, Notice} from '../model/notice';
import {LoadingController} from '@ionic/angular';

@Component({
    selector: 'app-notice',
    templateUrl: './notice.page.html',
    styleUrls: ['./notice.page.scss'],
})
export class NoticePage {
    finished = false;
    noticeInfo: Notice = NOTICE;
    consultant: Consultant = this.noticeInfo.consultant;
    scrollDir = 'default';

    constructor() {
    }

    swipe(event) {
        if (event.detail.scrollTop > 0) {
            this.scrollDir = 'down';
        } else if (event.detail.scrollTop < 50) {
            this.scrollDir = 'up';
        }
    }

}
