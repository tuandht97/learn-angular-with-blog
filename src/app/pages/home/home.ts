import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeContent } from './home-content/home-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    CommonModule,
    HomeContent
  ]
})
export class Home {

}
