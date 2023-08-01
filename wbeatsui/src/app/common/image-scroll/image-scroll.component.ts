import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-scroll',
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.css']
})
export class ImageScrollComponent implements OnInit {
  images: string[] = [
    'assets/bgimage.jpg',
    'assets/wbeats.jpg'
    // Add more image URLs here
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
