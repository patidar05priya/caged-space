import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UtilityService } from '../../providers/utility-service';

@Component({
  selector: 'page-events',
  templateUrl: 'events-page.html'
})
export class EventsPage {

  constructor(private _util: UtilityService) {}

  ionViewDidLoad() {

    this._util.StopSpinner();
    console.log('ionViewDidLoad EventsPage');
    
  }

}
