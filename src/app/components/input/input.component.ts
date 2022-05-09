import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input()
  min = 0;
  @Input()
  max = 100;

  @Input()
  text: string;

  @Input()
  value: number;

  @Output()
  sendValueEvent = new EventEmitter<number>();

  invalidity = false;

  constructor() { }

  ngOnInit() {}

  checkValidity(){
    if(this.value > this.max || this.value < this.min || isNaN(this.value)){
      this.invalidity = true;
    } else {
      this.invalidity = false;
    }

    if(!this.invalidity){
      this.sendValueEvent.emit(this.value);
    }
  }
}
