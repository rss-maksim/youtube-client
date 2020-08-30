import { Directive, Input, OnInit, ElementRef } from '@angular/core';

const secondsInDay = 3600 * 24 * 1000;

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @Input('date') publishedAt: string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const now = Date.now();
    const ts = new Date(this.publishedAt).getTime();
    const difference = now - ts;
    let color: string;
    if (difference < secondsInDay * 7) {
      color = '#2F80ED';
    } else if (difference < secondsInDay * 30) {
      color = '#27AE60';
    } else if (difference < secondsInDay * 30 * 6) {
      color = '#F2C94C';
    } else {
      color = '#EB5757';
    }
    this.elementRef.nativeElement.style.backgroundColor = color;
  }
}
