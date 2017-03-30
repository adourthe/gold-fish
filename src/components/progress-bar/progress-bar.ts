import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
 
  @Input('progress') progress;
  public barColor = "red";

  private barGreen = "#2dad0a";
  private barYellow = "#efcc1c";
  private barRed = "#ff3700";
 
  constructor() {
    
  }

  ngOnChanges(changes) {
    console.log(changes);
    this.updateBarColor();
  }

  updateBarColor() {
    console.log(this.progress);
    if (this.progress > 66) {
      this.barColor = this.barGreen;
    } else if (this.progress > 33) {
      this.barColor = this.barYellow;
    } else {
      this.barColor = this.barRed;
    }
  }
 
}
