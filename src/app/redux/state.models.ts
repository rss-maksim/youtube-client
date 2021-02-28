import { ICard } from '../youtube/models/card';

export interface AppState {
  auth: IAuthState;
  videos: IVideosState;
}

export interface IVideosState {
  videos: ICard<string>[];
  localVideos: ICard<string>[];
  filterIsOpen: boolean;
}

export interface IAuthState {
  username: string;
  isAuthorized: boolean;
}

export interface ILocalVideoItem {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
  createdAt: number;
}
