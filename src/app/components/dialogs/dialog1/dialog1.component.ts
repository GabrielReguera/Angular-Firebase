import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-dialog1',
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css'],
  imports: [MatDialogModule, FontAwesomeModule, MatButtonModule],
  standalone: true
})
export class Dialog1Component {

  constructor(
    private animeService: AnimesService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) private id: string) { }

  deleteAnime() {
    this.animeService.deleteAnime(this.id).then(() => this.router.navigate(['home']))
  }
}
