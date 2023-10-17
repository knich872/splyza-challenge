import { Component, OnInit } from '@angular/core';
import {Video} from '../../Video'
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {

  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((videos) =>
    (this.videos = videos));
  }
}
