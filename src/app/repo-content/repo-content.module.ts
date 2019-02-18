import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RepoContentPage } from './repo-content.page';
import { RepoTabComponent } from './repo-tab/repo-tab.component';

const routes: Routes = [
  {
    path: '',
    component: RepoContentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RepoContentPage, RepoTabComponent]
})
export class RepoContentPageModule {}
