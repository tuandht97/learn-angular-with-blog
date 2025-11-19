import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { WindowRefService } from '../../service/return-window.service';
import { NgClass } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
    RouterLink,
    NzGridModule,
  ],
  providers: [
    WindowRefService
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  eventListener: any;
  public _window: Window;
  public blueBg: boolean = false;
  // public yOffset;

  /**
   * 在调用头部组件时 ：  <home-header [canchange]= 'true'></home-header>
   *     若传入 true 头部为开始透明然后变色，绝对定位为fixed
   *     若不传参数或传入的为 false 则表示规定为#0061ae且定位为relative            
   */
  @Input()
  public canchange: boolean = false;

  constructor(private router: Router,
    private windowRef: WindowRefService,
  ) {
    this._window = windowRef.nativeWindow;
  }

  ngOnInit(): void {
    this.canchange ? this.addListener() : null;
  }

  addListener() {
    let that = this;
    this.eventListener = this._window.addEventListener("scroll", () => {
      window.pageYOffset > 70 ? that.blueBg = true : that.blueBg = false;
      // this.yOffset.saveOffsetY(window.pageYOffset);
    });
  }

  ngOnDestroy() {
    this._window.removeEventListener("scroll", this.eventListener);
  }

  private showSmall: boolean = false;
  // 手机端的
  smallNav() {
    this.showSmall = !this.showSmall;
  }

  // goToNavPage(e,navUrl: string) {
  //   this.stopPropagation(e);
  //   this.router.navigateByUrl(navUrl);
  //   // console.log("navUrl",navUrl);
  // }

  // stopPropagation(e) { 
  //   e = e || window.event; 
  //   if(e.stopPropagation) { 
  //       e.stopPropagation(); 
  //   } else { 
  //       e.cancelBubble = true; 
  //   } 
  // }

}
