import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login-page/login-page';
import { MusiciansPage } from '../pages/musicians-page/musicians-page';
import { EventsPage } from '../pages/events-page/events-page';
import { EventDetailsPage } from '../pages/event-details-page/event-details-page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MusiciansPage;

  menuPages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.menuPages = [
      { title: 'Sign Out', component: LoginPage },
      { title: 'Events', component: EventsPage },
      { title: 'Musicians', component: MusiciansPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
