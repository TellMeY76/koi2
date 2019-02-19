import {Component, OnInit} from '@angular/core';
import {NOTICE} from '../config/notice';
import {Consultant, Notice} from '../model/notice';
import {LoadingController} from '@ionic/angular';
import {PACKAGES} from '../config/package';

@Component({
    selector: 'app-notice',
    templateUrl: './notice.page.html',
    styleUrls: ['./notice.page.scss'],
})
export class NoticePage implements OnInit {
    noticeInfo: Notice = NOTICE;
    consultant: Consultant = this.noticeInfo.consultant;
    reDays: number;
    reHours: number;
    reMinutes: number;
    reSecond: number;
    overTime = false;

    constructor() {
    }

    ngOnInit() {
        this.countDown();
    }

    countDown() {
        const countDownDate = new Date(this.noticeInfo.deadline).getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if (distance < 0) {
            return this.overTime = true;
        }
        setInterval(() => {
            this.setContDown(countDownDate);
        }, 1000);
    }

    setContDown(countDownDate: number) {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        this.reDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.reHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.reMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.reSecond = Math.floor((distance % (1000 * 60)) / 1000);
    }
}
