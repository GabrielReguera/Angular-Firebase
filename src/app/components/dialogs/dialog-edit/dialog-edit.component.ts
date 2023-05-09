import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
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

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    temporada: [null, Validators.required],
    sinopse: [null, Validators.required],
    eps: [null, Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private animeService: AnimesService
  ) { }

  updateAnime() { }
}
