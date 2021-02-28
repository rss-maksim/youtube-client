import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>();
  form: FormGroup = null;

  constructor() {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }

  public onSubmit() {
    const { value } = this.form.get('search');
    this.search.emit(value);
  }
}
