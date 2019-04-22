import {NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        'pinch': {enable: false},
        'rotate': {enable: false},
        'swipe': {velocity: 0.3, threshold: 5},
    };
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig},
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
