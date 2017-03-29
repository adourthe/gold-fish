import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-housework',
  templateUrl: 'housework.html'
})
export class HouseworkPage {

  public housework = [];

  constructor(private storage:Storage) {
    /*storage.ready().then(() => {
      storage.get('housework').then((val) => {
        if (val) {
          this.housework = JSON.parse(val);
          for (let i=0; i<this.housework.length; i++) {
            this.housework[i].date = new Date(this.housework[i].date);
          }
        }else{
          this.initHousework();
        }
      });
    });*/
    this.initHousework();
    console.log(this.housework);
  }

  saveHousework() {
    this.storage.set('housework', JSON.stringify(this.housework));
  }

  initHousework() {
    this.housework.push(
      {
        name: 'Vaisselle',
        date: new Date()
      },{
        name: 'Balayage',
        date: new Date()
      },{
        name: 'Nettoyage du sol',
        date: new Date()
      }
    );
  }

}