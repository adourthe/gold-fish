import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  public date;

  constructor(public navCtrl: NavController) {
    this.date = new Date();
  }

}