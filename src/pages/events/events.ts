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
          for (let i=0; i<this.events.length; i++) {
            this.events[i].date = new Date(this.events[i].date);
          }
          console.log(this.events);
        }
      });
    });
    
  }

  addEvent() {
    this.events.push({
      title: "New Event !",
      date: new Date()
    });
    let eventsToSave = [];
    for (let i=0; i<this.events.length; i++) {
      eventsToSave.push({
        title: this.events[i].title,
        date: this.events[i].date.toISOString()
      })
    }
    console.log(this.events);
    this.storage.set('events', JSON.stringify(eventsToSave));
  }


}