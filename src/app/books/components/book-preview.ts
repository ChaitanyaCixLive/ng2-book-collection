import { Component, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'bc-book-preview',
  templateUrl: './book-preview.html',
  styleUrls: ['./book-preview.scss'],
})
export class BookPreviewComponent {
  @Input() book: Book;

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail;
    }

    return false;
  }
}
