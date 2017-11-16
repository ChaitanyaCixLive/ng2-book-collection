import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Authenticate } from '../models/user';
import * as fromAuth from '../reducers';
import * as Auth from '../actions/auth';

@Component({
  selector: 'bc-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss']
})
export class LoginPageComponent {
  pending$ = this.store.select(fromAuth.getLoginPagePending);
  error$ = this.store.select(fromAuth.getLoginPageError);

  constructor(private store: Store<fromAuth.State>) {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
  }
}
