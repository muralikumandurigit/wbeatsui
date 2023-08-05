import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-clickable-circle',
  templateUrl: './clickable-circle.component.html',
  styleUrls: ['./clickable-circle.component.css'],
  animations: [
    trigger('expandAnimation', [
      state('false', style({ transform: 'scale(1)' })),
      state('true', style({ transform: 'scale(1.5)' })),
      transition('false <=> true', animate('300ms ease-in-out'))
    ])
  ]
})
export class ClickableCircleComponent {
  isExpanded = false;

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
