import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-links',
  templateUrl: './video-links.page.html',
  styleUrls: ['./video-links.page.scss'],
})
export class VideoLinksPage implements OnInit {

  videos:any = [
    {
      id:1,
      name: 'Video 1',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:2,
      name: 'Video 2',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:3,
      name: 'Video 3',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:4,
      name: 'Video 4',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:5,
      name: 'Video 5',
      url: 'http://localhost:8100/tabs/dashboard'
    },
    {
      id:6,
      name: 'Video 6',
      url: 'http://localhost:8100/tabs/dashboard'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
