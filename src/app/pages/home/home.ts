import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Board } from '../../components/board/board';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Board],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
