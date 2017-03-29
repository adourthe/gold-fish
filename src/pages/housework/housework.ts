import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-housework',
  templateUrl: 'housework.html'
})
export class HouseworkPage {

  public housework = [];
  public meanPercentage = 0;

  constructor(private storage:Storage) {
    storage.ready().then(() => {
      storage.get('housework').then((val) => {
        if (val) {
          this.housework = JSON.parse(val);
          for (let i=0; i<this.housework.length; i++) {
            this.housework[i].date = new Date(this.housework[i].date);
          }
        }else{
          this.initHousework();
          this.saveHousework();
        }
        this.initPercentages();
      });
    });
    
  }

  initPercentages() {
    let sum = 0;
    for (let i=0; i<this.housework.length; i++) {
      let deadline = this.getDeadline(this.housework[i].name);
      console.log(new Date().getTime()-this.housework[i].date.getTime()+deadline);
      this.housework[i].percentage = Math.max(0,Math.round((this.housework[i].date.getTime()-new Date().getTime()+deadline)/deadline*100));
      sum += this.housework[i].percentage;
    }
    this.meanPercentage = Math.round(sum/this.housework.length);
  }

  saveHousework() {
    let houseWorkToSave = this.housework;
    for (let i=0; i<this.housework.length; i++) {
      delete houseWorkToSave[i].percentage;
    }
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

  getDeadline(housework) {
    let day = 24*60*60*1000;
    switch (housework) {
      case 'Vaisselle': return 2*day;
      case 'Balayage' : return 4*day;
      case 'Nettoyage du sol': return 8*day;
      default: return 0;
    }
  }

}