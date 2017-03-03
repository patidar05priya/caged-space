import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicianModel } from '../../models/musician';
import { MusicianService } from '../../providers/musician-service';
import { MusicianDetailsPage } from '../../pages/musician-details-page/musician-details-page';

@Component({
  selector: 'page-musicians',
  templateUrl: 'musicians-page.html'
})
export class MusiciansPage {

  private musicians: Array<MusicianModel>

  constructor(private _musicianService: MusicianService, private _nav: NavController) { }

  ionViewDidEnter() {

    this._musicianService.musicians$.subscribe(musicians => {

      this.musicians = musicians;

    });

  }

  openDetails(detailsModel: MusicianModel) {

    this._nav.push(MusicianDetailsPage, {
      model: detailsModel
    });

  }

}
