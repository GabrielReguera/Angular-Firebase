import { Component } from '@angular/core';
import { CardAnimeComponent } from '../card-anime/card-anime.component';
import { Anime } from 'src/app/model/anime';
import { Observable } from 'rxjs';
import { AnimesService } from 'src/app/services/animes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CardAnimeComponent, CommonModule]
})
export class HomeComponent {

  animes$!: Observable<Anime[]>

  constructor(private animeService: AnimesService) {
    this.animes$ = animeService.getAnimes()
  }



}
