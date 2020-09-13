import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from '../../../../../redux/state.models';
import { searchVideos } from '../../../../../redux/actions';
import { AuthService } from '../../../../../auth/services/auth.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  form: FormGroup = null;
  inputValue = '';
  isAuthorized = false;

  constructor(private store: Store<AppState>, private authService: AuthService) {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.authService.authorized$.subscribe((isAuthorized: boolean) => {
      this.isAuthorized = isAuthorized;
    });
  }

  public onInput(value: string = ''): void {
    if (!this.isAuthorized) {
      return;
    }
    if (this.inputValue.length <= 2 && value.length > 2 || this.inputValue.length >= 2) {
      this.store.dispatch(searchVideos({ payload: value }));
    }
    this.inputValue = value;
  }
}
