import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { FeedItemComponent } from './student-subjects/feed-item/feed-item.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';

registerLocaleData(localeDe);

@NgModule({
    declarations: [
        AppComponent,
        FeedItemComponent,
        StudentOverviewComponent,
        StudentSubjectsComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        CommonsModule,
        FormsModule,
        HttpClientModule,
        IonicModule.forRoot()
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'de'
        }, {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        SplashScreen,
        StatusBar
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
