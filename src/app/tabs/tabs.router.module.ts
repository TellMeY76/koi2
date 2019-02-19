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
                path: 'registration_scheme',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 0}
                    }
                ]
            },
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
                path: 'policy_match',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 1}
                    }
                ]
            },
            {
                path: 'financing_plan',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 2}
                    }
                ]
            },
            {
                path: 'fiscalTax_plan',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 3}
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
