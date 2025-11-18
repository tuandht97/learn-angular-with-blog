import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChangeDot } from './change-dot/change-dot';

@Component({
  selector: 'app-slide-show',
  imports: [ChangeDot],
  templateUrl: './slide-show.html',
  styleUrl: './slide-show.scss',
})
export class SlideShow implements OnInit {

  /**
   * 步骤：
   * 1. 确定是查看下一张图片 add() 还是上一张 reduce()
   * 2. 设置下一张图片的 frontIndex 或上一张的 nextIndex, setFrontOrNextIndex()
   * 3. 设置背景图 changeBg()
   */

  // FIX: Thêm ! (definite assignment assertion) cho các ViewChild
  @ViewChild('firSlider') firSlider!: ElementRef;
  @ViewChild('secSlider') secSlider!: ElementRef;
  @ViewChild('thiSlider') thiSlider!: ElementRef;
  @ViewChild('fouSlider') fouSlider!: ElementRef;

  index: number = 0;
  // FIX: Khởi tạo giá trị mặc định
  private frontIndex: number = 0;
  private nextIndex: number = 0;

  add() {
    this.setFrontOrNextIndex(true);
    this.index >= 3 ? this.index = -1 : null
    this.index += 1;
    this.changeBg(true);
  }

  reduce() {
    this.setFrontOrNextIndex(false);
    this.index <= 0 ? this.index = 4 : null
    this.index -= 1;
    this.changeBg(false);
  }

  /**
   * @param flag boolean 切换图片
   */
  changeBg(flag: boolean) {
    // Kiểm tra tất cả slider tồn tại
    if (!this.firSlider || !this.secSlider || !this.thiSlider || !this.fouSlider) {
      console.error('One or more sliders are not initialized');
      return;
    }

    this.renderer2.removeClass(this.firSlider.nativeElement, "default-left");
    this.upDateInterval();

    let allSlider = [this.firSlider, this.secSlider, this.thiSlider, this.fouSlider];

    allSlider.forEach((item, index) => {
      if (item && item.nativeElement) {
        this.resetClass(item);
        if (this.index == index) {
          flag ? this.renderer2.addClass(item.nativeElement, "next-in")
            : this.renderer2.addClass(item.nativeElement, "front-in");
        }
      }
    });

    // Kiểm tra index hợp lệ
    if (flag && this.frontIndex >= 0 && this.frontIndex < allSlider.length) {
      const frontItem = allSlider[this.frontIndex];
      if (frontItem && frontItem.nativeElement) {
        this.renderer2.addClass(frontItem.nativeElement, "next-leave");
      }
    } else if (!flag && this.nextIndex >= 0 && this.nextIndex < allSlider.length) {
      const nextItem = allSlider[this.nextIndex];
      if (nextItem && nextItem.nativeElement) {
        this.renderer2.addClass(nextItem.nativeElement, "front-leave");
      }
    }

    this.innerAnimat(flag);
  }

  /**
   * 
   * @param val  要切换到的index ,是子组件切换轮播图的按钮传过来的数据
   */
  // FIX: Thêm kiểu dữ liệu cho parameter
  getIndex(val: number) {
    let flag: boolean;
    if (this.index === val) {
      return;
    } else if (this.index > val) {
      this.setFrontOrNextIndex(false);
      flag = false;
    } else {
      this.setFrontOrNextIndex(true);
      flag = true;
    }
    this.index = val;
    this.changeBg(flag);
  }

  /**
   * 定时自动切换
   */
  // FIX: Khai báo kiểu cho autoTimer
  private autoTimer: any;

  setAutoChange() {
    this.autoTimer = setInterval(() => {
      this.add();
    }, 4000);
  }

  clearAutoChange() {
    clearInterval(this.autoTimer);
  }

  upDateInterval() {
    this.clearAutoChange();
    this.setAutoChange();
  }

  // FIX: Thêm kiểu boolean cho parameter
  setFrontOrNextIndex(flag: boolean) {
    flag ? this.frontIndex = this.index : this.nextIndex = this.index;
  }

  /**
   * 
   * @param item element 要去除样式的元素
   */
  // FIX: Thêm kiểu ElementRef cho parameter
  resetClass(item: ElementRef) {
    let classArr = ["next-in", "next-leave", "front-in", "front-leave"];
    classArr.forEach(classItem => {
      this.renderer2.removeClass(item.nativeElement, classItem);
    })
  }

  /**
   * 轮播图里面的动画
   */

