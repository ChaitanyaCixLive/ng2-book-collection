import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../reducers';
import * as collection from '../actions/collection';
import { Book } from '../models/book';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection-page.html',
  styleUrls: ['./collection-page.scss']
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.select(fromBooks.getBookCollection);
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }
}
