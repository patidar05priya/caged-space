import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { EventModel } from '../models/event';

@Injectable()
export class EventsService {

  private _events$: BehaviorSubject<Array<EventModel>>;

  // Service consumers can subscribe to this observable to get latest events data.
  public events$: Observable<Array<EventModel>>;

  // Local events cache.
  public _eventStore: {
    events: Array<EventModel>
  };

  constructor() {

    this._eventStore = { events: new Array<EventModel>() };

    this._events$ = new BehaviorSubject(new Array<EventModel>());

    this.events$ = this._events$.asObservable();

    this._getEvents();

  }

  // Initiates retrieval of CagedSpace events.
  private _getEvents() {

    let response: any; // get this from an API call

    // this._eventStore.events = this._MapEvents(response);
    // this._events$.next(this._eventStore.events);

  }

  // Maps raw JSON data to an array of EventModels.
  private _MapEvents(response: any): void {

    var newEvents= new Array<EventModel>();

  }

}