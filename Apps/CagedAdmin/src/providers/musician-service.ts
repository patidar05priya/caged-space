import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ConfigService } from '../providers/config-service';
import 'rxjs/add/operator/map';
import { MusicianModel } from '../models/musician';

@Injectable()
export class MusicianService {

  private _musicians$: BehaviorSubject<Array<MusicianModel>>;

  // Service consumers can subscribe to this observable to get latest musicians data.
  public musicians$: Observable<Array<MusicianModel>>;

  // Local musicians cache.
  public _musiciansStore: {
    musicians: Array<MusicianModel>
  };

  constructor(private _http: Http, private _config: ConfigService) {

    this._musiciansStore = { musicians: new Array<MusicianModel>() };

    this._musicians$ = new BehaviorSubject(new Array<MusicianModel>());

    this.musicians$ = this._musicians$.asObservable();

    this._getMusicians()
      .subscribe(musicians => {


      }, error => {

      });

  }

  // Initiates retrieval of CagedSpace musicians.
  private _getMusicians(): Observable<Array<MusicianModel>> {

    return this._http.get(this._config.getMusiciansUrl)
      .map(res => {
        return this._MapMusicians(res);
      });

  }

  // Maps raw JSON data to an array of EventModels.
  private _MapMusicians(response: any) {

    let newMusicians: Array<MusicianModel> = response.json().data;

    this._musiciansStore.musicians = newMusicians;

    this._musicians$.next(this._musiciansStore.musicians);

    return this._musiciansStore.musicians;

  }

}