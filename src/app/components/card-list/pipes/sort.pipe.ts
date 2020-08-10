import { Pipe, PipeTransform } from '@angular/core';
import { sortBy as _sortBy, path } from 'ramda';

import { ICard } from '../../../models/card';
import { ISort, Direction } from '../../sorting-panel/sorting-panel.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(value: ICard[], params: ISort): ICard[] {
    return value.sort(sortByField(params));
  }

}

const sortByField = ({ sortBy, orderBy }: ISort) => {
  if (sortBy === 'date') {
    return sortByDate(orderBy);
  } else if (sortBy === 'countOfViews') {
    return sortByCountOfViews(orderBy);
  }
}

const sortByDate = (orderBy: string) => (a, b) => {
  const valA = new Date(path(['snippet', 'publishedAt'], a)).getTime();
  const valB = new Date(path(['snippet', 'publishedAt'], b)).getTime();
  return orderBy === Direction.DESC ? valA - valB : valB - valA;
};

const sortByCountOfViews = (orderBy: string) => (a, b) => {
  const valA = Number(path(['statistics', 'viewCount'], a));
  const valB = Number(path(['statistics', 'viewCount'], b));
  return orderBy === Direction.DESC ? valA - valB : valB - valA;
};
