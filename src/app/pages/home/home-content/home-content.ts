import { Component, OnInit } from '@angular/core';
import { WindowRefService } from '../../../service/return-window.service';
import { SlideShow } from './slide-show/slide-show';

@Component({
  selector: 'app-home-content',
  imports: [SlideShow],
  providers: [WindowRefService],
  templateUrl: './home-content.html',
  styleUrl: './home-content.scss',
})
export class HomeContent implements OnInit {

  private documentH = document.documentElement.offsetHeight || document.body.offsetHeight; // Chiều cao màn hình
  private documentW = document.documentElement.offsetWidth || document.body.offsetWidth; // Chiều rộng màn hình
  private _window: Window;

  // FIX 1: Thêm kiểu dữ liệu cho eventListener
  private eventListener: (() => void) | null = null;

  // FIX 2: Khởi tạo giá trị mặc định cho whitchStart
  whitchStart: number = 0;

  // FIX 3: Khai báo kiểu dữ liệu cho mảng
  private readyAnimateArray: number[] = [];

  constructor(private windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }

  goDown() {
    let defaultOffY = window.pageYOffset;
    let willScrTop = defaultOffY + this.documentH - 58 - defaultOffY % this.documentH;
    willScrTop === defaultOffY ? willScrTop = defaultOffY + this.documentH : null;
    let tempOffY = defaultOffY;

    // FIX 4: Khai báo biến timmer với kiểu number
    let timmer: number = requestAnimationFrame(function fn() {
      tempOffY = tempOffY + 50;
      if (willScrTop > tempOffY) {
        window.scrollTo(0, tempOffY);
        setTimeout(() => {
          timmer = requestAnimationFrame(fn)
        }, 1)
      } else {
        window.scrollTo(0, willScrTop);
        cancelAnimationFrame(timmer); // Nên hủy animation khi hoàn thành
      }
    })
  }

  goUp() {
    let defaultOffY = window.pageYOffset;
    if (defaultOffY <= 0) {
      return;
    }
    let willScrTop = defaultOffY - 58 - defaultOffY % this.documentH;
    let tempOffY = defaultOffY;

    let timmer: number = requestAnimationFrame(function fn() {
      tempOffY = tempOffY - 50;
      if (willScrTop < tempOffY) {
        window.scrollTo(0, tempOffY);
        setTimeout(() => {
          timmer = requestAnimationFrame(fn)
        }, 1)
      } else {
        window.scrollTo(0, willScrTop);
        cancelAnimationFrame(timmer);
      }
    })
  }

  addListener() {
    // FIX 5: Gán đúng function vào eventListener
    this.eventListener = () => {
      this.startAnimations();
    };
    this._window.addEventListener("scroll", this.eventListener);
  }

  startAnimations() {
    let ratio = Math.ceil((window.pageYOffset - this.documentH / 5) / this.documentH);
    if (this.readyAnimateArray.indexOf(ratio) == -1) {
      this.readyAnimateArray.push(ratio);
    } else {
      return;
    }
    this.whitchStart = ratio; // FIX 6: Sửa lỗi chính tả
  }

  ngOnInit() {
    console.log("this.documentW", this.documentW)
    if (this.documentW < 768) {
      for (let item = 0; item <= 5; item++) {
        setTimeout(() => {
          this.whitchStart = item;
        }, 1)
      }
    } else {
      this.addListener();
    }
  }

  ngOnDestroy() {
    if (this.eventListener) {
      this._window.removeEventListener("scroll", this.eventListener);
    }
  }

}
