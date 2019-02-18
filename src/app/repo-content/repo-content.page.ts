import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-repo-content',
    templateUrl: './repo-content.page.html',
    styleUrls: ['./repo-content.page.scss'],
})
export class RepoContentPage implements OnInit {
    slideOpts = {
        effect: 'flip'
    };

    constructor() {
    }

    ngOnInit() {
    }

}
