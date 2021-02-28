export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC'
}

export const defaultSort = {
  sortBy: 'date',
  orderBy: Direction.DESC,
  search: ''
};
