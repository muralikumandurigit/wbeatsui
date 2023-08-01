import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  isCollapsed: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
