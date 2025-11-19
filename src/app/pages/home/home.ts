import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HomeContent } from './home-content/home-content';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [
    CommonModule,
    HomeContent,
    Header
  ]
})
export class Home {

}
