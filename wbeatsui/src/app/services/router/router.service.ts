import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

   redirectToLogin() {
	 console.log("From router component. Redirecting to Login page");
	 this.router.navigateByUrl('/login');
   }

   redirectToHome() {
	 console.log("From router component. Redirecting to Home page");
	 this.router.navigateByUrl('/home');
   }
}
