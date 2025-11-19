import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { fadeInUp } from '../../../../animations/fadeInUp';
import { MoveImg } from './move-img/move-img';

@Component({
  selector: 'app-poetry-news',
  imports: [CommonModule, MoveImg],
  templateUrl: './poetry-news.html',
  styleUrl: './poetry-news.scss',
  animations: [
    fadeInUp
  ]
})
export class PoetryNews implements OnInit {

  @Input() public whitchStart: any;

  startAnimationTit: boolean = false;
  startAnimationDet: boolean = false;

  ngOnChanges() {
    if (this.whitchStart === 3) {
      this.startAnimationTit = true;
      setTimeout(() => {
        this.startAnimationDet = true;
      }, 100)
    }
  }

  newsList = [
    {
      img: './assets/images/sliders/1.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/2.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/3.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/4.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/5.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    },
    {
      img: './assets/images/sliders/6.jpg',
      tit: '新闻标题',
      det: '新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容新闻内容'
    }
  ]

  ngOnInit() { }

  constructor() { }


}

