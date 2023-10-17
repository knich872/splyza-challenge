import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/db/videos.json'

  constructor(private http:HttpClient) { }

  getVideos(): Observable<Video[]>  {
    return this.http.get<Video[]>(this.apiUrl);
  }
}
