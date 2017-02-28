import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

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
    IonicModule.forRoot(MyApp)
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
