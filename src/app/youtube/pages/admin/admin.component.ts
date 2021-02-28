import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { AppState } from '../../../redux/state.models';
import { createVideo } from '../../../redux/actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  form: FormGroup = null;

  constructor(private store: Store<AppState>, private router: Router) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.minLength(3)),
      discription: new FormControl('', Validators.minLength(3)),
      imageUrl: new FormControl('', Validators.minLength(3)),
      videoUrl: new FormControl('', Validators.minLength(3)),
    });
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    const createdAt = Date.now();
    const video = { ...this.form.value, createdAt };
    this.store.dispatch(createVideo({ payload: video }));
    this.router.navigate(['/home']);
  }

}
