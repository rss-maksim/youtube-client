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
  inputValue = '';

  constructor() {
    this.form = new FormGroup({
      search: new FormControl('')
    });
  }

  public onInput(value: string = ''): void {
    if (this.inputValue.length <= 2 && value.length > 2 || this.inputValue.length >= 2) {
      this.search.emit(value);
    }
    this.inputValue = value;
  }
}
