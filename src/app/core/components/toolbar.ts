import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-toolbar',
  templateUrl: './toolbar.html',
  styleUrls: ['./toolbar.scss'],
})
export class ToolbarComponent {
  @Output() openMenu = new EventEmitter();
}
