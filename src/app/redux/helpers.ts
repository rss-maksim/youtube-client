import { ILocalVideoItem } from './state.models';
import { ICard } from '../youtube/models/card';

export const transformToYoutubeCard = ({ title, imageUrl, createdAt, description }: ILocalVideoItem): ICard<string> => ({
  id: String(createdAt),
  snippet: {
    title,
    publishedAt: new Date(createdAt).toDateString(),
    description,
    thumbnails: {
      default: {
        url: imageUrl,
        width: 200,
        height: 100
      }
    }
  },
  statistics: {
    viewCount: '0',
    likeCount: '0',
    dislikeCount: '0',
    commentCount: '0',
    favoriteCount: '0'
  }
});
