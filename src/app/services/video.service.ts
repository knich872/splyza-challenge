import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Video } from '../Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  getVideos(): Observable<Video[]>  {
    const videos = of(VIDEOS);
    return videos;
  }
}
