import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicianModel } from '../../models/musician';
import { MusicianService } from '../../providers/musician-service';
import { UtilityService } from '../../providers/utility-service';

@Component({
  selector: 'page-musicians',
  templateUrl: 'musicians-page.html'
})
export class MusiciansPage {

  private musicians: Array<MusicianModel>

  constructor(private _util: UtilityService, private _musicianService: MusicianService) { }

  ionViewDidEnter() {

    this._musicianService.musicians$.subscribe(musicians => {

      this.musicians = musicians;

    });

    this._util.StopSpinner();

  }

}
