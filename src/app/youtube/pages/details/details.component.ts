import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardListService } from '../../services/card-list.service';
import { ICard } from '../../models/card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item: ICard;

  constructor(public route: ActivatedRoute, private router: Router, private cardListService: CardListService) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.cardListService.getCard(id).subscribe((details: ICard<string>) => {
        this.item = details;
      });
    });
  }

  back() {
    this.router.navigate(['/home']);
  }
}
