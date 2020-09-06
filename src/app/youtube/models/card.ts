export interface IResponse<T = string> {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: ICard<T>[];
}

export interface ICard<T = string> {
  kind: string;
  etag: string;
  snippet: ISnippet;
  statistics: IStatistics;
  id?: T;
}

export interface IId {
  kind: string;
  videoId: string;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [name: string]: IThumbnail
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultLanguage?: ILanguage;
  defaultAudioLanguage: ILanguage;
}

export enum IType {
  'default'= 'default',
  'medium'= 'medium',
  'high'= 'high',
  'standard'= 'standard',
  'maxres'= 'maxres',
}

export enum ILanguage {
  en = 'en-US',
  ru = 'ru-RU'
}

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}
