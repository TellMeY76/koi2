import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 2}
                    }
                ]
            },
            {
                path: 'tab3',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 3}
                    }
                ]
            },
            {
                path: 'tab4',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule',
                        data: {tabId: 4}
                    }
                ]
            },
            {
                path: 'tab/:tabId',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab-x/tab-x.module#TabXPageModule'
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
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
