import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {NoticePage} from './notice.page';
import {ImgPopoverComponent} from './img-popover/img-popover.component';

const routes: Routes = [
    {
        path: '',
        component: NoticePage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    entryComponents: [ImgPopoverComponent],
    declarations: [NoticePage, ImgPopoverComponent]
})
export class NoticePageModule {
}
