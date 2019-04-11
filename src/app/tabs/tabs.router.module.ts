import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/index/tabs/notice',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'repo-content',
                children: [
                    {
                        path: '',
                        loadChildren: '../repo-content/repo-content.module#RepoContentPageModule'
                    }
                ]
            },
            {
                path: 'notice',
                children: [
                    {
                        path: '',
                        loadChildren: '../notice/notice.module#NoticePageModule'
                    }
                ]
            },

            {
                path: 'service',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-service/tab-service.module#TabServicePageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/index/tabs/notice',
                pathMatch: 'full'
            }
        ]
    },

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
