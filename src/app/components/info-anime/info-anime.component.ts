import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Anime } from 'src/app/model/anime';
import { AnimesService } from 'src/app/services/animes.service';
import { Button2Component } from '../buttons/button2/button2.component';
import { DialogEditComponent } from '../dialogs/dialog-edit/dialog-edit.component';
import { Dialog1Component } from '../dialogs/dialog1/dialog1.component';


@Component({
  selector: 'app-info-anime',
  templateUrl: './info-anime.component.html',
  styleUrls: ['./info-anime.component.css'],
  imports: [CommonModule, Button2Component, FontAwesomeModule, MatDialogModule],
  standalone: true
})
export class InfoAnimeComponent {
  anime$!: Observable<Anime>

  edit = faEdit
  delet = faTrash

  param: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimesService,
    private dialog: MatDialog) {
    this.param = activatedRoute.snapshot.paramMap.get('idAnime')!
    this.getAnime()
  }

  getAnime() {
    this.anime$ = this.animeService.getAnime(this.param!)
  }

  openDialog(anime: Anime) {
    anime.id = this.param
    const editDialog = this.dialog.open(DialogEditComponent, {
      width: 'auto',
      data: anime
    })

    editDialog.afterClosed().subscribe(boolean => boolean ? this.getAnime() : null)
  }

  openDialogDelete() {
    const editDialog = this.dialog.open(Dialog1Component, {
      width: 'auto',
      data: this.param
    })
  }

}
