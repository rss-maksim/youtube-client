import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CardListService } from '../../services/card-list.service';
import { ICard } from '../../models/card';
import { AppState } from '../../../redux/state.models';
import { selectVideoItemState } from '../../../redux/selectors/videos.selector';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  card$: Observable<ICard<string>>;
  item: ICard<string>;

  constructor(
    public route: ActivatedRoute,
    private router: Router, private cardListService: CardListService,
    private store: Store<AppState>
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.store.pipe(select(selectVideoItemState, { id })).subscribe((item: ICard) => {
        if (item) {
          this.item = item;
        } else {
          this.cardListService.getCard(id).subscribe((details: ICard) => {
            this.item = details;
          });
        }
      });
    });
  }

  back() {
    this.router.navigate(['/home']);
  }
}
