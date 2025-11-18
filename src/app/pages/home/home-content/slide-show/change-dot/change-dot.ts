import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-dot',
  imports: [],
  templateUrl: './change-dot.html',
  styleUrl: './change-dot.scss',
})
export class ChangeDot implements OnInit, OnChanges {


  @ViewChild('firDot') firDot!: ElementRef;
  @ViewChild('secDot') secDot!: ElementRef;
  @ViewChild('thiDot') thiDot!: ElementRef;
  @ViewChild('fouDot') fouDot!: ElementRef;

  @Input() public currentIndex: number = 0;
  @Output() sendIndex: EventEmitter<any> = new EventEmitter();

  changBg(temp: number) {
    this.changeDotStyle(temp);
    this.sendIndex.emit(temp);
  }

  changeDotStyle(temp: number) {
    let domArray = [this.firDot, this.secDot, this.thiDot, this.fouDot];
    domArray.forEach((item, index) => {
      if (!item) return;

      if (temp === index) {
        this.renderer2.addClass(item.nativeElement, "active-dot");
      } else {
        this.renderer2.removeClass(item.nativeElement, "active-dot");
      }
    });
  }

  ngOnChanges() {
    this.changeDotStyle(this.currentIndex);
  }

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
  }

}

