import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Anime } from 'src/app/model/anime';
import { AnimesService } from 'src/app/services/animes.service';


@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css'],
  imports: [ReactiveFormsModule, MatDialogModule, FontAwesomeModule],
  standalone: true
})
export class DialogEditComponent {

  close = faClose

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private animeService: AnimesService,
    private dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) private anime: Anime
  ) {
    this.form = this.fb.group({
      id: [anime.id],
      name: [anime.name, Validators.required],
      img: [anime.img, Validators.required],
      temporada: [anime.temporada, Validators.required],
      sinopse: [anime.sinopse, Validators.required],
      eps: [anime.eps, Validators.required],
    })
  }

  updateAnime() {
    if (this.anime.id) {
      this.animeService.updateAnime(this.anime.id, this.form.value)
        .then(() => this.dialogRef.close(true))
    }
  }

}
