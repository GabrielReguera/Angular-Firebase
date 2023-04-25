import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.css']
})
export class Button1Component {
  @Input() descricao?: string
  @Input() router?: string
}
