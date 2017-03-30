import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-housework',
  templateUrl: 'housework.html'
})
export class HouseworkPage {

  private HW_VAISSELLE = "Vaisselle";
  private HW_BALAYAGE = "Balayage";
  private HW_NETTOYAGE_SOL = "Nettoyage du sol";
  private HW_NETTOYAGE_CUISINE = "Nettoyage de la cuisine";
  private HW_NETTOYAGE_SDB = "Nettoyage de la salle de bain";
  private HW_COURSES = "Courses";
  private HW_POUBELLES = "Poubelles";
  private HW_RANGEMENT = "Rangement";
  private HW_LINGE = "Laver le linge";

  private housework = [];
  private houseworkPourcentages = [];
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
        for (let i=0; i<this.housework.length; i++) {
          this.houseworkPourcentages.push(this.housework[i].percentage);
        }
        console.log(this.housework);
        console.log(this.houseworkPourcentages);
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

  reinitPercentage(targetName) {
    console.log(this.housework);
    console.log(this.houseworkPourcentages);
    for (let i=0; i<this.housework.length; i++) {
      if (this.housework[i].name == targetName) {
        this.housework[i].date = new Date();
        this.housework[i].percentage = this.houseworkPourcentages[i];
        console.log(this.housework);
        this.saveHousework();
        break;
      }
    }
    this.initPercentages();
  }

  saveHousework() {
    let houseWorkToSave = this.housework.slice(0);
    for (let i=0; i<this.housework.length; i++) {
      delete houseWorkToSave[i].percentage;
    }
    this.storage.set('housework', JSON.stringify(this.housework));
  }

  initHousework() {
    this.housework.push(
      {
        name: this.HW_VAISSELLE,
        date: new Date()
      },{
        name: this.HW_BALAYAGE,
        date: new Date()
      },{
        name: this.HW_POUBELLES,
        date: new Date()
      },{
        name: this.HW_COURSES,
        date: new Date()
      },{
        name: this.HW_LINGE,
        date: new Date()
      },{
        name: this.HW_RANGEMENT,
        date: new Date()
      },{
        name: this.HW_NETTOYAGE_SOL,
        date: new Date()
      },{
        name: this.HW_NETTOYAGE_CUISINE,
        date: new Date()
      },{
        name: this.HW_NETTOYAGE_SDB,
        date: new Date()
      }
    );
  }

  getDeadline(housework) {
    let day = 24*60*60*1000;
    switch (housework) {
      case this.HW_VAISSELLE : return 2*day;
      case this.HW_BALAYAGE : return 4*day;
      case this.HW_NETTOYAGE_SOL : return 8*day;
      case this.HW_NETTOYAGE_CUISINE : return 5*day;
      case this.HW_NETTOYAGE_SDB : return 7*day;
      case this.HW_COURSES : return 3*day;
      case this.HW_POUBELLES : return 2*day;
      case this.HW_RANGEMENT : return 4*day;
      case this.HW_LINGE : return 2*day;
      default: return 0;
    }

  }

}