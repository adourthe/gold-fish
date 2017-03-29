import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
 
  @Input('progress') progress;
  public barColor = "red";
 
  constructor() {
    
  }

  ngOnChanges(changes) {
      this.updateBarColor();
    }

  updateBarColor() {
    console.log("progress: "+this.progress);
    if (this.progress > 66) {
      this.barColor = "green";
    } else if (this.progress > 33) {
      this.barColor = "yellow";
    } else {
      this.barColor = "red";
    }
  }
 
}
