import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';

// Pages.
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login-page/login-page';
import { EventsPage } from '../pages/events-page/events-page';
import { MusiciansPage } from '../pages/musicians-page/musicians-page';
import { EventDetailsPage } from '../pages/event-details-page/event-details-page';

// Services.
import { ConfigService } from '../providers/config-service';
import { EmailService } from '../providers/email-service';
import { UtilityService } from '../providers/utility-service';
import { UserService } from '../providers/user-service';
import { MusicianService } from '../providers/musician-service';
import { EventService } from '../providers/event-service';

// Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyAgvU-ZNdAMYJaw_kTK-uyWMIGHwCZtmMM",
  authDomain: "cagedspace-9d75f.firebaseapp.com",
  databaseURL: "https://cagedspace-9d75f.firebaseio.com",
  storageBucket: "cagedspace-9d75f.appspot.com",
  messagingSenderId: "464147072174"
};

// Bootstraping.
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    EventsPage,
    EventDetailsPage,
    MusiciansPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    EventsPage,
    EventDetailsPage,
    MusiciansPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConfigService,
    EmailService,
    UtilityService,
    UserService,
    EventService,
    MusicianService
  ]
})
export class AppModule { }
