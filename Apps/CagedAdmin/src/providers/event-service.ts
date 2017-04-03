import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../providers/config-service';
import 'rxjs/add/operator/map';
import { EventModel } from '../models/event';
import { AddEventModel } from '../models/addEvent';
import { AngularFire } from 'angularfire2';

@Injectable()
export class EventService {

  private _events$: BehaviorSubject<Array<EventModel>>;

  // Service consumers can subscribe to this observable to get latest events data.
  public events$: Observable<Array<EventModel>>;

  // Local events cache.
  public _eventStore: {
    events: Array<EventModel>
  };

  constructor(private _http: Http, private _config: ConfigService, private _af: AngularFire) {

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
  private _MapEvents(response: any) {

    let newEvent: EventModel = response.json().data;
    return newEvent;
  }

    public addEvent(model: AddEventModel): Observable<EventModel> {

    return this._http.post(this._config.createEventUrl, model)
      .map(res => {
        return this._MapEvents(res);
      });

  }

}