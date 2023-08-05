import { Component } from '@angular/core';

@Component({
  selector: 'app-home-animation',
  templateUrl: './home-animation.component.html',
  styleUrls: ['./home-animation.component.css']
})
export class HomeAnimationComponent {
  home : string = "Home";
  about : string = "About Us";
  programs : string = "Programs";
  admissions : string = "Admissions";
  careers : string = "Careers";
  contact : string = "Contact Us";

  homeColor : string = 'red';
  aboutColor : string = "skyblue";
  programsColor : string = "lightgreen";
  admissionsColor : string = "orange";
  careersColor : string = "blue";
  contactColor : string = "yellow";
}
