import {Component, OnInit, ViewChild} from '@angular/core';
import {SlideTabs} from '../config/tabs';

@Component({
    selector: 'app-repo-content',
    templateUrl: './repo-content.page.html',
    styleUrls: ['./repo-content.page.scss'],
})
export class RepoContentPage implements OnInit {
    slideOpts = {
        effect: 'flip'
    };
    @ViewChild('contentSlides') slides;
    @ViewChild('contentSegment') segments;
    slidesMoving: boolean;
    slidesHeight: number;
    tabs = SlideTabs;

    constructor() {
    }

    ngOnInit() {
        this.setHeight();
    }

    segmentChanged() {
        const idx = this.tabs.indexOf(this.segments.value);
        this.slides.slideTo(idx);
    }

    slideChanged() {
        this.slidesMoving = true;
        this.slides.getActiveIndex().then(data => {
            this.segments.value = this.tabs[data];
        });
    }

    setHeight() {
        this.slidesMoving = false;
        this.slides.getActiveIndex().then(data => {
            const currentSlide: Element = this.slides.el.children[0].children[data];
            this.slidesHeight = currentSlide.clientHeight;
        });
    }

}
