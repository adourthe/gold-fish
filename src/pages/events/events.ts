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

  addEvent(event) {
    this.events.push(event);
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