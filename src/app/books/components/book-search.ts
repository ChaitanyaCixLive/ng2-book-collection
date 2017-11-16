import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'bc-book-search',
  templateUrl: './book-search.html',
  styleUrls: ['./book-search.scss']
})
export class BookSearchComponent {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';

  @Output() search = new EventEmitter<string>();
}
