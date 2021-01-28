import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';

import { AbstractMenuBaseComponent } from './commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent extends AbstractMenuBaseComponent {
    constructor(
        private menu: MenuController,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private location: Location,
        private router: Router
    ) {
        super(menu);
        this.initApp();
    }

    private initApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    goBack() {
        this.location.back();
    }

    goHome() {
        this.router.navigate(['/']);
    }
}
