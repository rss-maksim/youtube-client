import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent {
  @Output() toggle = new EventEmitter<void>();

  onClick(): void {
    this.toggle.emit();
  }
}
