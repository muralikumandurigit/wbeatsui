import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-moving-circle',
  templateUrl: './moving-circle.component.html',
  styleUrls: ['./moving-circle.component.css']
})

export class MovingCircleComponent {
  @Input() name!: string;
  @Input() color!: string;
  
  onClick(): void {
    // Add your logic here for what should happen when the circle is clicked.
  }

}
