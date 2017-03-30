import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
})
export class AddEventPage {

  public title;
  public day;
  public month;
  public year;
  public hours;
  public minutes;

  constructor(public viewCtrl: ViewController) {
    this.title = "Nouvel évènement";
    let today = new Date();
    this.day = today.getDate()+1;
    this.month = today.getMonth()+1;
    this.year = today.getFullYear();
    this.hours = 12;
    this.minutes = 0;
  }

  dismiss() {
    let eventDate = new Date(this.year, this.month-1, this.day, this.hours, this.minutes, 0, 0);
    let data = {
        id: new Date().getTime(),
        title: this.title,
        date: eventDate
    }
    this.viewCtrl.dismiss(data);
  }

}
