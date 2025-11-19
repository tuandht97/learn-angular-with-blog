import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Reasons } from './reasons/reasons';
import { OurSkills } from './our-skills/our-skills';
import { HeSaid } from './he-said/he-said';

@Component({
  selector: 'app-presentation-us',
  imports: [CommonModule, Reasons, OurSkills, HeSaid],
  templateUrl: './presentation-us.html',
  styleUrl: './presentation-us.scss',
})
export class PresentationUs implements OnInit {

  @Input() public whitchStart: any;

  public showDet: boolean | undefined;
  /* 传递过来的是判断为 this ，指定被点击的组件，由此可判别是哪个组件的被点击了   */
  getVal(val: boolean) {
    this.showDet = val;
  }

  public skillsBarStart: boolean = false;
  ngOnChanges() {
    if (this.whitchStart === 2) {
      this.skillsBarStart = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  whyChooseUs = [
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      default: 'true'
    },
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
    },
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
    },
    {
      title: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋",
      detail: "诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋诗词歌赋"
    },
  ]

  skillMetas = [
    {
      name: '唐诗',
      percentage: '40%',
      color: '#0061ea'
    },
    {
      name: '唐诗',
      percentage: '80%',
      color: '#5D9CEC'
    },
    {
      name: '唐诗',
      percentage: '95%',
      color: '#FC6E52'
    },
    {
      name: '唐诗',
      percentage: '99%',
      color: '#5D9CEC'
    },
    {
      name: '唐诗',
      percentage: '100%',
      color: '#AC92EC'
    },
    {
      name: '唐诗',
      percentage: '50%',
      color: '#656D78'
    }

  ]
}

