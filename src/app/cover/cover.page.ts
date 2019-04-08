import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cover',
    templateUrl: './cover.page.html',
    styleUrls: ['./cover.page.scss'],
})
export class CoverPage implements OnInit {
    dateNow: string;

    constructor(public router: Router) {
    }

    ngOnInit() {
        const date = new Date();
        this.dateNow = `2019.04.08`;
    }

    toIndex() {
        this.router.navigateByUrl('/index');
    }
}
