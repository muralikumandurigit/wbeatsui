import { Injectable } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class AuthserviceService {

	private _currentUser: string;

	private _accessTokenKey: string = 'access_token';

	constructor(private dataService: DataService) { }

	public set currentUser(value) {
		this._currentUser = value;
	}
	public get currentUser() {
		return this._currentUser;
	}

	public authenticate(uid: string, passwd: string, callback) {
		this.dataService.sendPostRequest(environment.loginurl, {
			uid: uid,
			passwd: passwd
		}, (data, error) => {
			if (error == null) {
				this._currentUser = uid;
				console.log('Token = ' + data.token);
				localStorage.setItem(this._accessTokenKey, data);
			}
			callback(data, error);
		});
	}

	public isValidToken(callback) {
		const token = localStorage.getItem(this._accessTokenKey);
		console.log('From isValidToken');
		if (token == null) {
			console.log('From isValidToken: no token present');
			callback(false);
		}
		else {
			this.dataService.sendPostRequest(environment.validateToken, {}, (_data: any, _error: any) => {
				if (_error == null) {
					console.log('From isValidToken: valid token');
					callback(true);
				}
				else {
					console.log('From isValidToken: invalid/expired token');
					localStorage.removeItem(this._accessTokenKey);
					callback(false);
				}
			});
		}
	}
}
