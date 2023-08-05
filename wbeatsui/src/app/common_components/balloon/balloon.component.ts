import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-balloon',
  templateUrl: './balloon.component.html',
  styleUrls: ['./balloon.component.css']
})
export class BalloonComponent {
  bottomPosition = 0;
  
  moveBalloon() {
    this.bottomPosition += 20; // Move the balloon up by 20px
  }
}
