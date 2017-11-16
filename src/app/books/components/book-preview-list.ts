import { Component, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'bc-book-preview-list',
  templateUrl: './book-preview-list.html',
  styleUrls: ['./book-preview.scss'],
})
export class BookPreviewListComponent {
  @Input() books: Book[];
}
