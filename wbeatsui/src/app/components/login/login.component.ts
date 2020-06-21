import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../services/authservice/authservice.service';
import { RouterService } from '../../services/router/router.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private authService: AuthserviceService,
		private router: RouterService) { }

    public isLoginFailed: boolean = false;

	ngOnInit(): void { }

	login(myform) {
		console.log(myform.value.username);
		console.log(myform.value.password);

		this.authService.authenticate(myform.value.username, myform.value.password, (data: any, error: any) => {
			if(error==null) {
				this.isLoginFailed = false;
				this.router.redirectToHome();
			}
			else {
				this.isLoginFailed = true;
				this.router.redirectToLogin();
			}
		});

	}
}
