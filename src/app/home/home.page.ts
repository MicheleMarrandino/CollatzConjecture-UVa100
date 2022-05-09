/* eslint-disable prefer-const */
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  result: number;
  value1: number;
  value2: number;
  wasLeftMinor: boolean;
  results: number[];

  constructor(private ac: AlertController) {}

  sortEvent(value: number, which: number) {
    if (which === 1) {
      this.value1 = value;
    } else {
      this.value2 = value;
    }

    if (this.value1 && this.value2) {
      //let min, let max, da min a max, iterate;
      let x: number;
      let y: number;

      x = Math.max(this.value1, this.value2);
      y = Math.min(this.value1, this.value2);

      if (x <= 0 || y <= 0) {
        return;
      }

      if (x === y) {
        this.result = 1;
      }

      if (Number(this.value1) < Number(x)) {
        this.wasLeftMinor = true;
      } else {
        this.wasLeftMinor = false;
      }

      this.maxCycle(x, y);
    }
  }

  singleCycle(x){
    if(x===1){
      return 1;
    }

    return 1 + this.singleCycle(x%2 === 0 ? x/2 : 3*x+1);
  }

  maxCycle(x,y){
    let max = Math.max(x,y);
    let min = Math.min(x,y);
    let maxCycle = 0;

    for(let i = min; i <= max; i++ ){
      let singleCycle = this.singleCycle(i);
      console.log(singleCycle);
      if(this.singleCycle(i) > maxCycle){
        maxCycle = singleCycle;
      }
    }

    this.result = maxCycle;

  }

}
