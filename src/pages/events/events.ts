import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  public date;
  public events = [];

  constructor(private storage:Storage) {
    console.log("Events constructor");
    this.date = new Date();

    storage.ready().then(() => {
      storage.get('events').then((val) => {
        if (val) {
          this.events = JSON.parse(val);
        }
      });
    });
    
  }

  addEvent() {
    this.events.push({
      title: "New Event !"
    });
    this.storage.set('events', JSON.stringify(this.events));
  }


}