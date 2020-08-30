import { Component, OnInit, Input } from '@angular/core';

import { ICard } from '../../models/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: ICard;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo(id) {
    this.router.navigate(['home', 'details', id]);
  }

}
