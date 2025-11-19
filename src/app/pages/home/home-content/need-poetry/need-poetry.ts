import { Component, Input, OnChanges } from '@angular/core';
import { fadeInUp } from '../../../../animations/fadeInUp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-need-poetry',
  imports: [CommonModule],
  templateUrl: './need-poetry.html',
  styleUrl: './need-poetry.scss',
  animations: [
    fadeInUp
  ]
})
export class NeedPoetry implements OnChanges {

  @Input() public whitchStart: any;

  startAnimationTit: boolean = false;
  startAnimationDet: boolean = false;

  ngOnChanges() {
    if (this.whitchStart === 1) {
      this.startAnimationTit = true;
      setTimeout(() => {
        this.startAnimationDet = true;
      }, 100)
    }
  }

}