  // FIX: Thêm ! cho các ViewChild
  @ViewChild('firTit') firTit!: ElementRef;
  @ViewChild('firDet') firDet!: ElementRef;
  @ViewChild('firBtn') firBtn!: ElementRef;

  @ViewChild('secTit') secTit!: ElementRef;
  @ViewChild('secDet') secDet!: ElementRef;
  @ViewChild('secBtn') secBtn!: ElementRef;

  @ViewChild('thiTit') thiTit!: ElementRef;
  @ViewChild('thiDet') thiDet!: ElementRef;
  @ViewChild('thiBtn') thiBtn!: ElementRef;

  @ViewChild('fouTit') fouTit!: ElementRef;
  @ViewChild('fouDet') fouDet!: ElementRef;
  @ViewChild('fouBtn') fouBtn!: ElementRef;

  private animateArr = [
    "a-bounceinB", "a-fadeinT",
    "a-flipinX", "a-rotateinLB",
    "a-bounceinL", "a-fadeinL",
    "a-fadeinL", "a-fadeinL",
    "a-fadeinT", "a-fadeinL"
  ];
  // FIX: Khởi tạo giá trị mặc định
  private newAnimate: string = '';
  private oldAnimate: string = '';
  // FIX: Khai báo index signature cho object
  private pageTimer: { [key: string]: any } = {}

  // FIX: Thêm kiểu cho parameter
  innerAnimat(flag: boolean | string) {
    this.oldAnimate = this.newAnimate;
    this.newAnimate = this.animateArr[this.rd()];
    for (let item in this.pageTimer) {
      clearTimeout(this.pageTimer[item]);
    }
    this.cleanOrAddClass(this.index, true);
    if (flag === 'default') { return }
    if (flag) {
      this.cleanOrAddClass(this.frontIndex, false);
    } else {
      this.cleanOrAddClass(this.nextIndex, false);
    }
  }

  // FIX: Thêm kiểu cho parameters
  cleanOrAddClass(arrIndex: number, flag: boolean) {
    let domArr = [
      [this.firTit, this.firDet, this.firBtn],
      [this.secTit, this.secDet, this.secBtn],
      [this.thiTit, this.thiDet, this.thiBtn],
      [this.fouTit, this.fouDet, this.fouBtn],
    ];

    // Kiểm tra domArr[arrIndex] tồn tại
    if (!domArr[arrIndex]) {
      console.error(`domArr[${arrIndex}] is undefined`);
      return;
    }

    domArr[arrIndex].forEach((item, index) => {
      if (!item) return; // Bỏ qua nếu item undefined

      if (flag) {
        switch (index) {
          case 0:
            this.addAnimate(item); // Đã là ElementRef, không cần check nativeElement
            break;
          case 1:
            this.pageTimer["timer1"] = setTimeout(() => {
              this.addAnimate(item);
            }, 550);
            break;
          case 2:
            this.pageTimer["timer2"] = setTimeout(() => {
              this.addAnimate(item);
            }, 900);
            break;
          default: break;
        }
      } else {
        this.removeAnimate(item);
      }
    });
  }

  addAnimate(ele: ElementRef | undefined | null) {
    if (!ele || !ele.nativeElement) {
      console.error('ElementRef is undefined or null in addAnimate');
      return;
    }
    this.renderer2.addClass(ele.nativeElement, this.newAnimate);
  }

  removeAnimate(ele: ElementRef | undefined | null) {
    if (!ele || !ele.nativeElement) {
      console.error('ElementRef is undefined or null in removeAnimate');
      return;
    }
    this.renderer2.removeClass(ele.nativeElement, this.oldAnimate);
  }

  rd() {
    return Math.floor(Math.random() * 10);
  }

  goDown() {
    let ele = document.documentElement || document.body;
    let willScrTop = ele.offsetHeight - 58;
    let offY = window.pageYOffset;
    let timmer: number = requestAnimationFrame(function fn() {
      offY = offY + 50;
      if (willScrTop > offY) {
        window.scrollTo(0, offY);
        setTimeout(() => {
          timmer = requestAnimationFrame(fn)
        }, 1)
      } else {
        window.scrollTo(0, willScrTop);
        cancelAnimationFrame(timmer);
      }
    })
  }

  ngOnInit() {
    this.innerAnimat("default");
    this.setAutoChange();
  }

  ngAfterViewInit() {
    // Kiểm tra xem tất cả ViewChild đã được khởi tạo chưa
    console.log('Sliders initialized:', {
      firSlider: this.firSlider,
      secSlider: this.secSlider,
      thiSlider: this.thiSlider,
      fouSlider: this.fouSlider
    });
  }

  constructor(private renderer2: Renderer2) { }

}