import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice/authservice.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authService: AuthserviceService,
		private router: Router) { }

	ngOnInit(): void { }

	login(myform) {
		console.log(myform.value.username);
		console.log(myform.value.password);

		this.authService.authenticate(myform.value.username, myform.value.password, (data: any, error: any) => {
			if(error==null) {
				this.router.navigateByUrl('/home');
			}
			else {
				this.router.navigateByUrl('/error');
			}
		});

	}

}
