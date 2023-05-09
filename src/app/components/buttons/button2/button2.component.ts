import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.css'],
  imports: [RouterModule, FontAwesomeModule],
  standalone: true
})
export class Button2Component {

  @Input() icon!: IconDefinition;
  @Input() router?: string;
  @Input() title?: string;

}
