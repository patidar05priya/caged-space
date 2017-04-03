import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../providers/event-service';
import { UtilityService } from '../../providers/utility-service';

/*
  Generated class for the AddEventPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event-page.html'
})
export class AddEventPage {

  addEventForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private _fb: FormBuilder, private _eventService: EventService,
    private _util: UtilityService, private _nav: NavController) {

     this.addEventForm = this._fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required]

    });
  }

    // Add New Event.
  public addEvent(isValid: boolean) {

    if (isValid) {

      // Instantiate spinner. 
      this._util.StartSpinner('Adding New Event...');

      this._eventService.addEvent(this.addEventForm.value)
        .subscribe(event => {

          this._util.StopSpinner();

          // Navigate back to event list page.
          this._nav.pop();

        }, error => {

          this._util.StopSpinner();

          this._util.ShowAlert('Internal Error', 'Could not add new Event.');

        });

    }

  }

}
