import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Footer } from '../../../../components/footer/footer';
import { Partner } from './partner/partner';

@Component({
  selector: 'app-partner-and-footer',
  imports: [
    Footer,
    Partner
  ],
  templateUrl: './partner-and-footer.html',
  styleUrl: './partner-and-footer.scss',
})
export class PartnerAndFooter implements OnInit, OnChanges {

  @Input() public whitchStart: any;

  partnerStart: boolean = false;
  ngOnChanges() {
    if (this.whitchStart === 4) {
      this.partnerStart = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}