import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Anime } from 'src/app/model/anime';

@Component({
  selector: 'app-card-anime',
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.css'],
  imports: [],
  standalone: true
})
export class CardAnimeComponent {
  @Input() anime!: Anime;
}
