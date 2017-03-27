import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html'
})
export class AddEvent {

  public title = "";

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    let data = {
        title: this.title,
        date: new Date()
    }
    this.viewCtrl.dismiss(data);
  }

}
