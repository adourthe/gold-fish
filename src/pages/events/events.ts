import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EventsService } from "../../services/events-service";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  public date;
  public events;

  constructor(public navCtrl: NavController, private eventsService: EventsService) {
    this.date = new Date();
    this.events = eventsService.getEvents();
  }

}