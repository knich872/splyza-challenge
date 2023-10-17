import {User} from './User'

export interface Video {
  id: string,
  title: string,
  description: string,
  createdDate: string, // iso date string
  author: User,
  url: string,
  previewUrl: string
}
