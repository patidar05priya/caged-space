import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { MusicianService } from '../../providers/musician-service';
import { UtilityService } from '../../providers/utility-service';

@Component({
  selector: 'page-add-musician',
  templateUrl: 'add-musician-page.html'
})
export class AddMusicianPage {

  addMusicianForm: any;

  constructor(private _musicianService: MusicianService, private _util: UtilityService, private _nav: NavController, private _navParams: NavParams, private _fb: FormBuilder) {

    this.addMusicianForm = this._fb.group({
      name: ['', Validators.required],
      instrument: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  // Add New Musician.
  public addMusician(isValid: boolean) {

    if (isValid) {

      // Instantiate spinner. 
      this._util.StartSpinner('Adding New Musician...');

      this._musicianService.addMusician(this.addMusicianForm.value)
        .subscribe(musician => {

          this._util.StopSpinner();

          // Navigate back to musicians list page.
          this._nav.pop();

        }, error => {

          this._util.StopSpinner();

          this._util.ShowAlert('Internal Error', 'Could not add new Musician.');

        });

    }

  }


}
