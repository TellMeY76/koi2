import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'cover', pathMatch: 'full'
    },
    {
        path: 'index',
        loadChildren: './tabs/tabs.module#TabsPageModule'
    },
    {
        path: 'cover',
        loadChildren: './cover/cover.module#CoverPageModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
