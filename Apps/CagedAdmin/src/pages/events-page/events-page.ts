import { Component, HostListener } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service';
import { EventService } from '../../providers/event-service';
import { EventModel } from '../../models/event';
import { AddEventPage } from '../../pages/add-event-page/add-event-page';

@Component({
  selector: 'page-events',
  templateUrl: 'events-page.html'
})
export class EventsPage {

  private _events: Array<EventModel>;
  private _isMobileDevice: boolean;

  constructor(private _util: UtilityService, private _eventsService: EventService,
    private _nav: NavController, private _platform: Platform) {

    this._platform.ready().then((readySource) => {

      this._isMobileDevice = (this._platform.width() <= 768);
    });

    // Subscribe to events$ Observable.
    this._eventsService.events$.subscribe(events => {

      this._events = events;

      this._util.StopSpinner();
    });
  }

  addNewEvent() {

    this._nav.push(AddEventPage);

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    this._isMobileDevice = (event.target.innerWidth <= 768);

  }

}
