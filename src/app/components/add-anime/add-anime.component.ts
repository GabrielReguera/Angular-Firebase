import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Anime } from 'src/app/model/anime';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-add-anime',
  templateUrl: './add-anime.component.html',
  styleUrls: ['./add-anime.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class AddAnimeComponent {

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    temporada: [null, Validators.required],
    sinopse: [null, Validators.required],
    eps: [null, Validators.required],
  })

  constructor(
    private animeService: AnimesService,
    private fb: FormBuilder) {
  }

  addAnime() {
    if (this.form.invalid) { return }

    this.animeService.addAnime(this.form.value)
    this.form.reset()
  }
}
