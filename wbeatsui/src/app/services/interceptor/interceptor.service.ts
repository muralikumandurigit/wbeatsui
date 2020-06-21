import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterService } from '../router/router.service';
import { tap } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {


	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let accessToken = sessionStorage.getItem("access_token");
		if (accessToken) {
			req = req.clone({
				setHeaders: {
					Authorization: `Bearer ${accessToken}`
				}
			});
		}
		return next.handle(req)
			.pipe(tap(() => { },
				(err: any) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status == 200) {
							return;
						}
//						this.router.navigate(['login']);
						this.router.redirectToLogin();
					}
					//				catchError(this.handleError))
				}));
	}

	constructor(private router: RouterService) { }
}

