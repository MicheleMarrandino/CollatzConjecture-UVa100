import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {

  @Input()
  min = 0;
  @Input()
  max = 100;

  @Input()
  value: number;

  @Input()
  text: string;

  invalidity = false;
  options = {duration: 0.3};

  constructor() { }

  ngOnInit() {}

}
