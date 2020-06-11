import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	constructor(private authService: AuthserviceService,
		private router: Router) { }
  ngOnInit(): void {
  }

  async isLoggedIn() {
	console.log('From isValidToken');
	this.authService.isValidToken((isValidToken : any) => {
		console.log('From isValidToken: isValidToken = ' + isValidToken);
		if (!isValidToken) {
			console.log('From isValidToken: invalid/expired token. redirecting to login');
			this.router.navigateByUrl('/login');
			return isValidToken;
		}
		console.log('From isValidToken: valid token.returning true');
		return isValidToken;
	});
  }
}
