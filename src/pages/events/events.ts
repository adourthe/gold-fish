import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from "ionic-angular";
import { AddEventPage } from "../add-event/add-event";

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  public date;
  public events = [];

  constructor(private storage:Storage, private modalCtrl: ModalController) {
    this.date = new Date();

    storage.ready().then(() => {
      storage.get('events').then((val) => {
        if (val) {
          this.events = JSON.parse(val);
          for (let i=0; i<this.events.length; i++) {
            this.events[i].date = new Date(this.events[i].date);
          }
        }
      });
    });
    
  }

  removeEvent(targetId) {
    console.log(targetId);
    for (let i=0; i<this.events.length; i++) {
      if (this.events[i].id == targetId) {
        this.events.splice(i, 1);
        this.saveEvents();
        break;
      }
    }
  }

  addEvent(event) {
    console.log(event);
    this.events.push(event);
    console.log(this.events);
    this.saveEvents();
  }

  saveEvents() {
    let eventsToSave = [];
    for (let i=0; i<this.events.length; i++) {
      eventsToSave.push({
        id: this.events[i].id,
        title: this.events[i].title,
        date: this.events[i].date.toISOString()
      })
    }
    this.storage.set('events', JSON.stringify(eventsToSave));
  }

  showModal() {
    let modalPage = this.modalCtrl.create(AddEventPage);
    modalPage.onDidDismiss(data => {
      if (data != null) {
        this.addEvent(data);
      }
    });
    modalPage.present();
  }

}