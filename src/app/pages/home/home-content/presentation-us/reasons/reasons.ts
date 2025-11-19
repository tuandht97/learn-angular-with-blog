import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reasons',
  imports: [NgClass],
  templateUrl: './reasons.html',
  styleUrl: './reasons.scss',
})
export class Reasons implements OnInit, OnChanges {

  @Output() sendVal: EventEmitter<any> = new EventEmitter();
  @Input() public formParentShowDet: any;
  @Input() public reasons: any;

  showDet: boolean = false;

  clickTit() {
    this.showDet = true;
    this.sendVal.emit(this);
  }

  ngOnChanges() {
    this.formParentShowDet === this ? null : this.showDet = false;
  }

  constructor() { }

  ngOnInit() {
    this.reasons.default ? this.showDet = true : null;
  }

}

