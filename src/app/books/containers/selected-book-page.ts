import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../reducers';
import * as collection from '../actions/collection';
import { Book } from '../models/book';

@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './selected-book-page.html',
  styleUrls: ['./selected-book-page.scss']
})
export class SelectedBookPageComponent {
  book$: Observable<Book>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromBooks.State>) {
    this.book$ = store.select(fromBooks.getSelectedBook);
    this.isSelectedBookInCollection$ = store.select(
      fromBooks.isSelectedBookInCollection
    );
  }

  addToCollection(book: Book) {
    this.store.dispatch(new collection.AddBook(book));
  }

  removeFromCollection(book: Book) {
    this.store.dispatch(new collection.RemoveBook(book));
  }
}
