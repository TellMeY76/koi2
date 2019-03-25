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
    reDays: number;
    reHours: number;
    reMinutes: number;
    reSecond: number;
    overTime = false;
    scrollDir = 'default';

    constructor(public loadingController: LoadingController) {
        this.countDown();
    }

    countDown() {
        const countDownDate = new Date(this.noticeInfo.deadline).getTime();
        const now = new Date().getTime();
        const distance = countDownDate - now;
        if (distance < 0) {
            return this.overTime = true;
        }
        console.log(distance);
        this.setContDown(countDownDate);
        this.finished = true;
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

    swipe(event) {
        if (event.detail.scrollTop > 0) {
            this.scrollDir = 'down';
        } else if (event.detail.scrollTop < 50) {
            this.scrollDir = 'up';
        }
    }

}
