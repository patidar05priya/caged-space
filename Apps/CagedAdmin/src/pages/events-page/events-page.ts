import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service';
import { EventService } from '../../providers/event-service';
import { EventModel } from '../../models/event';

@Component({
  selector: 'page-events',
  templateUrl: 'events-page.html'
})
export class EventsPage {

  private _events: Array<EventModel>;

  constructor(private _util: UtilityService, private _eventsService: EventService) {}

  ionViewDidLoad() {

    // Subscribe to events$ Observable.
    this._eventsService.events$.subscribe(events => {

      this._events = events;

      this._util.StopSpinner();

    });

  }

}
