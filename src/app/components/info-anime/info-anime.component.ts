import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/model/anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class InfoAnimeComponent {
  anime$!: Observable<Anime>

  constructor(private activatedRoute: ActivatedRoute,
    private animeService: AnimesService) {
    const param = activatedRoute.snapshot.paramMap.get('idAnime')
    this.anime$ = animeService.getAnime(param!)
  }
}
