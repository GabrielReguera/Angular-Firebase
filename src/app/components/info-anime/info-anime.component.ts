import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/model/anime';
import { AnimesService } from 'src/app/services/animes.service';
import { Button2Component } from '../buttons/button2/button2.component';

@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css'],
  imports: [CommonModule, Button2Component, FontAwesomeModule],
  standalone: true
})
export class InfoAnimeComponent {
  anime$!: Observable<Anime>

  edit = faEdit
  delet = faTrash

  constructor(private activatedRoute: ActivatedRoute,
    private animeService: AnimesService) {
    const param = activatedRoute.snapshot.paramMap.get('idAnime')
    this.anime$ = animeService.getAnime(param!)
  }
}
