import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController, Platform } from '@ionic/angular';

import { AbstractMenuBaseComponent, STUDENT_MENU_ID } from './commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent extends AbstractMenuBaseComponent {
    readonly menuId = STUDENT_MENU_ID;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private location: Location,
        menu: MenuController,
        private router: Router
    ) {
        super(menu, STUDENT_MENU_ID);
        this.initializeApp();
    }

    initializeApp() {
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
