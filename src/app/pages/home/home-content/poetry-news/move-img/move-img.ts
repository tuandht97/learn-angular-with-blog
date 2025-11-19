import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

type Direction = 'top' | 'right' | 'bottom' | 'left';

@Component({
  selector: 'app-move-img',
  imports: [],
  templateUrl: './move-img.html',
  styleUrl: './move-img.scss',
})
export class MoveImg implements OnInit, AfterViewInit {

  @Input() public newItem: any;
  @ViewChild('itemWrap') itemWrap!: ElementRef;
  @ViewChild('content') content!: ElementRef;

  private mousePos: Record<Direction, string> = {
    top: "top: -100%; left: 0",
    right: "top: 0; left: 100%",
    bottom: "top: 100%; left: 0",
    left: "top: 0; left: -100%"
  };

  constructor(private renderer2: Renderer2) { }

  ngOnInit() {
    // Không truy cập ViewChild ở đây
  }

  ngAfterViewInit() {
    // ViewChild đã được khởi tạo ở lifecycle này
    if (this.itemWrap?.nativeElement) {
      this.renderer2.setStyle(this.itemWrap.nativeElement, "background", "#0061ae");
    }
  }

  mouseenter(e: any) {
    if (!this.content?.nativeElement) return;

    let direction: Direction = this.getDirection(e);
    this.renderer2.removeClass(this.content.nativeElement, "active");
    this.renderer2.setAttribute(this.content.nativeElement, "style", this.mousePos[direction]);

    setTimeout(() => {
      if (this.content?.nativeElement) {
        this.renderer2.addClass(this.content.nativeElement, "active");
        this.renderer2.setAttribute(this.content.nativeElement, "style", "left: 0;top: 0");
      }
    }, 1)
  }

  mouseleave(e: any) {
    if (!this.content?.nativeElement) return;

    let direction: Direction = this.getDirection(e);
    this.renderer2.setAttribute(this.content.nativeElement, "style", this.mousePos[direction]);
  }

  getDirection(e: any): Direction {
    let dire: Direction[] = ['top', 'right', 'bottom', 'left'];
    return dire[this.moveInWay(e)]
  }

  moveInWay(e: any): number {
    // Kiểm tra itemWrap tồn tại
    if (!this.itemWrap?.nativeElement) return 0;

    let item = this.itemWrap.nativeElement;
    var b = item.getBoundingClientRect();
    var w = b.width;
    var h = b.height;
    var t = document.body.scrollTop;

    var x = (e.pageX - b.left - (w / 2)) * (w > h ? (h / w) : 1);
    var y = (e.pageY - b.top - t - (h / 2)) * (h > w ? (w / h) : 1);

    return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
  }
}