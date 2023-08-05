import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-floating-circle',
  templateUrl: './floating-circle.component.html',
  styleUrls: ['./floating-circle.component.css']
})
export class FloatingCircleComponent {
  circleStyle = {};

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.updateCirclePosition();
  }

  ngOnInit() {
    this.updateCirclePosition();
  }

  onClick() {
    // Add your click event handling logic here
    console.log('Circle clicked!');
  }

  private updateCirclePosition() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.circleStyle = { bottom: 50 + yOffset + 'px' };
  }
}
