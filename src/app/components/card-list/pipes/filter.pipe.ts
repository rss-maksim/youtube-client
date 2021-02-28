import { Pipe, PipeTransform } from '@angular/core';

import { ICard } from '../../../models/card';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: ICard[], search: string): ICard[] {
    if (search) {
      return value.filter((card: ICard) => {
        const title = card?.snippet?.title?.toLowerCase();
        return title?.includes(search.toLowerCase());
      });
    }
    return value;
  }

}
