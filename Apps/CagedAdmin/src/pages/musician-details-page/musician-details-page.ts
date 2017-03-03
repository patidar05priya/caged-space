import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MusicianModel } from '../../models/musician';


@Component({
  selector: 'page-musician-details',
  templateUrl: 'musician-details-page.html'
})
export class MusicianDetailsPage {

  public musician: MusicianModel;

  constructor(private _navCtrl: NavController, private _navParams: NavParams) {

    this.musician = new MusicianModel();

  }

  ionViewDidEnter() {

    this.musician = this._navParams.get('model');

  }

}
