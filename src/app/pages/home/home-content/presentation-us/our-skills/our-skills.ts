import { CommonModule, NgStyle } from '@angular/common';
import { Component, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-our-skills',
  imports: [NgStyle, CommonModule],
  templateUrl: './our-skills.html',
  styleUrl: './our-skills.scss',
})
export class OurSkills implements OnInit, OnChanges {

  @Input() public skillMeta: any;
  @Input() public skillsBarStart: any;
  // @ViewChild('processBar') processBar: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit() { }

  ngOnChanges() {
    // if (this.skillsBarStart) {
    //   console.log("this.skillsBarStart1111", this.skillsBarStart)
    //   this.renderer2.setProperty(this.processBar.nativeElement, "width", this.skillMeta.percentage);
    //   this.renderer2.setStyle(this.processBar.nativeElement, "background-color", this.skillMeta.color ? this.skillMeta.color : "#0061ea");
    // }
  }



}

