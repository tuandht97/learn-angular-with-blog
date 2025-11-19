import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { fadeInUp } from '../../../../../animations/fadeInUp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner',
  imports: [CommonModule],
  templateUrl: './partner.html',
  styleUrl: './partner.scss',
  animations: [
    fadeInUp
  ]
})
export class Partner implements OnInit, OnChanges {

  @Input() public partnerStart: any;
  imgStart: boolean = false;

  ngOnChanges() {
    this.partnerStart ? this.beginImg() : null;
  }

  beginImg() {
    setTimeout(() => {
      this.imgStart = true;
    }, 300)
  }

  constructor() { }

  ngOnInit() {
  }
}

