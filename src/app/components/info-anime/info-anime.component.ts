import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Anime } from 'src/app/model/anime';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css'],
  standalone: true
})
export class InfoAnimeComponent {
  anime!: Anime

  constructor(private activatedRoute: ActivatedRoute) {
    const param = activatedRoute.snapshot.paramMap.get('idAnime')
    
  }
}
