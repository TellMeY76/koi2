import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-img-popover',
    templateUrl: './img-popover.component.html',
    styleUrls: ['./img-popover.component.scss']
})
export class ImgPopoverComponent implements OnInit {

    constructor(public modalController: ModalController) {
    }

    ngOnInit() {
    }

    closeModal() {
        this.modalController.dismiss();
    }
}
